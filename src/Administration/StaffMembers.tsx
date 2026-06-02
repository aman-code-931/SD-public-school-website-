import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const StaffMembers = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [tableVisible, setTableVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTableVisible(true),
      { threshold: 0.3 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSidebarVisible(true),
      { threshold: 0.3 }
    );

    if (tableRef.current) observer1.observe(tableRef.current);
    if (sidebarRef.current) observer2.observe(sidebarRef.current);

    return () => {
      if (tableRef.current) observer1.unobserve(tableRef.current);
      if (sidebarRef.current) observer2.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* 🔷 Banner */}
      <div
        className="relative h-[220px] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide">
            Staff Members
          </h1>
          <p className="mt-2 text-sm text-gray-200">
            Home &gt; Administration
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">

          <h2 className="text-3xl font-bold mb-6 text-[#8B0000]">
            Staff Members
          </h2>

          {/* TABLE */}
          <div
            ref={tableRef}
            className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ${
              tableVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
          >
            <table className="w-full text-left">

              <thead className="bg-[#0f2550] text-white">
                <tr>
                  <th className="p-4">S.NO</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Designation</th>
                </tr>
              </thead>

              <tbody>

                {[
                  ["1.", "Mrs Dakshita Singhal", "Principal"],
                  ["2.", "Mrs Suman Maheshwari", "Incharge"],
                  ["3.", "Mrs Hitesh Sharma", "PRT"],
                  ["4.", "Mrs Shefali Chitkara", "PRT"],
                  ["5.", "Mrs Vijay Maurya", "PRT"],
                  ["6.", "Mrs Dolly", "Clerical Staff"],
                  ["7.", "Mrs Shailaja", "PRT"],
                  ["8.", "Mrs Lajwanti", "PRT"],
                  ["9.", "Mrs Mamta Kashyap", "PRT"],
                  ["10.", "Mrs Jatinder Kaur", "PRT"],
                  ["11.", "Mrs Nisha", "PRT"],
                  ["12.", "Mrs Padmabati", "PRT"],
                  ["13.", "Mrs Meenu Sharma", "PRT"],
                  ["14.", "Mrs Mamta Sethi", "PRT"],
                  ["15.", "Mrs Dipali", "PRT"],
                  ["16.", "Mrs Anita Anand", "PRT"],
                  ["17.", "Mrs Manisha (Special Educator)", "PRT"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    }`}
                  >
                    <td className="p-4">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4 text-[#0f2550] font-semibold">
                      {row[2]}
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div
          ref={sidebarRef}
          className={`bg-white rounded-xl shadow-md p-5 border h-fit sticky top-20 transform transition-all duration-700 ${
            sidebarVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0"
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

  {/* Staff Members (ACTIVE 🔥) */}
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

  {/* Facilities */}
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

export default StaffMembers;