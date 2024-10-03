import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import * as searchServices from "../../../../apiServices/searchServices"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../../../../hooks";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);


  const debounced = useDebounce(searchValue,500)

  const inputRef = useRef();
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([])
      return;
    }
    const fetchApi = async ()=>{
      setLoading(true)
      const result = await searchServices.search(debounced);
      setSearchResult(result)
      setLoading(false)
    }
    fetchApi()
    
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  // console.log(searchValue);
  return (
    <>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Account</h4>
              {searchResult.map((value) => (
                <AccountItem key={value.id} data={value}></AccountItem>
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
            </button>
          )}
          {loading && (
            <FontAwesomeIcon
              className={cx("loading")}
              icon={faSpinner}
            ></FontAwesomeIcon>
          )}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
      </HeadlessTippy>
    </>
  );
}

export default Search;
