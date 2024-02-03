import React, { useState } from 'react';
import Header from '../header/Header.jsx';
import { previewImage, imgDragAnim } from './signteam.js';
import Footer from '../footer/Footer.jsx';
import './signteam.css';

const Signteam = () => {

    const [prvimg, setPrvimg] = useState(["/photo/images/img-unset.png"]);


    return (
        <div>

            <Header />
            <img className='header-img-axe' src='/photo/images/header-img-axe.jpg' />

            <div className="signteam-bg"></div>

            <div className='container'>

                <form action="" className="signteam-form">

                    <div className="signteam-logo-area">
                        <label>لوگوی تیم : </label>
                        <div className="signteam-logo-field" id='team_logo'>
                            <input type='file'
                                onChange={(e) => { previewImage(e, prvimg, setPrvimg) }}
                                onDragEnter={() => { imgDragAnim("on") }}
                                onMouseLeave={() => { imgDragAnim("off") }}
                            />
                            <img src={prvimg[0]} alt='s' />
                        </div>
                    </div>

                    <div className="signteam-name-area">
                        <label>نام تیم : </label>
                        <input type="text" />
                    </div>

                    <div className="signteam-members-area">
                        <label>نام اعضای تیم :<br />
                            <span><i className='fas fa-info' /> . توصیه میشود از اسامی داخل بازی استفاده کنید</span>
                        </label>
                        <input type="text" placeholder='Pos 5' />
                        <input type="text" placeholder='Pos 4' />
                        <input type="text" placeholder='Pos 3' />
                        <input type="text" placeholder='Pos 2' />
                        <input type="text" placeholder='Pos 1' />
                        <input type="text" placeholder='Coach (?)' />
                    </div>

                    <div className="signteam-captain-area">
                        <label>مشخصات کاپیتان تیم : </label>
                        <input type="text" placeholder='نام کاپیتان' />
                        <input type="number" placeholder='شماره موبایل' />
                        <input type="text" placeholder='id دیسکورد' />
                    </div>

                    <button type='submit' className='signteam-submit-btn'>ثبت اطلاعات</button>

                </form>

            </div>

            <Footer />

        </div>
    );
}

export default Signteam;
