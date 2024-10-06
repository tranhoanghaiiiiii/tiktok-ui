import classNames from 'classnames/bind';
import styles from './SiderBar.module.scss'
import Menu from './Menu/menu';
import MenuItem from './Menu/menuItem';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '../../../components/SuggestedAccounts';

const cx = classNames.bind(styles)
function Sidebar() {
    return <aside className={cx("wrapper")}>
        <Menu>
            <MenuItem title="For Your" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>}></MenuItem>
            <MenuItem title="Fllowing" to={config.routes.following} icon={<FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>}></MenuItem>
            <MenuItem title="Live" to={config.routes.live} icon={<FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>}></MenuItem>
        </Menu>
        <SuggestedAccounts lable="Suggested accounts"></SuggestedAccounts>
        {/* <SuggestedAccounts lable="Following accounts"></SuggestedAccounts> */}
    </aside>
}

export default Sidebar;