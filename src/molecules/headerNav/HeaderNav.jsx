import Button from "../../atoms/button/Button";
import Icon from "../../atoms/icon/Icon";
import {Link} from 'react-router-dom';

const HeaderNav = (props) => {
    return(
        <>
            <div className="header__Nav">
            <div className="header__Nav_logo">
                KRAYA.
            </div>

            <ul className="header__Nav_list">
                <Link to='/' >
                    <li className="header__Nav_list-item"><Button buttonText="PHONE"/></li>
                </Link>

                <Link to='/speakers'>
                    <li className="header__Nav_list-item"><Button buttonText="SPEAKERS"/></li>
                </Link>

                <Link to='/headphones'>
                    <li className="header__Nav_list-item"><Button buttonText="HEADPHONES"/></li>
                </Link>

                <Link to='/laptop'>
                    <li className="header__Nav_list-item"><Button buttonText="LAPTOP"/></li>
                </Link>

                <Link to='/laptop'>
                    <li className="header__Nav_list-item"><Button buttonText="REFRIGRATOR"/></li>
                </Link>

                <Link to='/laptop'>
                    <li className="header__Nav_list-item"><Button buttonText="WASHING MACHINE"/></li>
                </Link>
                
            </ul>

            <Icon classText="bx bx-search-alt-2"/>
            </div>
        </>
    );
}

export default HeaderNav;