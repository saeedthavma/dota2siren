import server_request from '../../../container/server_request.js';

export const post_login_data = async (user_name_or_phone, password, navigate, setUser) => {
    const post_data = await server_request.post_request({
        path: "auth/sign_in_with_password",
        payload: { user_name_or_phone, password }
    });
    if (post_data.status) {
        localStorage.setItem("token", post_data.data.token);
        setUser(1)
        navigate("/user_panel")
    }
}

export const login_check_style = () => {
    let phone = document.getElementById('phone_or_username_input').value;
    let password = document.getElementById('password_input').value;
    let login_btn = document.getElementById('login_btn');

    if(phone !== '' && password !== '') {
        login_btn.classList.add('black-color');
        login_btn.disabled  = false;
    }else {
        login_btn.classList.remove('black-color');
        login_btn.disabled  = true;
    }
}