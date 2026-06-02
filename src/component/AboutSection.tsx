import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="pt-10 pb-2" style={{ background: "linear-gradient(135deg, #f5f7fb, #e8edf5)" }}>
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* 🔹 TOP: About + Principal */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* About */}
          <div className="md:col-span-2 bg-white p-6 shadow-lg border-t-4" style={{ borderColor: "#e8b94f" }}>
            
            {/* Heading */}
            <h2 className="font-bold text-lg md:text-2xl mb-4 border-b pb-2 uppercase tracking-wide" style={{ color: "#0f2550", borderColor: "rgba(232,185,79,0.3)" }}>
              WELCOME TO S.D. PUBLIC SCHOOL
            </h2>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-5 items-center">

              {/* Text */}
              <div className="text-base md:text-[16px] leading-relaxed" style={{ color: "#2c3e66" }}>
                <p>
                  To enhance the learning experience of our children while inspiring,
                  motivating and guiding them to do their best in safe, non-threatening environment.
                </p>

                <p className="mt-3">
                  Our vision is to develop well rounded, confident, responsible balanced achiever
                  with full potential a successful good citizen. We aim to provide all aspects of
                  organizational life and values informs planning and develop values & policies.
                </p>
              </div>

              {/* Image */}
              <img
                src="/images/school.webp"
                alt="School"
                loading="lazy"
                decoding="async"

                className="w-full h-[220px] object-cover border shadow-md hover:scale-105 transition duration-300"
                style={{ borderColor: "rgba(232,185,79,0.4)" }}
              />
            </div>
          </div>

          {/* Principal */}
          <div className="bg-white shadow-lg border-t-4" style={{ borderColor: "#e8b94f" }}>
            
            {/* Heading */}
            <h3 className="px-4 py-2 font-semibold text-lg tracking-wide text-white" style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}>
              PRINCIPAL MESSAGE
            </h3>

            <div className="p-4">

              {/* Profile */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/principal.webp"
                  alt="Principal"
                  loading="lazy"
                  decoding="async"
                  className="w-25 h-25 rounded-full border-2"
                  style={{ borderColor: "#e8b94f" }}
                />
                <div>
                  <p className="text-[16px] font-semibold" style={{ color: "#0f2550" }}>
                    MRS DAKSHITA SINGHAL
                  </p>
                  <p className="text-[10]" style={{ color: "#6b7280" }}>Principal</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-base md:text-[16px] leading-relaxed" style={{ color: "#4a5568" }}>
                While academic excellence is absolutely necessary surely it should be a process in which bought the teacher and taught explore not only the outer world but also their own thinking and behaviour, learn to live , to enjoy life to its fullest.

              </p>
              <p className="mt-3 text-base md:text-[15px] leading-relaxed" style={{ color: "#4a5568" }}>
                A child’s desire and deserveness is limitless but only boundary is lack of suitable opportunities.So our motto of education is that each child feels safe, special, secure, nurtured, seeking strength & support.


              </p>
            </div>
          </div>
        </div>

        {/* 🔹 FACILITIES */}
        
<div>
  <h2
    className="font-bold text-xl md:text-2xl border-b-2 pb-2 mb-6 uppercase tracking-wide"
    style={{ color: "#0f2550", borderColor: "#e8b94f" }}
  >
    FACILITIES
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {[
      { img: "lab.webp", name: "Laboratory" },
      { img: "library.webp", name: "Library" },
      { img: "computer.webp", name: "Computer Lab" },
      { img: "fun.webp", name: "Classroom" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-sm border p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        style={{ borderColor: "rgba(232,185,79,0.4)" }}
      >
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={`/images/${item.img}`}
            alt={item.name}
            loading="lazy"
            decoding="async"

            className="w-full h-36 object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Name */}
        <p className="mt-3 text-sm md:text-base font-semibold tracking-wide"
           style={{ color: "#0f2550" }}>
          {item.name}
        </p>
      </div>
    ))}
  </div>
</div>


        {/* 🔹 STAFF / MANAGEMENT / NOTICE */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Staff */}
          <div className="bg-white  border-t-4" style={{ borderColor: "#e8b94f" }}>
            <h3 className="px-4 py-2 font-semibold text-lg text-white" style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}>
              Staff Members
            </h3>
            <div className="h-[250px] overflow-hidden">
  <ul className="p-4 space-y-2 animate-vertical-scroll">

    {[
      "Mrs Dakshita Singhal : Principal",
      "Mrs Suman Maheshwari : Incharge",
      "Mrs Hitesh Sharma : Incharge",
      "Mrs Shefali Chitkara : Incharge",
      "Mrs Vijay Maurya : Incharge",
      "Mrs Dolly : Clerical Staff",
      "Mrs Shailaja : PRT",
      "Mrs Lajwanti : PRT",
      "Mrs Mamta Kashyap : PRT",
      "Mrs Jatinder Kaur : PRT",
      "Mrs Padmabati : PRT",
      "Mrs Meenu Sharma : PRT",
      "Mrs Mamta Sethi : PRT",
      "Mrs Dipali : PRT",
      "Mrs Anita Anand : PRT",
    ]
    .concat([
      "Mrs Dakshita Singhal : Principal",
      "Mrs Suman Maheshwari : Incharge",
      "Mrs Hitesh Sharma : Incharge",
      "Mrs Shefali Chitkara : Incharge",
      "Mrs Vijay Maurya : Incharge",
      "Mrs Dolly : Clerical Staff",
      "Mrs Shailaja : PRT",
      "Mrs Lajwanti : PRT",
      "Mrs Mamta Kashyap : PRT",
      "Mrs Jatinder Kaur : PRT",
      "Mrs Padmabati : PRT",
      "Mrs Meenu Sharma : PRT",
      "Mrs Mamta Sethi : PRT",
      "Mrs Dipali : PRT",
      "Mrs Anita Anand : PRT",
    ])
    .map((item, i) => (
      <li key={i}>🔔 {item}</li>
    ))}

  </ul>
</div>
           
          </div>

          {/* Management */}
          <div className="bg-white  border-t-4" style={{ borderColor: "#e8b94f" }}>
            <h3 className="px-4 py-2 font-semibold text-lg text-white" style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}>
              Management Members
            </h3>
            <div className="h-[250px] overflow-hidden">
  <ul className="p-4 space-y-2 animate-vertical-scroll">

    {[
      "Sh. P. K. Aggarwal (Chairman)",
      "Sh. Subhash Khandelwal (PRESIDENT)",
      "Sh. Narendra Rathi (VICE PRESIDENT)",
      "Sh. C. M. Bhasin (SECRETARY)",
      "Sh. Uma Shankar Gupta (MANAGER)",
      "Sh. Naveen Khurana (TREASURER)",
      "Sh. Akhil Jindal (MEMBER)",
    ]
    .concat([
      "Sh. P. K. Aggarwal (Chairman)",
      "Sh. Subhash Khandelwal (PRESIDENT)",
      "Sh. Narendra Rathi (VICE PRESIDENT)",
      "Sh. C. M. Bhasin (SECRETARY)",
      "Sh. Uma Shankar Gupta (MANAGER)",
      "Sh. Naveen Khurana (TREASURER)",
      "Sh. Akhil Jindal (MEMBER)",
    ])
    .map((item, i) => (
      <li key={i}>🔔 {item}</li>
    ))}

  </ul>
</div>
            
          </div>

          {/* Notice */}
          <div className="bg-white  border-t-4" style={{ borderColor: "#e8b94f" }}>
            <h3 className="px-4 py-2 font-semibold text-lg text-white" style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}>
              Notice Board
            </h3>
            <div className="p-4 text-base md:text-md space-y-3" style={{ color: "#2c3e66" }}>
              <p>📢 Admission open for session 2026–27</p>
              <p>📢 School office remains open on all working days</p>
              <p>📢 Parents please attend PTM regularly</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;