import s from "./Icon.module.scss";
import cx from "classnames";

interface IIconProps {
  classNames?: string;
  icon: string;
  color?: string;
}

function Icon({ classNames, icon, color }: IIconProps) {
  return (
    <svg
      // TODO: fx undefined
      className={cx(
        s.icon,
        s.icon,
        s[`icon_${color}`],
        s[`icon_${icon}`],
        classNames
      )}
      role="img"
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
}

Icon.defaultProps = {
  classNames: "",
  color: "white",
};

export default Icon;
