import { Link } from "react-router-dom";
import React from "react";
import {
  GraduationCap,
  UserPlus,
  Images,
  BellRing,
} from "lucide-react";


const links = [
  {
    title: "Admission",
    path: "/Administration/Admission",
    icon: <GraduationCap size={30} strokeWidth={2.2} />,
  },
  {
    title: "Enrollment",
    path: "/Administration/Enrollment",
    icon: <UserPlus size={30} strokeWidth={2.2} />,
  },
  {
    title: "Gallery",
    path: "/Administration/Celebrations",
    icon: <Images size={30} strokeWidth={2.2} />,
  },
  {
    title: "Circulars",
    path: "/Administration/SchoolCurriculum",
    icon: <BellRing size={30} strokeWidth={2.2} />,
  },
];


const QuickLinks: React.FC = () => {
  return (
    <section className="bg-gray-100 pt-17 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {links.map((item, index) => (
          <Link
  to={item.path}
  key={index}
  className="flex flex-col items-center group cursor-pointer"
>
            

            {/* Wrapper (IMPORTANT FIX) */}
            <div className="relative flex items-center justify-center">

              {/* Dotted Border */}
              <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-blue-400 
              group-hover:rotate-180 transition-transform duration-700" />

              {/* Main Circle */}
              <div className="w-24 h-24 rounded-full 
                    bg-linear-to-br from-yellow-400 to-yellow-600 
                    flex items-center justify-center text-white shadow-xl
                    transition-all duration-300 
                    group-hover:scale-110 group-hover:shadow-2xl">

                <div className="transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  {item.icon}
                </div>
              </div>

            </div>

            {/* Text */}
            <p className="mt-6 text-blue-900 font-bold text-[19px]">
              {item.title}
            </p>

          </Link>
        ))}

      </div>
    </section>
  );
};

export default QuickLinks;