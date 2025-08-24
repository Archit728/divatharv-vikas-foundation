"use client";

import { ArrowLeft, Calendar, Clock, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Event {
  name: string;
  image: string;
  pdf: string;
  created_at: string;
}

interface EventsData {
  past_events: Event[];
  upcoming_events: Event[];
  all_events: Event[];
  last_updated: string;
}

type TabType = "all" | "upcoming" | "past";

export default function EventsPage() {
  const [eventsData, setEventsData] = useState<EventsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("all");

  useEffect(() => {
    fetchEvents();
    // Set up polling every 2 minutes
    const interval = setInterval(fetchEvents, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setEventsData(data);
        setError(null);
      }
    } catch (err) {
      setError("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentEvents = (): Event[] => {
    if (!eventsData) return [];

    switch (activeTab) {
      case "upcoming":
        return eventsData.upcoming_events;
      case "past":
        return eventsData.past_events;
      default:
        return eventsData.all_events;
    }
  };

  const handleEventClick = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  const formatEventName = (name: string) => {
    //return name.replace(/[()]/g, "").replace(/\d+/g, "").trim() || "Event";
    return name;
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="text-center">
              {/* Animated Loading */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 border-4 border-[#fbecca] rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#b86e33] rounded-full border-t-transparent animate-spin"></div>
                <Calendar className="absolute inset-0 m-auto w-8 h-8 text-[#b86e33]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
                Loading Events
              </h2>
              <p className="text-gray-600">
                Fetching the latest events from our archives...
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#b86e33] rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-[#b86e33] rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[#b86e33] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Events Error
            </h1>
            <p className="text-gray-600 text-lg mb-8">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#b86e33] to-[#d9a76c] text-white rounded-full font-semibold hover:from-[#a05e2b] hover:to-[#c9925a] transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const currentEvents = getCurrentEvents();

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-[#fef6e4] to-[#fbecca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Link
            href="/"
            className="inline-flex items-center text-[#b86e33] hover:text-[#a05e2b] font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our journey through impactful events, workshops, and
            community gatherings
          </p>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">
              {eventsData?.all_events.length || 0}
            </div>
            <div className="text-gray-600 text-sm">Total Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">
              {eventsData?.upcoming_events.length || 0}
            </div>
            <div className="text-gray-600 text-sm">Upcoming</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">
              {eventsData?.past_events.length || 0}
            </div>
            <div className="text-gray-600 text-sm">Past Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-[#b86e33] mb-2">2024</div>
            <div className="text-gray-600 text-sm">Since</div>
          </div>
        </div> */}

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {[
                { key: "all", label: "All Events", icon: Calendar },
                { key: "upcoming", label: "Upcoming", icon: Clock },
                { key: "past", label: "Past Events", icon: FileText },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabType)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeTab === key
                      ? "bg-gradient-to-r from-[#b86e33] to-[#d9a76c] text-white shadow-md"
                      : "text-gray-600 hover:text-[#b86e33] hover:bg-[#fef6e4]"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {currentEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentEvents.map((event, index) => (
              <div
                key={`${event.name}-${index}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                onClick={() => handleEventClick(event.pdf)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full overflow-hidden aspect-[7/10]">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={formatEventName(event.name)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center text-white">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">
                        View Event Details
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair line-clamp-2">
                    {formatEventName(event.name)}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Events Found
            </h3>
            <p className="text-gray-600">
              {activeTab === "upcoming" &&
                "No upcoming events scheduled at the moment."}
              {activeTab === "past" && "No past events to display."}
              {activeTab === "all" && "No events available."}
            </p>
          </div>
        )}

        {/* Last Updated */}
        {/* {eventsData?.last_updated && (
          <div className="text-center mt-12 text-gray-500 text-sm">
            Last updated: {new Date(eventsData.last_updated).toLocaleString()}
          </div>
        )} */}
      </div>
    </main>
  );
}
