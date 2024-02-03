import React, { useContext, useEffect, useState } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { FaSearchengin } from "react-icons/fa6";
import { get_hero_list, role_array, get_player_info, post_verification_code, post_player_data } from './signplayer.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Context } from '../../container/Context.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './signplayer.css';

const Signplayer = () => {

    const context = useContext(Context);
    const { setUser } = context;

    const [code, setCode] = useState(0);
    const [playerinfo, setPlayerinfo] = useState([]);
    const [playerrole, setPlayerrole] = useState([]);
    const [herolist, setHerolist] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [signhero, setSignhero] = useState([]);
    const [checkid, setCheckid] = useState(0);
    const [rulescheck, setRulescheck] = useState(0)
    const [popup, setPopup] = useState(0);
    const [rulespopup, setRulespopup] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        get_hero_list(setHerolist, setFiltered)
    }, []);

    const signplayer_submit = (e) => {
        e.preventDefault();

        let name = document.getElementById('name_input').value;
        let phone_number = document.getElementById('phone_input').value;
        let phone = "09" + phone_number;
        let code = document.getElementById('code_input').value;
        let dota_id = document.getElementById('dota_id').value;
        let password = document.getElementById('password_input').value;
        let user_name = document.getElementById('username_input').value;
        let info = document.getElementById('info_input').value;
        let signhero_array = [];
        signhero.map(e => signhero_array.push(e.id))
        let signature_heros = signhero_array;
        let roles = [...playerrole];
        let rank_medal = playerinfo.medal;
        let rank_star = playerinfo.star;
        let nick_name = playerinfo.name;
        let avatar = playerinfo.avatar;

        let confirm_password = document.getElementById('confirm_password').value;
        if (password !== confirm_password) {
            toast("رمز عبور و تکرار رمز عبور یکسان نیستند!", {
                theme: "dark",
                type: "error"
            })
            return;
        }

        post_player_data(name, phone, code, dota_id, password, user_name, info,
            signature_heros, roles, rank_medal, rank_star, nick_name, avatar, navigate, setUser);

    }

    const send_code = async () => {
        let phone_number = document.getElementById('phone_input').value;
        let phone = "09" + phone_number;

        await post_verification_code(phone, false);
    }

    const search_hero = () => {
        let hero_name = document.getElementById('hero_name').value.toLowerCase();

        let prv = [...herolist];

        let search_result = prv.filter(e => {
            return e.name.toLowerCase().includes(hero_name);
        })
        if (hero_name) {
            setFiltered(search_result)
        } else {
            setFiltered(prv);
        }
    }

    const add_sign_hero = (hero_chosen) => {
        if (!signhero.some(e => e.id === hero_chosen.id)) {
            setSignhero(prv => prv.concat({ img: hero_chosen.image, id: hero_chosen.id }))
        } else {
            setSignhero(prv => prv.filter(e => e.img !== hero_chosen.image))
        }
    }

    useEffect(() => {
        if (signhero.length > 2) setPopup(0);
    }, [signhero])

    const check_player_rank = () => {
        let dota_id = document.getElementById('dota_id').value;

        get_player_info(dota_id, setPlayerinfo, setCheckid);
    }

    const handle_role = (selected_role) => {
        if (!playerrole.includes(selected_role)) {
            setPlayerrole(prv => prv.concat(selected_role))
        } else {
            setPlayerrole(prv => prv.filter(e => e !== selected_role))
        }
    }

    const rules_check = () => {
        if (rulescheck === 0) {
            setRulescheck(1)
        } else {
            setRulescheck(0)
        }
    }


    return (
        <div>

            <Header />
            <img className='header-img-invoker' src='/photo/images/header-img-invoker.jpg' />

            <div className='signplayer-bg'></div>

            <div className='container'>

                <form className="signplayer-form" onSubmit={(e) => { signplayer_submit(e) }}>

                    <input id='name_input' type='text' placeholder='نام و نام خانوادگی' />

                    <input id='username_input' type="text" placeholder='نام کاربری' />

                    <div className='signplayer-phone-area'>
                        <label>شماره موبایل :</label>
                        <input id='phone_input' type="number" placeholder='12xxxxxxx' />
                        <div>09</div>
                    </div>

                    <input id='password_input' type="password" placeholder='رمز عبور' />

                    <div className="signplayer-confirm-code">
                        <input id='code_input' type='text' placeholder='کد تایید' />
                        {code === 0 ?
                            <button type='button' className='signplayer-sendcode-btn'
                                onClick={() => { send_code(), setCode(1) }}>
                                ارسال کد تایید
                            </button>
                            :
                            <button type='button' className='signplayer-waitcode-btn'>ارسال شد</button>
                        }
                    </div>

                    <input id='confirm_password' type="password" placeholder='تکرار رمز عبور' />


                    <div className="signplayer-role-area">
                        <label>انتخاب رول :</label>
                        <p><i className='fas fa-info' /> رول هایی که توانایی بازی در آنها دارید را انتخاب کنید</p>
                        <div className='signplayer-role-field'>
                            {
                                role_array.map(e =>
                                    <div className='signplayer-role-each'>
                                        <input type="checkbox" onClick={() => handle_role(e.role)} />
                                        <div>{e.role}</div>
                                        <img src={e.src} />
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className='signplayer-account-id'>
                        <label>ID اکانت دوتا 2 : </label>
                        <input type="text" id='dota_id' onChange={() => setCheckid(0)} />
                        {checkid === 0 ?
                            <button type='button' className='signplayer-checkid-btn'
                                onClick={() => check_player_rank()}>بررسی
                            </button>
                            :
                            <div className='signplayer-player-info'>
                                <div>
                                    <img src={playerinfo.star} />
                                    <img src={playerinfo.medal} />
                                </div>
                                <img src={playerinfo.avatar} />
                                <br />
                                <p>{playerinfo.name}</p>
                            </div>
                        }
                    </div>

                    <div className="signplayer-signature-hero">
                        <div>
                            <label>هیرو های تخصصی : </label>
                            <p><i className='fas fa-info' />3 تا از بهترین هیرو های خودتو انتخاب کن</p>
                        </div>
                        <div className='signplayer-signature-choose'>
                            <button type='button'
                                onClick={() => { setPopup(1), setSignhero([]), setFiltered(herolist) }}>
                                انتخاب هیرو
                            </button>
                            <div>
                                {signhero.map(e =>
                                    <img src={e.img} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="signplayer-resume-area">
                        <label>توضیحات بیشتر : <br /><span>(اختیاری)</span></label>
                        <textarea id='info_input' placeholder='مثال: سابقه بازی در تیم ها و مدت زمانی که بازی میکنی...'></textarea>
                    </div>

                    <div className="signplayer-privacy-policy">
                        <input type='checkbox' onClick={rules_check} />
                        <p onClick={() => setRulespopup(1)}>تمامی قوانین سایت را میپذیرم.</p>
                    </div>

                    <br />

                    {rulescheck === 1 ?
                        <button type='submit' className='signplayer-submit-btn'>ثبت اطلاعات</button>
                        :
                        <button disabled className='signplayer-submit-disabled'>ثبت اطلاعات</button>
                    }

                </form>

            </div>

            {popup === 1 ?
                <div>
                    <div className="signplayer-popup-bg" onClick={() => { setPopup(0) }}></div>
                    <div className='signplayer-signature-popup'>
                        <div className='signplayer-signature-search'>
                            <span><FaSearchengin /></span>
                            <input type="text" id='hero_name' onChange={search_hero}
                                placeholder='نام هیرو' />
                            <p>3تا از بهترین هیرو های خودتو انتخاب کن</p>
                        </div>
                        <div className='signplayer-signature-heros'>
                            {filtered.map(e =>
                                <img className={`${signhero.some(j => j.id === e.id) ? "signplayer-hero-active" : ""}`} src={e.image} onClick={() => { add_sign_hero(e) }} />
                            )}
                        </div>
                    </div>
                </div>
                :
                ""
            }

            {rulespopup === 1 ?
                <div>
                    <div className="signplayer-popup-bg" onClick={() => { setRulespopup(0) }}></div>
                    <div className='signplayer-rules-popup'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Tempore praesentium deserunt obcaecati nam consectetur
                            officia possimus iste libero aliquid sit recusandae ea,
                            facere sequi consequatur?</p>
                    </div>
                </div>
                :
                ""
            }

            <Footer />

        </div>
    );
}

export default Signplayer;
