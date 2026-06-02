import React, { useEffect, useRef, useState } from "react";

const SchoolCurriculum = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSidebarVisible(true),
      { threshold: 0.3 }
    );

    if (contentRef.current) observer1.observe(contentRef.current);
    if (sidebarRef.current) observer2.observe(sidebarRef.current);

    return () => {
      if (contentRef.current) observer1.unobserve(contentRef.current);
      if (sidebarRef.current) observer2.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* Banner */}
      <div className="h-[220px] flex items-center justify-center bg-gradient-to-br from-[#0f2550] to-[#1a3260]">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">School Curriculum</h1>
          <p className="mt-2 text-sm text-gray-200">
            Home &gt; School Curriculum
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}
          >

            <h2 className="text-[42px] font-bold mb-6 text-[#8B0000]">
              Syllabus
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed font-semibold">
              <li>Prepared as per guidelines of MCD.</li>
              <li>
                Following the NCERT content matter Pvt publication books are selected.
              </li>
              <li>
                As per set examination system syllabus are framed and distributed
                in the first week of MAY in each academic session.
              </li>
            </ul>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          ref={sidebarRef}
          className={`bg-white rounded-xl shadow-md p-5 border h-fit sticky top-20 transition-all duration-700 ${
            sidebarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-24"
          }`}
        >

          <h3 className="font-bold text-lg mb-4 pb-2 border-b text-[#0f2550]">
            ACADEMIC
          </h3>

          <ul className="space-y-2">

            {/* ACTIVE 🔥 */}
            <li className="flex items-center gap-2 px-2 py-1 rounded-md bg-[#0f2550] text-white">
              <span className="text-yellow-400">&gt;</span>
              <span className="font-semibold">School Curriculum</span>
            </li>

            {/* Normal */}
            <li className="flex items-center gap-2 px-2 py-1 text-gray-700">
              <span>&gt;</span>
              <span>Examination Pattern</span>
            </li>

          </ul>

        </div>

      </div>
    </div>
  );
};

export default SchoolCurriculum;