import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", active: true },
    {
      name: "About Us",
      dropdown: [
        "Recognition", "History of School", "Vision and Aim",
        "Principal Message", "Management Message", "School Discipline & Students Welfare",
      ],
    },
    {
      name: "Administration",
      dropdown: ["Management Members", "Staff Members", "Enrollment", "Admission", "Facilities"],
    },
    {
      name: "Academic",
      dropdown: ["School Curriculum"],
    },
    {
      name: "More In Beyond Curriculum",
      dropdown: ["Events", "Awards & Achievements", "Club Zone", "Celebrations", "List of Holidays"],
    },
    { name: "Co-Curricular Activities", path: "/Administration/Achievements" },
    { name: "Contact Us", path: "/pages/Contact" },
  ];

  // Helper: map dropdown label → route path
  const getDropdownPath = (sub: string): string => {
    const routes: Record<string, string> = {
      "Recognition": "/about/recognition",
      "History of School": "/about/history",
      "Vision and Aim": "/about/vision",
      "Principal Message": "/about/Principal",
      "Management Message": "/about/Management",
      "School Discipline & Students Welfare": "/about/Discipline",

      "Management Members": "/Administration/ManagementMembers",
      "Staff Members": "/Administration/StaffMembers",
      "Enrollment": "/Administration/Enrollment",
      "Admission": "/Administration/Admission",
      "Facilities": "/Administration/Facilities",
      "School Curriculum": "/Administration/SchoolCurriculum",
      "Club Zone": "/Administration/ClubZone",
      "Celebrations": "/Administration/Celebrations",
      "Events": "/Administration/Events",
      "Awards & Achievements": "/Administration/Achievements",
      "List of Holidays": "/Administration/Holidays",
    };
    return routes[sub] ?? "#";
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b-2 border-yellow-400"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3260 60%, #0f2550 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-13" style={{ height: "52px" }}>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center h-full">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group h-full flex items-center">

                {/* FIX 1: Wrap "Home" in a Link so it navigates to "/" */}
                {item.name === "Home" ? (
                  <Link
                    to="/"
                    className="h-full px-3 flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-200"
                    style={{
                      color: "#0a1628",
                      background: "#e8b94f",
                      fontWeight: 600,
                      fontSize: "16px",
                      letterSpacing: "0.4px",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                
                ) : item.path ? (
  <Link
    to={item.path}
    className="h-full px-3 flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-200"
    style={{
      color: "rgba(255,255,255,0.88)",
      background: "transparent",
      fontWeight: 500,
      fontSize: "16px",
      letterSpacing: "0.4px",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.color = "#e8b94f";
      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,185,79,0.1)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.88)";
      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
    }}
  >
    {item.name}
  </Link>
  ) : (
  <button
    onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
    className="h-full px-3 flex items-center gap-2 text-sm font-medium tracking-wide transition-all duration-200"
    style={{
      color: "rgba(255,255,255,0.88)",
      background: "transparent",
      fontWeight: 500,
      fontSize: "16px",
      letterSpacing: "0.4px",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLButtonElement).style.color = "#e8b94f";
      (e.currentTarget as HTMLButtonElement).style.background = "rgba(232,185,79,0.1)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.88)";
      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
    }}
  >
    {item.name}
    {item.dropdown && (
      <svg
        className="group-hover:rotate-180 transition-transform duration-200"
        width="10" height="10" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2.2}
        strokeLinecap="round" strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    )}
  </button>
)}

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-full z-50 min-w-[210px]
                      ${openDropdown === i ? "block" : "hidden"} md:group-hover:block`}
                    style={{
                      background: "#0f2550",
                      border: "1px solid rgba(232,185,79,0.25)",
                      borderTop: "2px solid #e8b94f",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        to={getDropdownPath(sub)}
                        className="flex items-center gap-2 px-4 py-2.5 transition-all duration-150"
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "16px",
                          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#e8b94f";
                          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(232,185,79,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)";
                          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#e8b94f" }} />
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Scholarship Button */}
          <Link
  to="/Administration/Scholarship"
  className="hidden md:flex items-center gap-1.5 px-4 py-1.5 text-white font-bold text-sm tracking-wide transition-opacity hover:opacity-85"
  style={{
    background: "linear-gradient(135deg, #c0392b, #e74c3c)",
    borderRadius: "3px",
    fontSize: "12.5px",
    letterSpacing: "0.4px",
    textDecoration: "none",
  }}
>
  <svg width="15" height="25" viewBox="0 0 24 24" fill="#ffd700">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
  Scholarship
</Link>
          

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none", border: "none" }}
          >
            <svg
              width="22" height="22" fill="none" viewBox="0 0 24 24"
              stroke="#e8b94f" strokeWidth={2} strokeLinecap="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ background: "#0d1f45", borderTop: "1px solid rgba(232,185,79,0.2)", padding: "12px 20px" }}>
          {menuItems.map((item, i) => (
            <div key={i} style={{ borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>

              {/* Parent row */}
              <div
                className="py-2.5 flex justify-between items-center cursor-pointer"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "13.5px", fontWeight: 500 }}
              >
                {/* FIX 1 (mobile): Home navigates to "/" */}
                {item.name === "Home" ? (
  <Link
    to="/"
    onClick={() => setIsOpen(false)}
    style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
  >
    {item.name}
  </Link>
) : item.path ? (
  <Link
    to={item.path}
    onClick={() => {
      setIsOpen(false);
      setOpenDropdown(null);
    }}
    style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
  >
    {item.name}
  </Link>
) : (
  <button onClick={() => setOpenDropdown(openDropdown === i ? null : i)}>
    {item.name}
  </button>
)}
             
                {item.dropdown && (
                  <span
                    style={{ color: "#e8b94f", cursor: "pointer" }}
                    onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                  >
                    {openDropdown === i ? "−" : "+"}
                  </span>
                )}
              </div>

              {/* FIX 2: Mobile dropdown items use <Link> so they navigate correctly */}
              {item.dropdown && openDropdown === i && (
                <div style={{ paddingLeft: "12px", paddingBottom: "6px" }}>
                  {item.dropdown.map((sub, j) => (
                    <Link
                      key={j}
                      to={getDropdownPath(sub)}
                      className="py-1 flex items-center gap-2"
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "12.5px",
                        textDecoration: "none",
                        display: "flex",
                      }}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#e8b94f";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e8b94f" }} />
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
  to="/Administration/Scholarship"
  className="mt-3 w-full py-2.5 text-white font-semibold text-sm flex justify-center items-center"
  style={{
    background: "linear-gradient(135deg, #c0392b, #e74c3c)",
    borderRadius: "3px",
    textDecoration: "none",
  }}
  onClick={() => setIsOpen(false)}
>
  ★ Scholarship
</Link>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;