
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import usePreloadImages from "../preloadehooks";

const Celebrations = () => {
  const location = useLocation();

  const images = [
    "/images/celebrations/1.webp",
    "/images/celebrations/2.webp",
    "/images/celebrations/3.webp",
    "/images/celebrations/4.webp",
    "/images/celebrations/5.webp",
    "/images/celebrations/6.webp",
    "/images/celebrations/7.webp",
    "/images/celebrations/8.webp",
    "/images/celebrations/9.webp",
    "/images/celebrations/10.webp",
    "/images/celebrations/11.webp",
    "/images/celebrations/12.webp",
    "/images/celebrations/13.webp",
    "/images/celebrations/14.webp",
    "/images/celebrations/15.webp",
    "/images/celebrations/16.webp",
    "/images/celebrations/17.webp",
    "/images/celebrations/18.webp",
    "/images/celebrations/19.webp",
    "/images/celebrations/20.webp",
    "/images/celebrations/21.webp",
    "/images/celebrations/22.webp",
    "/images/celebrations/23.webp",
    "/images/celebrations/24.webp",
    "/images/celebrations/25.webp",
    "/images/celebrations/26.webp",
    "/images/celebrations/27.webp",
    "/images/celebrations/28.webp",
    "/images/celebrations/29.webp",
    "/images/celebrations/30.webp",
    "/images/celebrations/31.webp",
    "/images/celebrations/32.webp",
    "/images/celebrations/33.webp",
    "/images/celebrations/34.webp",
    "/images/celebrations/35.webp",
    "/images/celebrations/36.webp",
    "/images/celebrations/37.webp",
    "/images/celebrations/38.webp",
    "/images/celebrations/39.webp",
    "/images/celebrations/40.webp",
    "/images/celebrations/41.webp",
    "/images/celebrations/42.webp",


  ];

  
   usePreloadImages(images.slice(0, 9)); // Preload first 12 images for faster initial load


  // 🔥 Lightbox state
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
      <div className="relative h-[220px] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0f2550, #1a3260)" }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Celebrations</h1>
          <p className="text-sm mt-2 text-gray-200">
            Home &gt; More in Beyond Curriculum
          </p>
        </div>
      </div>

      {/* 🔷 Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* 🔷 LEFT GRID */}
        <div className="md:col-span-2">

          <h2 className="text-3xl font-bold text-center mb-8"
            style={{ color: "#0f2550" }}>
            Celebrations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={img}
                  alt={`celebration-${index}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-[180px] object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>

        {/* 🔷 SIDEBAR */}
        <div className="bg-white rounded-xl shadow-md p-5 border h-fit sticky top-16">

          <h3 className="font-bold text-lg mb-4 pb-2 border-b"
            style={{ color: "#0f2550" }}>
            MORE IN BEYOND CURRICULUM
          </h3>

          <ul className="space-y-2">

            <li>
              <Link to="/Administration/ClubZone"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/clubZone"
                    ? "bg-[#0f2550] text-white" : ""}`}>
                <span>&gt;</span> Club Zone
              </Link>
            </li>

            <li>
              <Link to="/Administration/Celebrations"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Celebrations"
                    ? "bg-[#0f2550] text-white" : ""}`}>
                <span>&gt;</span> Celebrations
              </Link>
            </li>

            <li>
              <Link to="/Administration/Events"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Events"
                    ? "bg-[#0f2550] text-white" : ""}`}>
                <span>&gt;</span> Events
              </Link>
            </li>

            <li>
              <Link to="/Administration/Achievements"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Achievements"
                    ? "bg-[#0f2550] text-white" : ""}`}>
                <span>&gt;</span> Achievements
              </Link>
            </li>

            <li>
              <Link to="/Administration/Holidays"
                className={`flex gap-2 px-2 py-1 rounded ${
                  location.pathname === "/Administration/Holidays"
                    ? "bg-[#0f2550] text-white" : ""}`}>
                <span>&gt;</span> List Of Holidays
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">

          {/* ❌ Close Button */}
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
            className="max-h-[80%] max-w-[90%] rounded-lg shadow-lg"
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

export default Celebrations;