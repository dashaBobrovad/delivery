import s from "./Icon.module.scss";

interface IIconProps {
  classNames?: string;
  icon: string;
  color?: string;
}

function Icon({ classNames, icon, color }: IIconProps) {
  return (
    <svg
      // TODO: fx undefined
      className={`${s.icon} ${s[`icon_${icon}`]} ${
        s[`icon_${color}`]
      } ${classNames}`}
      role="img"
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
}

Icon.defaultProps = {
  classNames: "",
  color: "black",
};

export default Icon;
