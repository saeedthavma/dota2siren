import React from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import './tournament.css';

const Tournament = () => {
    return (
        <div className='tournament-bg'>

            <Header />
            <img className='header-img-pa' src='/photo/images/header-img-pa.jpg' />

            <div className="tournament-content container">

                <div className="tournament-content-bg"></div>

                <div className="tournament-content-main">
                    <ul className="tournament-list">
                        <li>
                            <div className='tournament-item'>
                                <div className='tournament-list-img'>
                                    <img src='/photo/images/tournament-img.jpg' />
                                </div>
                                <div className='tournament-list-info'>
                                    <h2>tournament</h2>
                                    <div>
                                        <span>تعداد تیم : </span>
                                        <span className='tournament-list-secondary-span'>16</span>
                                    </div>
                                    <img className='tournament-list-info-5v5' src='/photo/icons/5v5-icon.png' />
                                </div>
                                <div className='tournament-list-status'>
                                    <div>
                                        <span>وضعیت : </span>
                                        <span className='tournament-list-secondary-span'>پایان یافته</span>
                                    </div>
                                    <div>
                                        <span>تاریخ شروع : </span>
                                        <span className='tournament-list-secondary-span'>11/1/1111</span>
                                    </div>
                                </div>
                                <div className='tournament-list-prize'>
                                    <h4>جایزه : </h4>
                                    <h3>1000000<span>تومان</span></h3>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='tournament-item'>
                                <div className='tournament-list-img'>
                                    <img src='/photo/images/tournament-img.jpg' />
                                </div>
                                <div className='tournament-list-info'>
                                    <h2>tournament</h2>
                                    <div>
                                        <span>تعداد تیم : </span>
                                        <span className='tournament-list-secondary-span'>16</span>
                                    </div>
                                    <img className='tournament-list-info-1v1' src='/photo/icons/1v1-icon.png' />
                                </div>
                                <div className='tournament-list-status'>
                                    <div>
                                        <span>وضعیت : </span>
                                        <span className='tournament-list-secondary-span'>در حال اجرا</span>
                                    </div>
                                    <div>
                                        <span>تاریخ شروع : </span>
                                        <span className='tournament-list-secondary-span'>11/1/1111</span>
                                    </div>
                                </div>
                                <div className='tournament-list-prize'>
                                    <h4>جایزه : </h4>
                                    <h3>1000000<span>تومان</span></h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <Footer />

        </div>
    );
}

export default Tournament;
