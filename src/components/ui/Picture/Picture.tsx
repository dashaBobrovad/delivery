import React, { useState, useRef } from "react";
import { useIntersection } from "data/hooks";
import { Preloader } from "components";
import s from "./Picture.module.scss";

interface IPicture {
  src: string;
  parentClass?: string;
  alt?: string;
}

function Picture({ src, parentClass, alt }: IPicture) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const imgRef = useRef<any>();

  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={`${parentClass} ${
        isLoaded ? `${s.picture} ${s.picture_noPlaceholder}` : s.picture
      }`}
      ref={imgRef}
    >
      {!isLoaded && <Preloader />}
      {isInView && (
        <img className={s.picture__image} src={src} onLoad={onLoad} alt={alt} />
      )}
    </div>
  );
}

Picture.defaultProps = {
  parentClass: "",
  alt: "image",
};

export default Picture;
