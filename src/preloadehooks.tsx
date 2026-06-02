import { useEffect, useRef } from "react";

function usePreloadImages(imageUrls: string[]) {
  // Serialize to string to avoid infinite re-renders from new array reference
  const urlsKey = imageUrls.join(",");

  useEffect(() => {
    const urls = urlsKey ? urlsKey.split(",") : [];
    
    const links = urls.map((url) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = url;
      link.type = "image/webp";
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [urlsKey]); // ✅ stable dependency
}

export default usePreloadImages;