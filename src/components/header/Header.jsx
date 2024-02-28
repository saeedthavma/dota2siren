import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiFeather } from "react-icons/gi";
import { useNavigate } from 'react-router';
import { Context } from '../../container/Context.jsx';
import { get_user_data } from './header.js';
import './header.css';

const Header = () => {

    const context = useContext(Context);
    const { user, setUser } = context;

    const [userinfo, setUserinfo] = useState();
    const [dropdown, setDropdown] = useState(0);
    const [usermenu, setUsermenu] = useState(0);
    const [logout, setLogout] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        get_user_data(setUserinfo)
    }, []);

    const logout_user = () => {
        localStorage.removeItem("token")
        setUser(0)
        setLogout(0)
        navigate("/")
    }

    return (
        <div>

            <div className='header-navbar'>
                <div className='header-navbar-title'>
                    <h1 onClick={() => navigate("/")}>DOTA2 SIREN</h1>
                    <img src='/photo/icons/siren-logo.png' onClick={() => navigate("/")} />
                </div>
                <div className='header-items-area'>
                    <ul className='header-items'>
                        {user === 1 ?
                            <li className='header-user-item'
                                onMouseMove={() => setUsermenu(1)}
                                onMouseLeave={() => setUsermenu(0)}>
                                <div className='header-avatar-item'>
                                    <img src={userinfo?.avatar} />
                                </div>
                                <div className='header-rank-item'>
                                    <img src={userinfo?.rank?.rank_star} />
                                    <img src={userinfo?.rank?.rank_medal} />
                                </div>
                                <IoIosArrowDown />
                            </li>
                            :
                            <li className='header-sign-item'>
                                <button className='header-login-btn'
                                    onClick={() => navigate("/login")}>
                                    <RiLoginCircleLine />
                                    ورود
                                </button>
                                <button className='header-signup-btn'
                                    onClick={() => navigate("/signplayer")}>
                                    ثبت نام
                                    <GiFeather />
                                </button>
                            </li>}
                        <li className='header-menu-item'
                            onMouseMove={() => setDropdown(1)} onMouseLeave={() => setDropdown(0)}>
                            منوی اصلی
                            <IoIosArrowDown />
                        </li>
                        <li className='header-signteam-item'
                            onClick={() => navigate("/signteam")}>
                            ثبت تیم
                        </li>
                    </ul>
                </div>
            </div>

            {dropdown === 1 ?
                <div className="header-dropdown"
                    onMouseMove={() => setDropdown(1)}
                    onMouseLeave={() => setDropdown(0)}>
                    <ul className="header-dropdown-items">
                        <li onClick={() => navigate("/tournament")}>تورنمنت ها</li>
                        <li onClick={() => navigate("/create_tournament")}>طراحی تورنمنت</li>
                        <li>پیدا کردن تیم</li>
                        <li onClick={() => navigate("/playerlist")}>پیدا کردن پلیر</li>
                    </ul>
                </div>
                :
                ""
            }

            {usermenu === 1 ?
                <div className="header-user-menu"
                    onMouseMove={() => setUsermenu(1)}
                    onMouseLeave={() => setUsermenu(0)}>
                    <ul className="header-user-items">
                        <li onClick={() => navigate("/user_panel")}>
                            <img src='/photo/icons/user-icon.png' />
                            پنل کاربری
                        </li>
                        <li onClick={() => setLogout(1)}>
                            <img src='/photo/icons/logout-icon.png' />
                            خروج
                        </li>
                    </ul>
                </div>
                :
                ""
            }

            {logout === 1 ?
                <>
                    <div className='logout-popup-bg' onClick={() => setLogout(0)}></div>
                    <div className="logout-popup">
                        <span>آیا از خروج اطمینان دارید ؟</span>
                        <div>
                            <button className='logout-btn' onClick={logout_user}>
                                خروج
                            </button>
                            <button className='logout-cancel-btn' onClick={() => setLogout(0)}>
                                انصراف
                            </button>
                        </div>
                    </div>
                </>
                :
                ""
            }

        </div>
    );
}

export default Header;
