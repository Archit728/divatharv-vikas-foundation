"use client";

import { Sparkles, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LiveCountData {
  count: number;
  last_updated: string;
}

interface LiveCounterProps {
  className?: string;
}

export default function LiveCounter({ className = "" }: LiveCounterProps) {
  const [currentCount, setCurrentCount] = useState(0);
  const [targetCount, setTargetCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasReachedMillion, setHasReachedMillion] = useState(false);
  const animationRef = useRef<number | null>(null);
  const celebrationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchLiveCount();

    // Set up polling every minute
    const interval = setInterval(fetchLiveCount, 60000);

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (celebrationTimeoutRef.current) {
        clearTimeout(celebrationTimeoutRef.current);
      }
    };
  }, []);

  const fetchLiveCount = async () => {
    try {
      const response = await fetch("/api/live-count");
      const data: LiveCountData = await response.json();

      if (data.count !== undefined && data.count !== targetCount) {
        setTargetCount(data.count);
        animateToTarget(data.count);
      }
    } catch (error) {
      console.error("Failed to fetch live count:", error);
    }
  };

  const animateToTarget = (target: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const startCount = currentCount;
    const difference = target - startCount;
    const duration = Math.min(2000, Math.abs(difference) * 2); // Max 2 seconds, 2ms per unit
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.round(startCount + difference * easeOutCubic);

      setCurrentCount(newCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);

        // Check for million milestone
        if (target >= 1000000 && !hasReachedMillion) {
          setHasReachedMillion(true);
          triggerCelebration();
        }
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const triggerCelebration = () => {
    setShowCelebration(true);
    celebrationTimeoutRef.current = setTimeout(() => {
      setShowCelebration(false);
    }, 3000); // Show celebration for 3 seconds
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className={`text-center relative ${className}`}>
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Party Poppers */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${20 + i * 10}%`,
                top: `${10 + (i % 2) * 20}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: "0.6s",
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          ))}

          {/* Confetti Effect */}
          <div className="absolute inset-0 animate-pulse">
            <div className="w-full h-full bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 rounded-full blur-xl"></div>
          </div>

          {/* Success Message */}
          {/* <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
            🎉 1 Million Milestone! 🎉
          </div> */}
        </div>
      )}

      {/* Icon with glow effect when celebrating */}
      <div
        className={`w-12 h-12 bg-gradient-to-br from-[#BC3908] to-[#F6AA1C] rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ${
          showCelebration ? "shadow-lg shadow-orange-400/50 scale-110" : ""
        }`}
      >
        <Users
          className={`w-6 h-6 text-white transition-all duration-300 ${
            showCelebration ? "animate-pulse" : ""
          }`}
        />
      </div>

      {/* Animated Counter */}
      <div
        className={`text-2xl font-bold text-gray-900 transition-all duration-300 ${
          showCelebration ? "text-orange-600 scale-110" : ""
        } ${isAnimating ? "animate-pulse" : ""}`}
      >
        {formatNumber(currentCount)}
      </div>

      {/* Label */}
      <div className="text-sm text-gray-600">Lives Impacted</div>

      {/* Progress indicator for million milestone */}
      {/* {currentCount > 0 && currentCount < 1000000 && (
        <div className="mt-2 w-full max-w-[80px] mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#BC3908] to-[#F6AA1C] transition-all duration-500 ease-out"
              //   style={{ width: `${(currentCount / 1000000) * 100}%` }}
              style={{
                width: `${Math.min((currentCount / 1000000) * 100, 100)}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {((currentCount / 1000000) * 100).toFixed(1)}% to 1M
          </div>
        </div>
      )} */}

      {/* Million achieved badge */}
      {hasReachedMillion && (
        <div className="mt-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <Sparkles className="w-3 h-3 mr-1" />
            Milestone Achieved!
          </span>
        </div>
      )}
    </div>
  );
}
