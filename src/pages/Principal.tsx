import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Principal = () => {
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
            Principal Message
          </h1>
          <p className="mt-2 text-sm text-gray-200">
            Home &gt; About Us
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* ✅ LEFT (TEXT + IMAGE SAME ROW) */}
        <div className="md:col-span-2">

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#8B0000" }}
          >
            FROM THE DESK OF PRINCIPAL
          </h2>

          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >

            {/* 👇 ROW LAYOUT */}
            <div className="flex flex-col md:flex-row gap-8">

              {/* TEXT */}
              <div className="flex-1">

                <p className="italic text-gray-600 mb-6">
                  "Believe You Can and You Are Halfway There"
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  As we stand on the threshold of a new academic session, I extend a
                  heartily and warm welcome to all my students, staff & parents.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  As the Principal, I am proud to lead a team of dedicated educators
                  who strive to provide a quality and purpose-driven education that fosters academic excellence.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  Our mission is to empower students to become confident,
                  compassionate & responsible individuals who make a positive impact in the world.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8">
                  I believe that every school has its own unique personality. Our school is well known for its academic excellence, professional training, enriched curriculum, quality of teaching, learning environment, and honoring student diversity.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mt-6">
                    It is the joint effort of all stakeholders that makes this school the best place to learn, to work, and to explore.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mt-6">
                    We are confident that this school is one of the best places for a child to grow into a great man or woman of our nation. We welcome the active interest, support, and involvement of parents in the progress of their children.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mt-6">
                    "The dream begins, most of the time, with a teacher who believes in you, who tugs & pushes & leads you on to the next plateau, sometimes poking you with a sharp stick called truth."
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mt-5">
                    "With Warm Wishes & Lots of Blessings"
                </p>

              </div>

              {/* IMAGE SIDE */}
              <div className="w-full md:w-[260px] text-center">

                <div className="bg-white p-3 rounded-xl shadow-md">
                  <img
                    src="/images/principal.webp"
                    alt="principal"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[240px] object-cover rounded-lg hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="mt-3 text-lg font-bold text-[#0f2550]">
                  Mrs Dakshita Singhal
                </h3>

                <p className="text-red-600 font-semibold">Principal</p>

                <p className="text-sm font-semibold text-gray-700">
                  S.D. PUBLIC SCHOOL
                </p>

                <p className="text-sm text-gray-600">
                  (Recognised by MCD)
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ✅ RIGHT SIDEBAR */}
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

export default Principal;