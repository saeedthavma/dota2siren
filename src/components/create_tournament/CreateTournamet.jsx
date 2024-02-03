import React, { useState } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Onevone from './onevone/Onevone.jsx';
import Fivevfive from './fivevfive/Fivevfive.jsx';
import './createTournament.css';

const CreateTournamet = () => {

    const [content, setContent] = useState(false);

    const content_array = [<Fivevfive />, <Onevone />];

    return (
        <div>

            <Header />
            <img className='header-img-es' src='/photo/images/header-img-es.jpg' />

            <div className="create-tournament-bg"></div>

            {
                content === false ?
                    <div className="create-tournament-entrance container">
                        <h3>نوع تورنومنت را انتخاب کنید</h3>
                        <div className='create-tournament-field'>
                            <div onClick={() => { setContent(0) }}
                                onMouseMove={() => {
                                    document.getElementById('5v5_img').classList.add('create-5v5-img-hvr');
                                    document.getElementById('5v5_btn').classList.add('create-5v5-anim');
                                }}
                                onMouseLeave={() => {
                                    document.getElementById('5v5_img').classList.remove('create-5v5-img-hvr');
                                    document.getElementById('5v5_btn').classList.remove('create-5v5-anim');
                                }}>
                                <button className='create-tournament-5v5-btn' id='5v5_btn'></button>
                                <img className='create-5v5-img' src='/photo/icons/5v5-icon.png' id='5v5_img' />
                            </div>
                            <div onClick={() => setContent(1)}
                            onMouseMove={() => {
                                document.getElementById('1v1_img').classList.add('create-1v1-img-hvr');
                                document.getElementById('1v1_btn').classList.add('create-1v1-anim');
                            }}
                            onMouseLeave={() => {
                                document.getElementById('1v1_img').classList.remove('create-1v1-img-hvr');
                                document.getElementById('1v1_btn').classList.remove('create-1v1-anim');
                            }}>
                                <button className='create-tournament-1v1-btn' id='1v1_btn'></button>
                                <img className='create-1v1-img' src='/photo/icons/1v1-icon.png' id='1v1_img' />
                            </div>
                        </div>
                    </div>
                    :
                    content_array[content]
            }

            <Footer />

        </div>
    );
}

export default CreateTournamet;
