// import React, { useEffect, useState } from "react";

// const slides = [
//   {
//     image: "/images/slider1.webp",
//     title: "Welcome to S.D Public School",
//     subtitle: "Shaping Future Leaders",
//   },
//   {
//     image: "/images/slider2.webp",
//     title: "Quality Education",
//     subtitle: "From Class I to V",
//   },
//   {
//     image: "/images/slider3.webp",
//     title: "Holistic Development",
//     subtitle: "Academics + Activities",
//   },
// ];

// const Slider: React.FC = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">

//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-700 ${
//             index === current ? "opacity-100 z-10" : "opacity-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             className="w-full h-full object-cover"
//             alt=""
//           />

//           {/* Overlay */}
         
//           <div className="absolute inset-0 bg-black/20 pointer-events-none" />
//         </div>
//       ))}

//       {/* Arrows */}
//       <button
//         onClick={() =>
//           setCurrent((current - 1 + slides.length) % slides.length)
//         }
        
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
//   bg-black/50 hover:bg-black/70 text-white 
//   w-10 h-10 flex items-center justify-center rounded-full text-xl"
//       >
//         ❮
//       </button>

//       <button
//         onClick={() =>
//           setCurrent((current + 1) % slides.length)
//         }
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
//   bg-black/50 hover:bg-black/70 text-white 
//   w-10 h-10 flex items-center justify-center rounded-full text-xl"
//       >
//         ❯
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-3 w-full flex justify-center gap-2">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
//               current === i ? "bg-yellow-400" : "bg-white/60"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;





import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/slider1.webp",
    title: "Welcome to S.D Public School",
    subtitle: "Shaping Future Leaders",
  },
  {
    image: "/images/slider2.webp",
    title: "Quality Education",
    subtitle: "From Class I to V",
  },
  {
    image: "/images/slider3.webp",
    title: "Holistic Development",
    subtitle: "Academics + Activities",
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`slide-${index}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
        bg-black/50 hover:bg-black/70 text-white 
        w-10 h-10 flex items-center justify-center rounded-full text-xl"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
        bg-black/50 hover:bg-black/70 text-white 
        w-10 h-10 flex items-center justify-center rounded-full text-xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              current === i ? "bg-yellow-400" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;