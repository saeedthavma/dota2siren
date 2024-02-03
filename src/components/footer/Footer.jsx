import React from 'react';
import { useNavigate } from 'react-router';
import './footer.css';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='footer-bg'>

            <div className="footer-content-area">

                <div className="footer-title-area">
                    <img src='/photo/icons/siren-logo.png' onClick={() => navigate("/")} />
                    <div onClick={() => navigate("/")}>DOTA2 SIREN</div>
                </div>

                <div className="footer-social-area">
                    <div>
                        <img src='/photo/icons/instagram-icon.png' />
                        <h3>Instagram</h3>
                    </div>
                    <div>
                        <img src='/photo/icons/telegram-icon.png' />
                        <h3>Telegram</h3>
                    </div>
                    <div>
                        <img src='/photo/icons/whatsapp-icon.png' />
                        <h3>Whatsapp</h3>
                    </div>
                    <div>
                        <img src='/photo/icons/discord-icon.png' />
                        <h3>Discord</h3>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;
