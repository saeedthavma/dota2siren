import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { post_code_login, post_login_verification_code, login_check_style } from './loginCode.js';
import { Context } from '../../../container/Context.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './loginCode.css';

const LoginCode = ({ setLoginway }) => {

    const context = useContext(Context);
    const { setUser } = context;

    const [code, setCode] = useState(0);

    const navigate = useNavigate();

    const send_code = async () => {
        let phone = document.getElementById('phone_input').value;

        if (phone !== '') {
            await post_login_verification_code(phone, true);
            setCode(1);
        } else {
            toast("لطفا شماره موبایل خود را وارد کنید!", {
                theme: "dark",
                type: "error"
            })
        }
    }

    const login_code = (e) => {
        e.preventDefault()

        let phone = document.getElementById('phone_input').value;
        let code = document.getElementById('code_input').value;

        post_code_login(phone, code, navigate, setUser);
    }

    const changeLoginWay = () => {
        let code_form = document.getElementById('code_form');

        code_form.classList.add('code-fade-anim')

        setTimeout(() => {
            setLoginway(0)
        }, 500);
    }

    return (
        <form className='login-area code-init-anim' onSubmit={(e) => login_code(e)} id='code_form'>
            <h2>Login</h2>
            <input type="text" id='phone_input' placeholder='شماره موبایل'
                onChange={login_check_style} />

            <div className='login-code-area'>
                <input type="number" id='code_input' placeholder='کد تایید'
                    onChange={login_check_style} />
                {code === 0 ?
                    <button type='button' className='login-code-btn'
                        onClick={() => send_code()}>
                        ارسال کد
                    </button>
                    :
                    <button type='button' disabled className='login-code-sent'>ارسال شد</button>
                }
            </div>

            <button className='login-btn' id='login_btn' disabled>ورود</button>
            <div>
                <span className='login-signup' onClick={() => navigate('/signplayer')}>ثبت نام</span>
                <span className='login-change-way' onClick={() => changeLoginWay()}>ورود با نام کاربری</span>
            </div>
        </form>
    );
}

export default LoginCode;