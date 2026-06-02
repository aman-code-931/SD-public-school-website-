






import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer
      className="text-white mt-10"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3260 60%, #0f2550 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* 🔹 Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 inline-block pb-1"
              style={{ borderColor: "#e8b94f" }}>
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-300">

            <div className="flex gap-3 items-start bg-white/5 p-3 rounded-lg border border-white/10">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <span>
                20, Beadon Pura, Karol Bagh,<br /> New Delhi - 110005
              </span>
            </div>

            <div className="flex gap-3 items-center bg-white/5 p-3 rounded-lg border border-white/10">
              <Phone size={18} className="text-yellow-400" />
              <span>Tel: 01145651887</span>
            </div>

            <div className="flex gap-3 items-center bg-white/5 p-3 rounded-lg border border-white/10">
              <Phone size={18} className="text-yellow-400" />
              <span>Mobile: +91 7011918254, +91 9711029497
</span>
            </div>

            <div className="flex gap-3 items-center bg-white/5 p-3 rounded-lg border border-white/10">
              <Mail size={18} className="text-yellow-400" />
              <span>schoolsdps81@gmail.com</span>
            </div>

          </div>
        </div>

        {/* 🔹 Administration */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 inline-block pb-1"
              style={{ borderColor: "#e8b94f" }}>
            Administration
          </h3>

          <ul className="space-y-3 text-sm">

  <Link to="/Administration/ManagementMembers">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Management Members</li>
  </Link>

  <Link to="/Administration/StaffMembers">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Staff Members</li>
  </Link>

  <Link to="/Administration/Enrollment">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Enrollment</li>
  </Link>

  <Link to="/Administration/Admission">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Admission</li>
  </Link>

  <Link to="/Administration/Facilities">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Facilities</li>
  </Link>

</ul>
          
        </div>

        {/* 🔹 Beyond Curriculum */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 inline-block pb-1"
              style={{ borderColor: "#e8b94f" }}>
            Beyond Curriculum
          </h3>

          <ul className="space-y-3 text-sm">

  <Link to="/Administration/ClubZone">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Club Zone</li>
  </Link>

  <Link to="/Administration/Celebrations">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Celebrations</li>
  </Link>

  <Link to="/Administration/Events">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Events</li>
  </Link>

  <Link to="/Administration/Achievements">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• Achievements</li>
  </Link>

  <Link to="/Administration/Holidays">
    <li className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">• List of Holidays</li>
  </Link>

</ul>

          
        </div>

        {/* 🔹 Facilities */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 inline-block pb-1"
              style={{ borderColor: "#e8b94f" }}>
            Facilities
          </h3>

          <div className="space-y-4">
            {[
              { name: "Science Lab", desc: "State-of-the-art equipment", icon: "🧪" },
              { name: "Library", desc: "5000+ books & resources", icon: "📚" },
              { name: "Computer Lab", desc: "High-speed internet access", icon: "💻" },
              { name: "Activity Room", desc: "Art & fun learning", icon: "🎨" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
              >
                <div className="text-2xl">{item.icon}</div>

                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔻 Bottom */}
      <div
        className="text-center text-sm py-4 border-t"
        style={{ borderColor: "rgba(232,185,79,0.3)" }}
      >
        © {new Date().getFullYear()} S.D Public School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


