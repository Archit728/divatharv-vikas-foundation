"use client";

import { Megaphone } from "lucide-react";
import { useEffect, useState } from "react";

interface Announcement {
  order: number;
  heading: string;
  url?: string;
}

interface AnnouncementsData {
  announcements: Announcement[];
  last_updated: string;
}

export default function AnnouncementRibbon() {
  //   const [announcementsData, setAnnouncementsData] =
  // useState<AnnouncementsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  //two states One for the currently displayed list, and one for the pending updates
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [pendingAnnouncements, setPendingAnnouncements] = useState<
    Announcement[] | null
  >(null);

  //Make animation finite (1) and listen for onAnimationEnd
  // Right now you use infinite. Instead, let one full scroll finish, then decide whether to update.
  const [animationKey, setAnimationKey] = useState(0);

  // Tailwind background SVG pattern
  const bgPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`;

  useEffect(() => {
    fetchAnnouncements();

    const refreshInterval = Number.parseInt(
      process.env.NEXT_PUBLIC_ANNOUNCEMENTS_REFRESH_INTERVAL || "70000"
    );
    const interval = setInterval(fetchAnnouncements, refreshInterval);

    return () => clearInterval(interval);
  }, []);

  //   const fetchAnnouncements = async () => {
  //     try {
  //       const response = await fetch("/api/announcements");
  //       const data = await response.json();

  //       if (data.error) {
  //         setError(data.error);
  //       } else {
  //         // setAnnouncementsData(data);

  //         if (!announcements.length) {
  //           // first time load → show immediately
  //           setAnnouncements(data.announcements);
  //         } else if (
  //           JSON.stringify(data.announcements) !== JSON.stringify(announcements)
  //         ) {
  //           // if data changed, buffer it
  //           setPendingAnnouncements(data.announcements);
  //         }

  //         setError(null);
  //       }
  //     } catch (err) {
  //       setError("Failed to load announcements");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch("/api/announcements");
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setAnnouncements((current) => {
        // First load → display immediately
        if (!current.length) {
          // console.log("Initial load of announcements");
          return data.announcements;
        }

        // If new data is different from both current and pending, buffer it
        if (
          JSON.stringify(data.announcements) !== JSON.stringify(current) &&
          JSON.stringify(data.announcements) !==
            JSON.stringify(pendingAnnouncements)
        ) {
          setPendingAnnouncements(data.announcements);
          // console.log("Buffered new announcements, will swap at end of scroll");
        } else {
          // console.log("No new announcements, repeat current cycle");
        }

        // No immediate change for now
        return current;
      });

      setError(null);
    } catch (err) {
      setError("Failed to load announcements");
    } finally {
      setLoading(false);
    }
  };

  //cases the DOM to not render in these cases
  //   if (loading || error || !announcementsData?.announcements.length) {
  //     return null;
  //   }

  // Always show ribbon container
  //   const shouldShowAnnouncements =
  //     announcementsData?.announcements?.length && !error;
  const shouldShowAnnouncements = announcements?.length && !error;

  //   console.log("should show", shouldShowAnnouncements);
  //   const handleAnnouncementClick = (url?: string) => {
  //     if (url) {
  //       window.open(url, "_blank", "noopener,noreferrer");
  //     }
  //   };

  //   const renderAnnouncementContent = () => (
  //     <>
  //       {announcementsData!.announcements.map((announcement, index) => (
  //         <span
  //           key={`${announcement.order}-${index}`}
  //           className="inline-flex items-center"
  //         >
  //           {announcement.url ? (
  //             <button
  //               onClick={() => handleAnnouncementClick(announcement.url)}
  //               className="text-white hover:text-yellow-300 transition-colors duration-200 flex items-center group"
  //             >
  //               <Megaphone className="w-4 h-4 mr-2 flex-shrink-0" />
  //               <span className="font-medium">{announcement.heading}</span>
  //               <ExternalLink className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
  //             </button>
  //           ) : (
  //             <span className="text-white flex items-center">
  //               <Megaphone className="w-4 h-4 mr-2 flex-shrink-0" />
  //               <span className="font-medium">{announcement.heading}</span>
  //             </span>
  //           )}
  //           {index < announcementsData!.announcements.length - 1 && (
  //             <span className="mx-6 text-yellow-300 font-bold">•</span>
  //           )}
  //         </span>
  //       ))}
  //     </>
  //   );

  //   return (
  //     <div className="w-full bg-gradient-to-r from-[#b86e33] via-[#d9a76c] to-[#b86e33] shadow-lg relative overflow-hidden">
  //       {/* Background pattern */}
  //       <div className="absolute inset-0 opacity-10">
  //         <div
  //           className="absolute inset-0"
  //           style={{ backgroundImage: bgPattern }}
  //         ></div>
  //       </div>

  //       <div className="relative">
  //   {shouldShowAnnouncements ? (
  //     <>
  //       {/* Mobile View */}
  //       <div className="block md:hidden py-3 px-4">
  //         <div className="flex items-center justify-center">
  //           <Megaphone className="w-4 h-4 text-yellow-300 mr-2 flex-shrink-0" />
  //           <div className="text-white text-sm font-medium text-center">
  //             {announcementsData!.announcements.length > 0 && (
  //               <span>{announcementsData!.announcements[0].heading}</span>
  //             )}
  //           </div>
  //         </div>
  //       </div>

  //       {/* Desktop View - Scrolling Ribbon */}
  //       <div className="hidden md:block">
  //         <div className="overflow-hidden whitespace-nowrap py-3 relative">
  //           <div
  //             className="inline-block whitespace-nowrap"
  //             style={{
  //               animation: `scroll-left ${
  //                 announcementsData!.announcements.length * 5
  //               }s linear infinite`,
  //               animationPlayState: isPaused ? "paused" : "running",
  //             }}
  //             onMouseEnter={() => setIsPaused(true)}
  //             onMouseLeave={() => setIsPaused(false)}
  //           >
  //             {announcementsData!.announcements.map((announcement, index) => (
  //               <span
  //               key={`${announcement.order}-${index}`}
  //               className="inline-block mr-12 text-white font-medium cursor-pointer hover:text-yellow-300 transition-colors duration-200"
  //               >
  //                 <Megaphone className="w-4 h-4 mr-2 inline-block" />
  //                 {announcement.heading}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   ) : (
  //     // Placeholder while loading
  //     <div className="py-3 px-4 text-center text-white/70 text-sm">
  //       Loading announcements...
  //     </div>
  //   )}
  // </div>

  //     </div>
  //   );

  return (
    <div className="w-full bg-gradient-to-r from-[#b86e33] via-[#d9a76c] to-[#b86e33] shadow-lg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: bgPattern }}
        ></div>
      </div>

      <div className="relative">
        {shouldShowAnnouncements ? (
          <div className="overflow-hidden whitespace-nowrap py-3 relative">
            <div
              key={animationKey} // force restart animation
              className="inline-block whitespace-nowrap"
              style={{
                paddingLeft: "100%", // ensures smooth re-entry from right
                // animation: `scroll-left ${
                //   announcementsData!.announcements.length * 5
                // }s linear infinite`,
                // animation: `scroll-left
                // ${announcements.length * 5}s
                // linear 1`,
                animation: `scroll-left 20s linear 1`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onAnimationEnd={() => {
                if (pendingAnnouncements) {
                  // console.log("Swapping to buffered announcements");
                  setAnnouncements(pendingAnnouncements);
                  setPendingAnnouncements(null);
                } else {
                  // console.log("No new announcements, repeat current cycle");
                }
                setAnimationKey((prev) => prev + 1); //restart loop no matter what
              }}
            >
              {/* {announcementsData!.announcements.map((announcement, index) => ( */}
              {announcements.map((announcement, index) => (
                <span
                  key={`${announcement.order}-${index}`}
                  className="inline-block mr-12 text-white font-medium cursor-pointer hover:text-yellow-300 transition-colors duration-200"
                >
                  {/* <Megaphone className="w-4 h-4 mr-2 inline-block" />
                  {announcement.heading} */}
                  {announcement.url ? (
                    <a
                      href={announcement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                    >
                      <Megaphone className="w-4 h-4 mr-2 inline-block" />
                      <span className="font-medium">
                        {announcement.heading}
                      </span>
                    </a>
                  ) : (
                    <span className="text-white inline-flex items-center">
                      <Megaphone className="w-4 h-4 mr-2 inline-block" />
                      <span className="font-medium">
                        {announcement.heading}
                      </span>
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ) : (
          // Placeholder while loading
          <div className="py-3 px-4 text-center text-white/70 text-sm invisible">
            Loading announcements...
          </div>
        )}
      </div>
    </div>
  );
}
