import React from "react";
import { Bell } from "lucide-react";

const AnnouncementBar: React.FC = () => {
  return (
    <div
      className="overflow-hidden border-t border-b"
      style={{
        background: "linear-gradient(135deg, #0f2550, #1a3260)",
        borderColor: "rgba(232,185,79,0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center gap-3">

        {/* Bell stays fixed — outside any animation */}
        <Bell
          className="text-yellow-400 flex-shrink-0"
          size={18}
        />

        {/* Only this wrapper clips the scrolling text */}
        <div className="flex-1 overflow-hidden">
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: "marquee 20s linear infinite",
            }}
          >
            <span className="text-white font-medium tracking-wide">
              ADMISSION OPEN for session 2026–27 Class I to V (English Medium)
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ADMISSION OPEN for session 2026–27 Class I to V (English Medium)
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;