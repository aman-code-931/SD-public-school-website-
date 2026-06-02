import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Vision = () => {
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
        style={{
          background: "linear-gradient(135deg, #0f2550, #1a3260)",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide">
            Vision & Aim
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

          {/* Heading */}
          <h2
            className="text-[40px] font-bold mb-8"
            style={{ color: "#8B0000" }}
          >
            Vision of S.D. Public School
          </h2>

          {/* Animation */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >

            {/* Vision Text */}
            <p className="text-[16px] font-medium text-gray-700 leading-8 mb-8 max-w-3xl">
              S.D. Public School envisions a future where every student is empowered
              with knowledge, values, and skills that enable them to excel
              academically, socially, and ethically. We aspire to be a nurturing and
              inspiring institution that fosters lifelong learners, responsible
              citizens, and leaders of tomorrow.
            </p>

            {/* Aim Heading */}
            <h2
              className="text-[40px] font-bold mb-8"
              style={{ color: "#8B0000" }}
            >
              Aim of S.D. Public School:
            </h2>

            {/* Aim Points */}
            <ul className="list-disc pl-6 space-y-4 text-[16px] text-gray-700 leading-8">

              <li>
                <span className="font-bold text-[17px]">Academic Excellence:</span>  foremost aim is to provide a rigorous and comprehensive academic curriculum that equips students with the knowledge and skills needed to succeed in the modern world. We are committed to nurturing intellectual curiosity and critical thinking in our students.
              </li>

              <li>
                <span className="font-bold text-[17px]">Affordable Education:</span> S.D. Public School has a long-standing tradition of providing high-quality education at nominal charges. Our aim is to continue this legacy, making quality education accessible to students from all backgrounds.
              </li>

              <li>
                <span className="font-bold text-[17px]">Cultural Values:</span> S.D. Public School is deeply rooted in Indian traditions and values. We aim to instill a strong sense of cultural identity and respect for our heritage in our students. We celebrate Indian festivals with enthusiasm, fostering a sense of unity and cultural pride.
              </li>

              <li>
                <span className="font-bold text-[17px]">Recognition and Excellence:</span> We take pride in our reputation as one of the best primary schools in Karol Bagh. Our aim is to continue receiving recognition from the government and other educational bodies for our commitment to excellence in education.
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
    </div>
  );
};

export default Vision;