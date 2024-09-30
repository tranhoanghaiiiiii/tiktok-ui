import classNames from "classnames/bind";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  primary = false,
  outline = false,
  small = false,
  text = false,
  large = false,
  disabled=false,
  rounded,
  children,
  className,
  leftIcon,
    rightIcon,
  ...passProps
}) {
  let Comp = "button";
  const props = { ...passProps };

  if (onClick) {
    props.onClick = onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
   // Remove event listener when btn is disabled
   if (disabled) {
    Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }
    });
}

  const classes = cx("wrapper", { primary, outline, small, large, text,disabled,rounded,[className]: className });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
