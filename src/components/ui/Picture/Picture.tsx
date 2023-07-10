import { Preloader } from "components";
import s from "./Picture.module.scss";
import PictureHOC from "./PictureHoc";
import { IPictureComponent } from "./types";

function PictureComponent({
  src,
  parentClass,
  alt,
  isInView,
  isLoaded,
  onLoad,
  imgRef,
}: IPictureComponent) {
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

export default PictureHOC(PictureComponent);
