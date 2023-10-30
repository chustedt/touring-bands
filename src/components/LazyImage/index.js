import React, { Suspense } from "react";
import ImageLoading from "../ImageLoading";

const LazyImage = ({ src, alt, height, width, className }) => {
  return (
    <Suspense fallback={<ImageLoading />}>
      <img
        className={className}
        src={src}
        alt={alt}
        loading="lazy"
        height={height}
        width={width}
      />
    </Suspense>
  );
};

export default LazyImage;
