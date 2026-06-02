import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import {
  Leaf,
  Monitor,
  Trophy,
  TreePine,
  Brush,
  Calculator,
  FlaskConical,
  User,
  BookOpen,
} from "lucide-react";

const ClubZone = () => {
    const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSidebarVisible(true),
      { threshold: 0.2 }
    );

    if (contentRef.current) observer1.observe(contentRef.current);
    if (sidebarRef.current) observer2.observe(sidebarRef.current);

    return () => {
      if (contentRef.current) observer1.unobserve(contentRef.current);
      if (sidebarRef.current) observer2.unobserve(sidebarRef.current);
    };
  }, []);

  const clubs = [
    { name: "Eco Club", icon: <Leaf />, color: "from-green-100 to-green-200 text-[22px] text-bold" },
    { name: "Smart Classes", icon: <Monitor />, color: "from-blue-100 to-blue-200 text-[22px] text-bold" },
    { name: "Sports Club", icon: <Trophy />, color: "from-yellow-100 to-yellow-200 text-[22px] text-bold" },
    { name: "Outdoor Activity Club", icon: <TreePine />, color: "from-green-200 to-green-300 text-[22px] text-bold" },
    { name: "Teaching with TLM Club", icon: <Brush />, color: "from-red-100 to-red-200 text-[22px] text-bold" },
    { name: "Fun with Maths", icon: <Calculator />, color: "from-yellow-200 to-yellow-300 text-[22px] text-bold" },
    { name: "Science Club", icon: <FlaskConical />, color: "from-blue-200 to-blue-300 text-[22px] text-bold" },
    { name: "Personality Development Club", icon: <User />, color: "from-indigo-200 to-indigo-300 text-[21px] text-bold" },
    { name: "Literature Club", icon: <BookOpen />, color: "from-purple-200 to-purple-300 text-[22px] text-bold" },
  ];

  return (
    <div className="w-full bg-gray-50">

      {/* Banner */}
      <div className="h-[220px] flex items-center justify-center bg-gradient-to-br from-[#0f2550] to-[#1a3260]">
        <div className="text-center text-white">
          <h1 className="text-[30px] font-bold">Club Zone</h1>
          <p className="mt-2 text-sm text-gray-200">
            Home &gt; More in Beyond Curriculum
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">

          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >

            <h2 className="text-[40px] font-bold text-[#8B0000] mb-8 text-center">
              Club Zone
            </h2>

            {/* PREMIUM CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">

              {clubs.map((club, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${club.color} p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                >
                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      {club.icon}
                    </div>

                    {/* TEXT */}
                    <h3 className="font-semibold text-gray-800">
                      {club.name}
                    </h3>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div
          ref={sidebarRef}
          className={`bg-white rounded-xl shadow-md p-5 border h-fit sticky top-20 transition-all duration-700 ${
            sidebarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >

          <h3 className="font-bold text-lg mb-4 pb-2 border-b text-[#0f2550]">
            MORE IN BEYOND CURRICULUM
          </h3>

          <ul className="space-y-2">

  {/* Club Zone */}
  <li>
    <Link
      to="/Administration/ClubZone"
      className={`flex items-center gap-2 px-2 py-1 rounded-md ${
        location.pathname === "/Administration/ClubZone"
          ? "bg-[#0f2550] text-white"
          : "text-gray-700"
      }`}
    >
      <span>&gt;</span>
      <span className="font-semibold">Club Zone</span>
    </Link>
  </li>

  {/* Celebrations */}
  <li>
    <Link
      to="/Administration/Celebrations"
      className={`flex items-center gap-2 px-2 py-1 rounded-md ${
        location.pathname === "/Administration/Celebrations"
          ? "bg-[#0f2550] text-white"
          : "text-gray-700"
      }`}
    >
      <span>&gt;</span>
      <span>Celebrations</span>
    </Link>
  </li>

  {/* Events */}
  <li>
    <Link
      to="/Administration/Events"
      className={`flex items-center gap-2 px-2 py-1 rounded-md ${
        location.pathname === "/Administration/Events"
          ? "bg-[#0f2550] text-white"
          : "text-gray-700"
      }`}
    >
      <span>&gt;</span>
      <span>Events</span>
    </Link>
  </li>

  {/* Achievements */}
  <li>
    <Link
      to="/Administration/Achievements"
      className={`flex items-center gap-2 px-2 py-1 rounded-md ${
        location.pathname === "/Administration/Achievements"
          ? "bg-[#0f2550] text-white"
          : "text-gray-700"
      }`}
    >
      <span>&gt;</span>
      <span>Achievements</span>
    </Link>
  </li>

  {/* Holidays */}
  <li>
    <Link
      to="/Administration/Holidays"
      className={`flex items-center gap-2 px-2 py-1 rounded-md ${
        location.pathname === "/Administration/Holidays"
          ? "bg-[#0f2550] text-white"
          : "text-gray-700"
      }`}
    >
      <span>&gt;</span>
      <span>List of Holidays</span>
    </Link>
  </li>

</ul>

        
        </div>

      </div>
    </div>
  );
};

export default ClubZone;