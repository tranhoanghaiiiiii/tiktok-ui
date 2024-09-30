import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult]=useState([])
  useEffect(()=>{
    setTimeout(()=>{
      setSearchResult([])
    },0)
  },[])
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
          <Tippy
          interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper >
               <h4 className={cx('search-title')}>
                Account
               </h4>
               <AccountItem></AccountItem>
               <AccountItem></AccountItem>
               <AccountItem></AccountItem>
                </PopperWrapper>
              </div>
              
            )}
          >
            <div className={cx("search")}>
              <input
                type="text"
                placeholder="Search accounts and videos"
                spellCheck={false}
              />
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
              </button>
              <FontAwesomeIcon
                className={cx("loading")}
                icon={faSpinner}
              ></FontAwesomeIcon>

              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
            </div>
          </Tippy>
          <div className={cx("actions")}>
            <Button primary rounded>Log in</Button>
            <Button text>Upload</Button>
          </div>
        </div>
      </header>
    );
}

export default Header;
