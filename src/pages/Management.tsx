import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Management = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
            Management Message
          </h1>

          <p className="mt-2 text-sm text-gray-200">
            Home &gt; About Us
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT (TEXT + IMAGE SAME ROW) */}
        <div className="md:col-span-2">

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#8B0000" }}
          >
            A Message by Chairman
          </h2>

          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >

            <div className="flex flex-col md:flex-row gap-8">

              {/* TEXT */}
              <div className="flex-1">

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  Dear Management, Principal, Teachers, and Parents,
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  It's my privilege to write a brief message for the website of SD Public School Karol Bagh. In this amazingly fast-growing era of technological advancement, our staff and students are continuously stepping up.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  I take this opportunity to congratulate the principal, staff, parents and students for their strong commitments, responsibilities, and dedication that have transformed the school into a significant temple of learning in all aspects of life.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  This school is known for providing quality education accessible to all.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8 mb-6">
                  We aim for our students to be great resources for tomorrow, and for everyone to understand the true meaning of life and love Physical, intellectual, spiritual and emotional needs must be fulfilled in what we strive for.
                </p>

                <p className="text-lg font-medium text-gray-700 leading-8">
                  Dear all, I pray to Almighty God to continue to bless this school and all those associated with this institute, leading us towards LIGHT AND EXCELLENCE.
                </p>

              </div>

              {/* IMAGE */}
              <div className="w-full md:w-[260px] text-center">

                <div className="bg-white p-3 rounded-xl shadow-md">
                  <img
                    src="/images/chairman.webp"
                    alt="chairman"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[240px] object-cover rounded-lg hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="mt-3 text-lg font-bold text-[#0f2550]">
                  Mr P.K Aggarwal (F.C.A)
                </h3>

                <p className="text-red-600 font-semibold">Chairman</p>

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

export default Management;