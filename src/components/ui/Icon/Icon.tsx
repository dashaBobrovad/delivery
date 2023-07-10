import cx from "classnames";
import s from "./Icon.module.scss";
import { IIconProps } from "./types";

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
