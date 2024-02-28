import React, { useEffect, useState } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { useNavigate } from 'react-router';
import { service_array, qweAnim, qweRemove } from './landpage.js';
import './landpage.css';

const Landpage = () => {

    const [service, setService] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {

        setInterval(() => {
            setService(prv => {
                if (prv < 5) return prv + 1
                return 0
            })
        }, 2500)

    }, []);

    return (
        <div className='main-bg'>

            <Header />
            <img className='header-img-dota2' src='/photo/images/header-img-dota2.png' />

            <div className='landpage-content'>


                <img className="landpage-top-img" src='/photo/images/landpage-top.jpg' />

                <h1 className='landpage-top-heading'>
                    <span className='landpage-heading-siren'>SIREN</span>
                    <span className='landpage-heading-dota'>DOTA2</span>
                </h1>

                <h1 className='landpage-top-shadow'>
                    <span className='landpage-shadow-siren'>SIREN</span>
                    <span className='landpage-shadow-dota'>DOTA2</span>
                </h1>

                <div className='landpage-content-main'>
                    <img src='/photo/images/landpage-lina.jpg' />
                    <div>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi provident iste earum eaque obcaecati dolorum
                            nesciunt velit ex. Perspiciatis dolorum
                        </h3>
                        <button className='landpage-tournaments-btn'
                            onClick={() => navigate("/tournament")}>TOURNAMETS</button>
                    </div>
                </div>

                <img src='/photo/images/landpage-border1.jpg' className='landpage-border' />

                <div className='landpage-invoker-game'>
                    <div className='landpage-invoker-title'>
                        <img className='landpage-invoker-title-bg' src='/photo/icons/invoker-border.jpg' />
                        <h2>INVOKER GAME</h2>
                    </div>
                    <h3>برترین بازیکنان</h3>
                    <br />
                    <button onMouseEnter={() => qweAnim()}
                        onMouseLeave={() => qweRemove()}>
                        PLAY NOW
                    </button>
                    <ul className='landpage-invoker-leaderboard'>
                        <li>1. Lorem ipsum dolor sit  4542121</li>
                        <li>2. Lorem ipsum dolor sit. 546522</li>
                        <li>3. Lorem ipsum dolor sit. 5432121</li>
                        <li>4. Lorem ipsum dolor sit. 2154212</li>
                        <li>5. Lorem ipsum dolor sit. 5554222</li>
                    </ul>
                    <div className='landpage-invoker-icon-area'>
                        <img className='landpage-invoker-icon' src='/photo/images/landpage-invoker-game.png' />
                        <img className='landpage-invoker-quas' src='/photo/icons/quas.png' id='quas' />
                        <img className='landpage-invoker-wex' src='/photo/icons/wex.png' id='wex' />
                        <img className='landpage-invoker-exort' src='/photo/icons/exort.png' id='exort' />
                    </div>
                    <audio id='invoker_voice' src='/voice/invoker-voice.mp3' />
                </div>

                <img src='/photo/images/landpage-border1.jpg' className='landpage-border' />

                <div className='landpage-services-bg'>
                    <div className='landpage-content-services'>
                        <div>
                            <ul className='services-list'>
                                <li className={service === 0 ? 'service-item-active' : ''}
                                    onClick={() => navigate("/signplayer")}>
                                    <img src='/photo/icons/user-active.png' className='services-icon' />
                                    <p>پروفایل خودتو بساز</p>
                                </li>
                                <li className={service === 1 ? 'service-item-active' : ''}
                                    onClick={() => navigate("/tournament")}>
                                    <img src='/photo/icons/trophy-active.png' className='services-icon' />
                                    <p>در تورنومنت مورد علاقت شرکت کن</p>
                                </li>
                                <li className={service === 2 ? 'service-item-active' : ''}
                                    onClick={() => navigate("/create_tournament")}>
                                    <img src='/photo/icons/tournament-active.png' className='services-icon' />
                                    <p>تورنومنت خودتو طراحی کن<br /> و میزبان مسابقات شو</p>
                                </li>
                                <li className={service === 3 ? 'service-item-active' : ''}>
                                    <img src='/photo/icons/playerjoin-active.png' className='services-icon' />
                                    <p>اگر برای شرکت در تورنومنت <br />تیم نداری تیم خودتو پیدا کن</p>
                                </li>
                                <li className={service === 4 ? 'service-item-active' : ''}
                                    onClick={() => navigate("/playerlist")}>
                                    <img src='/photo/icons/team-active.png' className='services-icon' />
                                    <p>اگر تیمت برای تورنومنت تکمیل<br /> نیست پلیر مورد نیازتو پیدا کن</p>
                                </li>
                                <li className={service === 5 ? 'service-item-active' : ''}
                                    onClick={() => navigate("/tournament")}>
                                    <img src='/photo/icons/award-active.png' className='services-icon' />
                                    <p>در تورنومنت ها برنده شو و جوایز<br /> نقدی و غیرنقدی دریافت کن</p>
                                </li>
                            </ul>
                        </div>
                        <div className='service-list-img'>
                            <img src={service_array[service].img} />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
}

export default Landpage;
