import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./SuggestedAccounts.mould.scss"
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)
function SuggestedAccounts({lable}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{lable}</p>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <p className={cx('more-btn')}>See all</p>
        </div>
     );
}

SuggestedAccounts.prototype={
    lable : PropTypes.node.isRequired
}

export default SuggestedAccounts;