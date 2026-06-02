import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Recognition = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [imgVisible, setImgVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImgVisible(true);
      },
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSidebarVisible(true);
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) observer1.observe(imgRef.current);
    if (sidebarRef.current) observer2.observe(sidebarRef.current);

    return () => {
      if (imgRef.current) observer1.unobserve(imgRef.current);
      if (sidebarRef.current) observer2.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* 🔷 Banner */}
      <div
        className="relative h-[220px] w-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0f2550, #1a3260)",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide">
            Recognition
          </h1>

          <p className="mt-2 text-sm text-gray-200">
            Home &gt; About Us
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">

          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: "#0f2550" }}
          >
            Recognition
          </h2>

          {/* ✅ Bigger Image + Animation */}
          <div
            ref={imgRef}
            className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ${
              imgVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            <img
              src="/images/school.webp"
              alt="school"
              loading="lazy"
              decoding="async"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <p
            className="mt-6 text-center font-semibold text-lg"
            style={{ color: "#1a3260" }}
          >
            The school was established in the year 1971 and got recognized by
            MCD in 1983.
          </p>

        </div>

        {/* RIGHT SIDEBAR */}
        <div
          ref={sidebarRef}
          className={`bg-white rounded-xl shadow-md p-5 border border-gray-200 h-fit sticky top-15 ${
            sidebarVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0"
          }`}
        >

          <h3
            className="font-bold text-lg mb-4 pb-2 border-b"
            style={{
              color: "#0f2550",
              borderColor: "rgba(232,185,79,0.5)",
            }}
          >
            ABOUT US
          </h3>
           <ul className="space-y-2">

          {/* Recognition */}
                            <Link to="/about/recognition">
                              <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                                location.pathname === "/about/recognition" ? "bg-[#0f2550] text-white" : ""
                              }`}>
                                <span>&gt;</span>
                                <span>Recognition</span>
                              </li>
                            </Link>
                          
                            {/* History */}
                            <Link to="/about/history">
                              <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                                location.pathname === "/about/history" ? "bg-[#0f2550] text-white" : ""
                              }`}>
                                <span>&gt;</span>
                                <span>History Of School</span>
                              </li>
                            </Link>
                          
                            {/* Vision */}
                            <Link to="/about/vision">
                              <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                                location.pathname === "/about/vision" ? "bg-[#0f2550] text-white" : ""
                              }`}>
                                <span>&gt;</span>
                                <span>Vision And Aim</span>
                              </li>
                            </Link>
                          
                            {/* Principal */}
                            <Link to="/about/principal">
                              <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                                location.pathname === "/about/principal" ? "bg-[#0f2550] text-white" : ""
                              }`}>
                                <span>&gt;</span>
                                <span>Principals Message</span>
                              </li>
                            </Link>
                          
                            {/* 🔥 Management (MAIN TARGET) */}
                            <Link to="/about/management">
                              <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                                location.pathname === "/about/management" ? "bg-[#0f2550] text-white" : ""
                              }`}>
                                <span>&gt;</span>
                                <span>Management Message</span>
                              </li>
                            </Link>
                          
                            {/* Discipline */}
                            <Link to="/about/discipline">
                              <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
                                location.pathname === "/about/discipline" ? "bg-[#0f2550] text-white" : ""
                              }`}>
                                <span>&gt;</span>
                                <span>School Discipline & Students Welfare</span>
                              </li>
                            </Link>
                          
                          </ul>


        </div>

      </div>
    </div>
  );
};

export default Recognition;