import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Discipline = () => {
    
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* 🔷 Banner */}
      <div
        className="relative h-[220px] w-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide">
            School Discipline & Students Welfare
          </h1>

          <p className="mt-2 text-sm text-gray-200">
            Home &gt; About Us
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#8B0000" }}
          >
            School Discipline & Students Welfare
          </h2>

          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >

            {/* BULLET POINTS */}
            <ul className="list-disc pl-6 space-y-4 text-lg font-medium text-gray-700 leading-8 max-w-3xl">

              <li>Self-discipline is the forte of the school.</li>

              <li>
                The school begins at 8:00 a.m. All students are expected to reach
                school 10 minutes before the bell rings.
              </li>

              <li>
                Changing classrooms between periods should be done in silence and
                in an orderly manner.
              </li>

              <li>
                Students are advised to keep their classrooms, school building,
                and campus neat and clean.
              </li>

              <li>
                Students should observe polite civil behavior; shouting,
                bullying, or the use of foul language is forbidden.
              </li>

              <li>
                Students cannot leave the school for any reason during school hours without an application.
              </li>

              <li>
                If a teacher finds the character of a student doubtful, he or she will be sent out of the school after a warning.
              </li>

              <li>
                75% attendance is a must for every student.
              </li>

              <li>
                A student returning to school after suffering from an infection or contagious disease should produce a doctor’s fitness certificate permitting him or her to return.
              </li>

              <li>
                Irregular attendance, habitual idleness, neglect of homework, disrespect towards members of the school staff, or bad moral influence justify suspension or dismissal.
              </li>

              <li>
                Students should observe polite manners at all times.
              </li>

            </ul>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sticky top-24 h-fit">

          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">

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
    </div>
  );
};

export default Discipline;