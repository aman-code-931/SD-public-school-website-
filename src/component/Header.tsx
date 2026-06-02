
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div
      className="w-full border-b-4 border-yellow-400 shadow-2xl relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3260 60%, #0f2550 100%)",
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.015) 30px, rgba(255,255,255,0.015) 60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 md:py-3 flex items-center justify-between">
        {/* Left: Logo + School Name */}
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div
            
          >
            <Link to="/">
            <img
              src="/images/logo.svg"
              alt="School Logo"
              loading="eager"
              decoding="async"
              fetchPriority="high"
             
              className="w-40 h-40 md:w-30 md:h-30 object-contain -mt-6 drop-shadow-xl"
            />
            </Link>
          </div>

          {/* Name & Badge */}
          <div>
            <h1
              className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              S.D{" "}
              <span className="text-yellow-400">Public</span>{" "}
              School
            </h1>
            <div className="inline-flex items-center gap-1.5 mt-1.5 px-3 py-0.5 rounded-full border text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(232,185,79,0.12)",
                borderColor: "rgba(232,185,79,0.35)",
                color: "#e8c96f",
              }}
            >
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Recognised by MCD
            </div>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="hidden md:flex items-center gap-4 -mt-7">
          {/* Phone */}
          <div className="flex items-center gap-2.5 text-slate-300 hover:text-yellow-400 transition-colors duration-200 text-base md:text-lg font-semibold">
            <div
              className="w-10 h-10 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(232,185,79,0.12)", border: "1px solid rgba(232,185,79,0.3)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="#e8b94f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .89h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.73a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <span>01145651887</span>
          </div>

          {/* Divider */}
          <div className="w-px h-10 mx-1" style={{ background: "linear-gradient(to bottom, transparent, rgba(232,185,79,0.35), transparent)" }} />

          {/* Email */}
          <div className="flex items-center gap-2.5 text-slate-300 hover:text-yellow-400 transition-colors duration-200 text-base md:text-lg font-semibold">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(232,185,79,0.12)", border: "1px solid rgba(232,185,79,0.3)" }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="#e8b94f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
            <span>schoolsdps81@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;