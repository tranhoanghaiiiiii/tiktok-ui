import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./SuggestedAccounts.mould.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '../Popper'
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles)
function AccountItem() {
    const renderPreviiew =(props)=>{
        return(
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        )
    }
    return ( 
        <div>
            <Tippy
            offset={[-20,0]}
        interactive
        delay={[800,0]}
        placement='bottom'
        render={renderPreviiew}
        >
            <div className={cx('account-item')}>
            <img className={cx("avatar")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGyvojqXJPEbHigzHv6km2VPqN30sdoOKig&s" alt="" />
            <div className={cx("item-info")}>
                <p className={cx("nickname")}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Quoc Nguyen Phu</p>
            </div>
        </div>
        </Tippy>
        </div>
     );
}

AccountItem.prototype={

}
export default AccountItem;