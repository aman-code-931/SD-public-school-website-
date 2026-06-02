import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Admission = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

      {/* 🔷 Banner */}
      <div
        className="relative h-[220px] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide">Admission</h1>
          <p className="mt-2 text-sm text-gray-200">
            Home &gt; Administration
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">

          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}
          >

            <h2 className="text-3xl font-bold mb-6 text-[#8B0000]">
              Admission
            </h2>

            {/* 🔸 Process */}
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>
                <span className="font-bold text-[17px]">ADMISSION PROCESS:</span > Admission in classes 1 to 5<sup>th</sup> are done strictly as per the guidelines issued by MCD. We don’t discriminate on the basis of caste, creed status or gender.
              </li>
            </ul>

            {/* 🔸 Schedule Table */}
            <h3 className="font-bold mb-3">ADMISSION SCHEDULE:</h3>

            <div className="rounded-md border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-left">

                <thead className="bg-[#0f2550] text-white">
                  <tr>
                    <th className="p-3">S.NO</th>
                    <th className="p-3">PARTICULARS</th>
                    <th className="p-3">TIME SCHEDULE</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["1.", "Uploading the criteria & their points", "24.02.2026"],
                    ["2.", "Availability of forms Registration", "27.02.2026"],
                    ["3.", "Last date of submission of application forms in school", "10.03.2026"],
                    ["4.", "The date for displaying the first list of selected children", "18.03.2026"],
                    ["5.", "Start of the actual admission process", "01.04.2026"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b ${
                        i % 2 === 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="p-3 font-bold">{row[0]}</td>
                      <td className="p-3 font-bold">{row[1]}</td>
                      <td className="p-3 text-[#0f2550] font-bold">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* 🔸 Criteria Table */}
            <h3 className="font-bold mb-3">ADMISSION CRITERIA:</h3>
            <h1 className="font-bold ">1.</h1>

            <div className="rounded-md border border-gray-200 overflow-hidden mb-6">
              <table className="w-full text-left">

                <thead className="bg-[#0f2550] text-white">
                  <tr>
                    <th className="p-3">CLASS</th>
                    <th className="p-3">AGE (IN YEAR)</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["I", "5 TO 6 YEAR"],
                    ["II", "6 TO 7 YEAR"],
                    ["III", "7 TO 8 YEAR"],
                    ["IV", "8 TO 9 YEAR"],
                    ["V", "9 TO 10 YEAR"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b ${
                        i % 2 === 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="p-3">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* 🔸 Points + Docs */}
            <ol start={2} className="list-decimal font-semibold pl-5 text-[16px] space-y-3 text-gray-700">
              <li>
                On the basis of the following points, list is prepared for the entry class:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Distance: 0 to 3 km → 60 points</li>
                  <li>Distance: 4 to 5 km → 40 points</li>
                  <li>ALUMNI → 10 POINTS</li>
                  <li>SIBLING → 20 POINTS</li>
                  <li>TEACHER’S WARD → 10 POINTS</li>
                </ul>
              </li>

              <li>25% seats are reserved for EWS on entry class as per norms of GOVT.</li>

              <li>
                Documents required at the time of admission:
                <ul className="list-disc font-semibold pl-5 mt-2 space-y-1">
                  <li>Birth Certificate of the child</li>
                  <li>Aadhar Card of child and parents</li>
                  <li>Residence Proof</li>
                  <ul className ="list-decimal font-semibold pl-5 mt-2 space-y-1">
                    <li>Ration card/Smart card issued in the name of parents (Mother/Father having name of child)</li>
                    <li>Domicile certificate of child or of his/her parents.</li>
                    <li>Voter I-Card(EPIC) of any of the parents.</li>
                    <li>Electricity bill/MTNL telephone bill/Water bill/Passport in the name of any of the parents or child.</li>
                    <li>Aadhar Card/UID card issued in the name of any of the parents.</li>
                  </ul>
                  <li>TWO PHOTOGRAPHS OF THE CHILD.(PASSPORT SIZE)</li>
                  <li>REPORT CARD OF PREVIOUS CLASS PASSED</li>
                </ul>
              </li>

            </ol>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div
          ref={sidebarRef}
          className={`bg-white rounded-xl shadow-md p-5 border h-fit sticky top-20 transition-all duration-700 ${
            sidebarVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
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

  {/* Admission (ACTIVE 🔥) */}
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

export default Admission;