import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../Popper";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleResetToFirstPage =()=>{
     setHistory((prev) => prev.slice(0, 1))
  }
  const handleBack =() => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  }
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={false}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-lists")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={handleBack}
              />
            )}

            <div className={cx("menu-body")}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}
Menu.prototype = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
