import React, { useState } from 'react';
import { unit_array, unit_active } from './signArea.js';
import Login from './login/Login.jsx';
import LoginCode from './login_code/LoginCode.jsx';
import './signArea.css';

const SignArea = () => {

    const [loginway, setLoginway] = useState(0);

    return (
        <div>
            <div className='sign-area'>
                {unit_array.map(e =>
                    <div id={e} onMouseMove={(e) => unit_active(e)}></div>
                )}
            </div>
            <div className="login-field">
                {loginway === 0 ?
                    <Login setLoginway={setLoginway} />
                    :
                    <LoginCode setLoginway={setLoginway} />
                }
            </div>
        </div>
    )
};

export default SignArea;