import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import config from '../../../config'
import Tippy from "@tippyjs/react"; // different import path!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faMessage,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/Button";
import Menu from "../../../components/Popper/Menu";
import "tippy.js/dist/tippy.css";
import Search from "../Search";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        }
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  const currentUser = true;
  const handleMenuChange = (menuItem) => {};
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home}
          >
            <img
              src="https://classic.vn/wp-content/uploads/2023/08/1200px-TikTok_logo.svg.png"
              alt="TikTok Logo"
              width="200"
              className={cx("logo_img")}
            />
          </Link>
        </div>

        {/* Search */}

        <Search></Search>
        
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faInbox}></FontAwesomeIcon>
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGZWT1XLsCot3KRq23VJiapSoQ3ZMJk89Mg&s"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
