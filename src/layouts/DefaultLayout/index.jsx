import PropTypes from 'prop-types';
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function DefaultLayout({children}) {
    return <div className={cx("wrapper")}>
        <Header/>
        <div className={cx('container')}>
            <Sidebar/>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    </div>
}

DefaultLayout.prototype={
    children:PropTypes.node.isRequired
}

export default DefaultLayout;