import server_request from "../../../container/server_request.js";

export const get_user_data = async (setUserinfo) => {
    const get_data = await server_request.get_request({
        path: "user/profile"
    })
    setUserinfo(get_data.data.user);
    console.log(get_data.data.user);
}

export const role_array = [
    {
        src: '/photo/icons/hardsup-role.png',
        role: "HARD SUPPORT"
    },
    {
        src: '/photo/icons/softsup-role.png',
        role: "SOFT SUPPORT"
    },
    {
        src: '/photo/icons/offlane-role.png',
        role: "OFF LANE"
    },
    {
        src: '/photo/icons/midlane-role.png',
        role: "MID LANE"
    },
    {
        src: '/photo/icons/safelane-role.png',
        role: "SAFE LANE"
    }
];