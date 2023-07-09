export interface IPictureProps {
  src: string;
  parentClass?: string;
  alt?: string;
}

export interface IPictureComponent extends IPictureProps {
  isInView: boolean;
  isLoaded: boolean;
  onLoad: () => void;
  imgRef: any;
}
