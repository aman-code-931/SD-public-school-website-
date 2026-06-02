import React from "react";

const Scholarship = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* 🔷 Banner */}
      <div className="h-[220px] flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a3260] to-[#0f2550] border-b-4 border-[#e8b94f]">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Scholarship</h1>
          <p className="mt-2 text-sm text-gray-300">
            Home &gt; Scholarship
          </p>
        </div>
      </div>

      {/* 🔷 CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-[#e8b94f]">

          <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-6">
            Kavya Nivit Scholarship Scheme
          </h2>

          <p className="text-gray-700 leading-relaxed text-[18px]">
            Under this scheme a seven-point criteria was used to evaluate the students.
            Students who scored above 85% on the whole were rewarded. It was sponsored
            by Kavya d/o Dr. Rohit Aggarwal. Scholarship amount was directly transferred
            in students’ bank accounts.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Scholarship;