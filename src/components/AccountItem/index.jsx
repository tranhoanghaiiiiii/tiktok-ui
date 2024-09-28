import classNames from "classnames/bind";
import styles from "./Account.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a4976be6965e1eecb18e4849ee07a0d9~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=35861&refresh_token=657814b1e60ceae41e08052ef795e1a3&x-expires=1727661600&x-signature=D00FsfZwxFCn5VE4%2FJbcus7cPQU%3D&shp=a5d48078&shcp=81f88b70" alt="hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyeenx van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>Nguyen van a</span>
            </div>
        </div>
    )
}

export default AccountItem;