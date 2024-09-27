import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <a
              href="https://classic.vn/wp-content/uploads/2023/08/1200px-TikTok_logo.svg.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://classic.vn/wp-content/uploads/2023/08/1200px-TikTok_logo.svg.png"
                alt="TikTok Logo"
                width="200"
                className={cx("logo_img")}
              />
            </a>
          </div>
          <div className={cx("search")}>
            <input type="text" placeholder='Search accounts and videos' spellCheck={false}/>
            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
                </button> 
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>

            <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            
            </button>

          </div>
          <div className={cx('actions')}></div>
        </div>
      </header>
    );
}

export default Header;
