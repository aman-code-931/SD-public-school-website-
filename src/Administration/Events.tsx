import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import usePreloadImages from "../preloadehooks";

const Events = () => {
  const location = useLocation();

  // 👉 Events images
  const images = [
     "/images/events/30.webp",
    "/images/events/31.webp",
    "/images/events/32.webp",
    "/images/events/33.webp",
    "/images/events/34.webp",
    "/images/events/35.webp",
    "/images/events/36.webp",
    "/images/events/37.webp",
    "/images/events/38.webp",
    "/images/events/39.webp",
    "/images/events/40.webp",
    "/images/events/41.webp",
    "/images/events/42.webp",
    "/images/events/43.webp",
    "/images/events/44.webp",
    "/images/events/45.webp",
    "/images/events/46.webp",
    "/images/events/47.webp",
    "/images/events/48.webp",
    "/images/events/49.webp",
    "/images/events/50.webp",
    "/images/events/51.webp",
    "/images/events/52.webp",
    "/images/events/53.webp",
    "/images/events/54.webp",
    "/images/events/55.webp",
    "/images/events/56.webp",
    "/images/events/57.webp",
    "/images/events/58.webp",
    "/images/events/59.webp",
    "/images/events/1.webp",
    "/images/events/2.webp",
    "/images/events/3.webp",
    "/images/events/4.webp",
    "/images/events/5.webp",
    "/images/events/6.webp",
    "/images/events/7.webp",
    "/images/events/8.webp",
    "/images/events/9.webp",
    "/images/events/10.webp",
    "/images/events/11.webp",
    "/images/events/12.webp",
    "/images/events/13.webp",
    "/images/events/14.webp",
    "/images/events/15.webp",
    "/images/events/16.webp",
    "/images/events/17.webp",
    "/images/events/18.webp",
    "/images/events/19.webp",
    "/images/events/20.webp",
    "/images/events/21.webp",
    "/images/events/22.webp",
    "/images/events/23.webp",
    "/images/events/24.webp",
    "/images/events/25.webp",
    "/images/events/26.webp",
    "/images/events/27.webp",
    "/images/events/28.webp",
    "/images/events/29.webp",
    

  ];
  
  usePreloadImages(images.slice(0, 9)); // Preload first 12 images for faster initial load

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
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-sm mt-2 text-gray-200">
            Home &gt; More in Beyond Curriculum
          </p>
        </div>
      </div>

      {/* 🔷 Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

        {/* 🔷 LEFT GRID */}
        <div className="md:col-span-2">

          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "#0f2550" }}
          >
            Events
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
                  alt={`event-${index}`}
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
                  location.pathname === "/Administration/clubZone"
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

          {/* Close */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt="preview"
            loading="eager"
            decoding="async"
            className="max-h-[80%] max-w-[90%] rounded-lg"
          />

          {/* Next */}
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

export default Events;