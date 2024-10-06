import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGyvojqXJPEbHigzHv6km2VPqN30sdoOKig&s"
          alt=""
        />
        <Button primary>Follow</Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon
            className={cx("check")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </p>
        <p className={cx("name")}>Quoc Nguyen Phu</p>
        <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('lable')}>Follower</span>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('lable')}>Likes</span>
        </p>
      </div>

    </div>
  );
}

export default AccountPreview;
