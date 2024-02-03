import server_request from '../../container/server_request.js';

export const get_user_data = async (setUserinfo) => {
    const get_data = await server_request.get_request({
        path: "user/profile"
    })
    setUserinfo(get_data.data.user);
}