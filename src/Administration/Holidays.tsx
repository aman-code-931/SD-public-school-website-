import { Link, useLocation } from "react-router-dom";

const Holidays = () => {
  const location = useLocation();

  const holidays = [
    { date: "April 3, 2026", day: "Friday", occasion: "Good Friday" },
    { date: "April 14, 2026", day: "Tuesday", occasion: "Ambedkar Jayanti" },
    { date: "May 1, 2026", day: "Friday", occasion: "Buddha Purnima" },
    { date: "May 27, 2026", day: "Thursday", occasion: "Bakrid" },
    { date: "June 16, 2026", day: "Friday", occasion: "Muharram" },
    { date: "August 15, 2026", day: "Saturday", occasion: "Independence Day" },
    { date: "August 26, 2026", day: "Sunday", occasion: "Milad-un-nabi" },
    { date: "August 28, 2026", day: "Wednesday", occasion: "Raksha Bandhan" },
    { date: "September 4, 2026", day: "Friday", occasion: "Janmashtami" },
    { date: "October 2, 2026", day: "Friday", occasion: "Gandhi Jayanti" },
    { date: "October 20, 2026", day: "Tuesday", occasion: "Dussehra" },
    { date: "October 26, 2026", day: "Monday", occasion: "Maharishi Valmiki Jayanti" },
    { date: "November 8, 2026", day: "Sunday", occasion: "Diwali" },
    { date: "November 9, 2026", day: "Monday", occasion: "Govardhan Puja" },
    { date: "November 11, 2026", day: "Tuesday", occasion: "Bhai Dooj" },
    { date: "November 15, 2026", day: "Thursday", occasion: "Chhath Puja" },
    { date: "November 24, 2026", day: "Wednesday", occasion: "Guru Nanak Jayanti" },
    { date: "December 25, 2026", day: "Friday", occasion: "Christmas" },
    { date: "January 14, 2027", day: "Thursday", occasion: "Makar Sankranti" },
    { date: "November 26, 2027", day: "Tuesday", occasion: "Republic Day" },
    { date: "March 6, 2027", day: "Saturday", occasion: "Maha Shivratri" },
    { date: "March 22, 2027", day: "Monday", occasion: "Holi" },
    { date: "March 26, 2027", day: "Friday", occasion: "Good Friday" },
  ];

  const dayColors: Record<string, string> = {
    Monday: "bg-blue-50 text-blue-700",
    Tuesday: "bg-purple-50 text-purple-700",
    Wednesday: "bg-teal-50 text-teal-700",
    Thursday: "bg-orange-50 text-orange-700",
    Friday: "bg-green-50 text-green-700",
    Saturday: "bg-rose-50 text-rose-700",
    Sunday: "bg-red-50 text-red-700",
  };

  return (
    <div className="w-full bg-gray-50">

      {/* Banner */}
      <div
        className="relative h-[220px] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}
      >
        <div className="text-center text-white">
          <h1 className="text-[40px] font-bold">List of Holidays</h1>
          <p className="text-sm mt-2 text-gray-200">
            Home &gt; More in Beyond Curriculum
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">

          <h2 className="text-[40px] font-bold text-center text-red-700">
            List of Holidays
          </h2>
          <p className="text-center font-semibold text-[25px] mt-1 mb-6 text-gray-700">
            Session 2026-27
          </p>

          {/* ✅ Enhanced Table */}
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <table className="w-full text-left border-collapse">

              {/* Header */}
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}>
                  <th className="px-5 py-4 text-white font-semibold text-sm uppercase tracking-widest w-[35%]">
                    Date
                  </th>
                  <th className="px-5 py-4 text-white font-semibold text-sm uppercase tracking-widest w-[20%]">
                    Day
                  </th>
                  <th className="px-5 py-4 text-white font-semibold text-sm uppercase tracking-widest">
                    Occasion
                  </th>
                </tr>
              </thead>

              <tbody>
                {holidays.map((item, index) => (
                  <tr
                    key={index}
                    className={`group transition-all duration-200 border-b border-gray-100 last:border-0 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50`}
                  >
                    {/* Date */}
                    <td className="px-5 py-3.5">
                      <span className="text-gray-700 font-medium text-sm">
                        {item.date}
                      </span>
                    </td>

                    {/* Day Badge */}
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          dayColors[item.day] ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.day}
                      </span>
                    </td>

                    {/* Occasion */}
                    <td className="px-5 py-3.5">
                      <span className="text-[#0f2550] font-semibold text-sm group-hover:underline underline-offset-2 transition">
                        {item.occasion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-xl shadow-md p-5 border h-fit sticky top-16">
          <h3
            className="font-bold text-lg mb-4 pb-2 border-b"
            style={{ color: "#0f2550", borderColor: "rgba(232,185,79,0.5)" }}
          >
            MORE IN BEYOND CURRICULUM
          </h3>

          <ul className="space-y-2">

  {/* Club Zone */}
  <Link to="/Administration/ClubZone">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/ClubZone"
        ? "bg-[#0f2550] text-white"
        : ""
    }`}>
      <span>&gt;</span>
      <span>Club Zone</span>
    </li>
  </Link>

  {/* Celebrations */}
  <Link to="/Administration/Celebrations">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Celebrations"
        ? "bg-[#0f2550] text-white"
        : ""
    }`}>
      <span>&gt;</span>
      <span>Celebrations</span>
    </li>
  </Link>

  {/* Events */}
  <Link to="/Administration/Events">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Events"
        ? "bg-[#0f2550] text-white"
        : ""
    }`}>
      <span>&gt;</span>
      <span>Events</span>
    </li>
  </Link>

  {/* Achievements */}
  <Link to="/Administration/Achievements">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Achievements"
        ? "bg-[#0f2550] text-white"
        : ""
    }`}>
      <span>&gt;</span>
      <span>Achievements</span>
    </li>
  </Link>

  {/* Holidays */}
  <Link to="/Administration/Holidays">
    <li className={`flex items-center gap-2 px-2 py-1 rounded-md ${
      location.pathname === "/Administration/Holidays"
        ? "bg-[#0f2550] text-white"
        : ""
    }`}>
      <span>&gt;</span>
      <span>List of Holidays</span>
    </li>
  </Link>

</ul>

        </div>

      </div>
    </div>
  );
};

export default Holidays;





