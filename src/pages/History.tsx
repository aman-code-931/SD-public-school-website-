import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const History = () => {
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
            History of School
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
            History of School
          </h2>

          {/* ✅ Scroll Animation */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >

            <p className="text-[16px] font-semibold text-gray-700 leading-7 mb-6">
              Shri Sanatan Dharam Sabha Karol Bagh (Regd.) have been running
              schools, mandir and other charitable social activities since 1945.
              The sabha have been running school from 20, beadonpura, Karol Bagh,
              New Delhi in the name Arya Kanya Mahavidyalaya running only Girls
              school upto Middle (8th class) which was further upgraded upto
              Higher Secondary School which was shifted to Link Road,
              Jhandewalan Extension, Karol Bagh in the name of JVSD Girls higher
              secondary school in 1971.
            </p>

            <p className="text-[16px] font-semibold text-gray-700 leading-7 mb-6">
              After shifting, the Sabha started English medium primary school in the name of S.D. Primary Public School (Recognized) which was recognized by Municipal Corporation of Delhi. We have this School for more than 50 years imparting the education at nominal charges with very high education standard with so many extra curricular activities and computer knowledge. 
            </p>

            <p className="text-[16px] font-semibold text-gray-700 leading-7 mb-6">
                Our school is one of the best primary schools in Karol Bagh which have been awarded no. of times by Government. After completing Primary education from our school, our students are automatically shifted to best higher secondary schools of Karol Bagh, New Delhi. Ours is oldest and best school of Karol bagh where good moral values of Indian traditions are taught and all Indian festivals are celebrated along with new technology.
            </p>

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

export default History;