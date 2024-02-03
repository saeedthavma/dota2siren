import React, { useState, useEffect } from 'react';
import { get_user_data, role_array } from './profileInfo.js';
import './profileInfo.css';

const ProfileInfo = () => {

    const [userinfo, setUserinfo] = useState();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        get_user_data(setUserinfo)
    }, []);

    useEffect(() => {
        if (!userinfo) return
        handle_roles()
    }, [userinfo])

    const handle_roles = () => {
        const player_roles = role_array.filter(e => userinfo?.roles.some(a => a === e.role))
        setRoles(player_roles);
    }

    return (
        <div className='profile-area'>

            <div className="profile-username">
                <h2>{userinfo?.identity?.name}</h2>
            </div>

            <div className="profile-main-info">
                <h2>{userinfo?.nick_name}</h2>
                <div className="profile-rank">
                    <img src={userinfo?.rank?.rank_star} />
                    <img src={userinfo?.rank?.rank_medal} />
                </div>
                <img src={userinfo?.avatar} />
            </div>

            <div className="profile-role">
                <h4>رول :</h4>
                {roles.map(e =>
                    <div>
                        <span><img src={e.src} /></span>
                        <span>{e.role}</span>
                    </div>
                )}
            </div>

            <div className="profile-signature-hero">
                <h4>هیرو های تخصصی :</h4>
                <div>
                    <span>Hero</span>
                    <span></span>
                </div>
                <div>
                    <span>Hero</span>
                    <span></span>
                </div>
                <div>
                    <span>Hero</span>
                    <span></span>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;
