import server_request from "../../../container/server_request.js";

export const post_code_login = async (phone, code, navigate, setUser) => {
    const post_data = await server_request.post_request({
        path: "auth/sign_in_with_verification_code",
        payload: { phone, code }
    });
    if (post_data.status) {
        localStorage.setItem("token", post_data.data.token);
        setUser(1)
        navigate("/user_panel")
    }
}

export const post_login_verification_code = async (phone, log_in) => {
    const post_data = await server_request.post_request({
        path: "auth/send_code",
        payload: { phone, log_in }
    })
    return post_data;
}

export const login_check_style = () => {
    let phone = document.getElementById('phone_input').value;
    let code = document.getElementById('code_input').value;
    let login_btn = document.getElementById('login_btn');

    if (phone !== '' && code !== '') {
        login_btn.classList.add('black-color');
        login_btn.disabled = false;
    } else {
        login_btn.classList.remove('black-color');
        login_btn.disabled = true;
    }
}