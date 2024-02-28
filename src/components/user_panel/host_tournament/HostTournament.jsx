import React from "react";
import './hostTournament.css';

const HostTournament = () => {
    return (
        <div className="host-tournament">
            <ul className="host-tournament-list">
                <li>
                    <img src="/photo/images/tournament-img.jpg" />
                    <h3>Tournament Name</h3>
                    <img className="host-5v5-icon" src="/photo/icons/5v5-icon.png" />
                    <div className="host-start-date">
                        <span>تاریخ شروع :</span>
                        <div>1403/1/23</div>
                    </div>
                    <div className="host-status">
                        <span>وضعیت :</span>
                        <div>در حال ثبت نام</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HostTournament;