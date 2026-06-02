import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import usePreloadImages from "../preloadehooks";


const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/9.webp",
  "/images/10.webp",
  "/images/11.webp",
  "/images/12.webp",
];

 

const Gallery: React.FC = () => {
  usePreloadImages(images.slice(0, 9)); // Preload first 9 images for faster initial load
  const [current, setCurrent] = useState<number | null>(null);

  const nextImage = () => {
    if (current !== null) {
      setCurrent((current + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (current !== null) {
      setCurrent((current - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="pt-6 pb-4 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="border-t-4 mb-6" style={{ borderColor: "#e8b94f" }}>
          <h2
            className="text-center text-xl md:text-[30px] font-bold pt-3 uppercase tracking-wide"
            style={{ color: "#0f2550" }}
          >
            OUR MEMORIES
          </h2>
        </div>

        {/* 🔥 Masonry */}
        <div
          className="relative columns-2 sm:columns-3 lg:columns-4"
          style={{ columnGap: 8 }}
        >
          {images.map((img, i) => {

  // 🔥 LOGO TILE
  if (img === "LOGO") {
    return (
      <div
        key={i}
        className="mb-3 break-inside-avoid flex justify-center"
      >
        <div
          className="rounded-xl shadow-md text-center"
          style={{
            background: "#0f2550",
            padding: "20px",
            width: "100%",
          }}
        >
          <img
            src="/images/logo1.png"
            alt="logo"
            loading="lazy"
            decoding="async"
            className="mx-auto"
            style={{
              width: 90,
              objectFit: "contain",
            }}
          />

          <p
            className="mt-2 font-semibold text-sm"
            style={{ color: "#e8b94f" }}
          >
            S.D PUBLIC SCHOOL
          </p>
        </div>
      </div>
    );
  }

  // 🔥 NORMAL IMAGE
  return (
    <div
      key={i}
      onClick={() => setCurrent(i)}
      className="mb-3 break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg"
    >
      <img
        src={img}
        alt={`gallery-${i}`}
        loading="lazy"
        decoding="async"
        className="w-full block object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <span
          className="px-2 py-1 rounded text-xs font-semibold"
          style={{
            backgroundColor: "#e8b94f",
            color: "#0f2550",
          }}
        >
          View
        </span>
      </div>
    </div>
  );
})}
        </div>

        {/* 🔥 Lightbox */}
        {current !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            <button
              onClick={() => setCurrent(null)}
              className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white bg-black/50 p-3 rounded-full"
            >
              <ChevronLeft size={30} />
            </button>

            <img
              src={images[current]}
              alt="preview"
              loading="eager"
              decoding="async"
              className="max-h-[85%] max-w-[90%] rounded-lg shadow-2xl border"
              style={{ borderColor: "#e8b94f" }}
            />

            <button
              onClick={nextImage}
              className="absolute right-6 text-white bg-black/50 p-3 rounded-full"
            >
              <ChevronRight size={30} />
            </button>

          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;