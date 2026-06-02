import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IndianRupee,
  Users,
  BookOpen,
  Monitor,
  School,
  Laptop,
  Trophy,
  PartyPopper,
  Bus,
  Lightbulb,
  Droplet,
  Users2,
  BriefcaseMedicalIcon,
} from "lucide-react";

const Facilities = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  const facilities = [
    {
      text: "Reasonable and nominal fee structure",
      icon: <IndianRupee size={27} />,
      color: "bg-blue-50 border-blue-500 text-[26px] text-blue-700",
    },
    {
      text: "Well-experienced and trained teachers",
      icon: <Users size={27} />,
      color: "bg-yellow-50 border-yellow-500 text-[26px] text-yellow-700",
    },
    {
      text: "Emphasis on value-based education",
      icon: <BookOpen size={27} />,
      color: "bg-gray-100 border-gray-600 text-[26px] text-gray-700",
    },
    {
      text: "Smart classes for students",
      icon: <Monitor size={27} />,
      color: "bg-green-50 border-green-500 text-[26px] text-green-700",
    },
    {
      text: "Well-furnished and fully eqquiped classrooms.",
      icon: <School size={27} />,
      color: "bg-red-50 border-red-400 text-[26px] text-red-600",
    },
    {
      text: "Computer lab, activity room & library facility",
      icon: <Laptop size={27} />,
      color: "bg-indigo-50 border-indigo-500 text-[26px] text-indigo-700",
    },
    {
      text: "Sports, cultural events & various competitions.",
      icon: <Trophy size={27} />,
      color: "bg-blue-100 border-blue-600 text-[26px] text-blue-800",
    },
    {
      text: "Celebration of festivals",
      icon: <PartyPopper size={27} />,
      color: "bg-orange-50 border-orange-500 text-[26px] text-orange-700",
    },
    {
      text: "Educational excursions",
      icon: <Bus size={27} />,
      color: "bg-purple-50 border-purple-500 text-[26px] text-purple-700",
    },
    {
      text: "Properly ventilated & well-lit classrooms",
      icon: <Lightbulb size={27} />,
      color: "bg-pink-50 border-pink-400 text-[26px] text-pink-600",
    },
    {
      text: "R.O. water for drinking.",
      icon: <Droplet size={27} />,
      color: "bg-green-50 border-green-400 text-[26px] text-green-600",
    },
    {
      text: "Separate toilets for girls and boys.",
      icon: <Users2 size={27} />,
      color: "bg-green-50 border-green-400 text-[26px] text-green-600",
    },
    {
      text: "Annual medical health check-up.",
      icon: <BriefcaseMedicalIcon size={27} />,
      color: "bg-green-50 border-green-400 text-[26px] text-green-600",
    },
  ];

  return (
    <div className="w-full bg-gray-50">

      {/* Banner */}
      <div className="h-[220px] flex items-center justify-center bg-gradient-to-br from-[#0f2550] to-[#1a3260]">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Facilities</h1>
          <p className="mt-2 text-sm text-gray-200">
            Home &gt; Administration
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">

          <h2 className="text-[40px] font-bold mb-10 text-[#8B0000]">
            Facilities
          </h2>

          <div
            ref={contentRef}
            className={`space-y-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >

            {facilities.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl border-l-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 ${item.color}`}
              >
                <div className="p-2 bg-white rounded-md shadow-sm">
                  {item.icon}
                </div>

                <p className="font-medium">{item.text}</p>
              </div>
            ))}

          </div>

        </div>

        {/* SIDEBAR SAME */}
        <div
          ref={sidebarRef}
          className={`bg-white rounded-xl shadow-md p-5 border h-fit sticky top-20 transition-all duration-700 ${
            sidebarVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h3 className="font-bold text-lg mb-4 pb-2 border-b text-[#0f2550]">
            ADMINISTRATION
          </h3>

          <ul className="space-y-2">

  {/* Management Members */}
  <Link to="/Administration/ManagementMembers">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/ManagementMembers"
        ? "bg-[#0f2550] text-white"
        : "text-gray-700"
    }`}>
      <span>&gt;</span>
      <span>Management Members</span>
    </li>
  </Link>

  {/* Staff Members */}
  <Link to="/Administration/StaffMembers">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/StaffMembers"
        ? "bg-[#0f2550] text-white"
        : "text-gray-700"
    }`}>
      <span>&gt;</span>
      <span>Staff Members</span>
    </li>
  </Link>

  {/* Enrollment */}
  <Link to="/Administration/Enrollment">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Enrollment"
        ? "bg-[#0f2550] text-white"
        : "text-gray-700"
    }`}>
      <span>&gt;</span>
      <span>Enrollment</span>
    </li>
  </Link>

  {/* Admission */}
  <Link to="/Administration/Admission">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Admission"
        ? "bg-[#0f2550] text-white"
        : "text-gray-700"
    }`}>
      <span>&gt;</span>
      <span>Admission</span>
    </li>
  </Link>

  {/* Facilities (ACTIVE 🔥) */}
  <Link to="/Administration/Facilities">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Facilities"
        ? "bg-[#0f2550] text-white"
        : "text-gray-700"
    }`}>
      <span>&gt;</span>
      <span>Facilities</span>
    </li>
  </Link>

</ul>

         
        </div>

      </div>
    </div>
  );
};

export default Facilities;