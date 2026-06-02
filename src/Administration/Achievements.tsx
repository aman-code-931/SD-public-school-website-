import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import usePreloadImages from "../preloadehooks";

const Achievements = () => {
  const location = useLocation();

  // 👉 Images
  const images = [
    "/images/achievements/23.webp",
    "/images/achievements/1.webp",
    "/images/achievements/2.webp",
    "/images/achievements/3.webp",
    "/images/achievements/4.webp",
    "/images/achievements/5.webp",
    "/images/achievements/6.webp",
    "/images/achievements/7.webp",
    "/images/achievements/8.webp",
    "/images/achievements/9.webp",
    "/images/achievements/10.webp",
    "/images/achievements/11.webp",
    "/images/achievements/12.webp",
    "/images/achievements/13.webp",
    "/images/achievements/14.webp",
    "/images/achievements/15.webp",
    "/images/achievements/16.webp",
    "/images/achievements/17.webp",
    "/images/achievements/18.webp",
    "/images/achievements/19.webp",
    "/images/achievements/20.webp",
    "/images/achievements/21.webp",
    "/images/achievements/22.webp",
    
  ];
  usePreloadImages(images.slice(0, 9)); // Preload first 9 images for faster initial load

  // 🔥 Lightbox
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeImage = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="w-full bg-gray-50">

      {/* 🔷 Banner */}
      <div
        className="relative h-[220px] flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0f2550, #1a3260)",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Achievements</h1>
          <p className="text-sm mt-2 text-gray-200">
            Home &gt; More in Beyond Curriculum
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* 🔷 LEFT (Masonry Layout) */}
        <div className="md:col-span-2">

          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#0f2550" }}
          >
            Achievements
          </h2>

          {/* 🔥 Masonry */}
          <div className="columns-2 md:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={img}
                  alt={`achievement-${index}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>

        {/* 🔷 SIDEBAR */}
        <div className="bg-white rounded-xl shadow-md p-5 border h-fit sticky top-16">

          <h3
            className="font-bold text-lg mb-4 pb-2 border-b"
            style={{ color: "#0f2550" }}
          >
            MORE IN BEYOND CURRICULUM
          </h3>

          <ul className="space-y-2">

            <li>
              <Link
                to="/Administration/ClubZone"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/ClubZone"
                    ? "bg-[#0f2550] text-white"
                    : ""
                }`}
              >
                <span>&gt;</span> Club Zone
              </Link>
            </li>

            <li>
              <Link
                to="/Administration/Celebrations"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Celebrations"
                    ? "bg-[#0f2550] text-white"
                    : ""
                }`}
              >
                <span>&gt;</span> Celebrations
              </Link>
            </li>

            <li>
              <Link
                to="/Administration/Events"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Events"
                    ? "bg-[#0f2550] text-white"
                    : ""
                }`}
              >
                <span>&gt;</span> Events
              </Link>
            </li>

            <li>
              <Link
                to="/Administration/Achievements"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Achievements"
                    ? "bg-[#0f2550] text-white"
                    : ""
                }`}
              >
                <span>&gt;</span> Achievements
              </Link>
            </li>

            <li>
              <Link
                to="/Administration/Holidays"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Holidays"
                    ? "bg-[#0f2550] text-white"
                    : ""
                }`}
              >
                <span>&gt;</span> List Of Holidays
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* 🔥 LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">

          {/* ❌ Close */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* ⬅ Prev */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex]}
            alt="preview"
            loading="eager"
            decoding="async"
            className="max-h-[85%] max-w-[90%] rounded-lg"
          />

          {/* ➡ Next */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}

    </div>
  );
};

export default Achievements;