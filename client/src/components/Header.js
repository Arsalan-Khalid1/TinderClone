import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="headerIcon"/>
            </IconButton>
            <img
                className="headerLogo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"
                alt="tinderLogo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="headerIcon"/>
            </IconButton>
        </div>
    );
};

export default Header;
