import { useState, useRef, FunctionComponent } from "react";
import { useIntersection } from "data/hooks";
import { IPictureProps } from "./types";

function PictureHOC(Component: FunctionComponent<any>) {
  return function PictureHOC({ src, parentClass, alt }: IPictureProps) {
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
      <Component
        isInView={isInView}
        isLoaded={isLoaded}
        onLoad={onLoad}
        imgRef={imgRef}
        src={src}
        parentClass={parentClass}
        alt={alt}
      />
    );
  };
}

PictureHOC.defaultProps = {
  parentClass: "",
  alt: "image",
};

export default PictureHOC;
