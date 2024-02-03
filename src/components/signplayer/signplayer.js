import server_request from "../../container/server_request.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const get_hero_list = async (setHerolist, setFiltered) => {
    const get_data = await server_request.heros_request({
        path: 'heroes/list'
    });
    setHerolist(get_data.data.heroes_list);
    setFiltered(get_data.data.heroes_list);
}

export const get_player_info = async (dota_id, setPlayerinfo, setCheckid) => {
    const player_data = await server_request.rank_request({
        path: 'players/player_rank',
        payload: { dota_id }
    })
    if (player_data.data.name === null) {
        toast("آیدی وارد شده صحیح نیست!", {
            theme: "dark",
            type: "error"
        })
        setCheckid(0)
    } else {
        setPlayerinfo(player_data.data)
        setCheckid(1)
    }
}

export const post_verification_code = async (phone, log_in) => {
    const post_data = await server_request.post_request({
        path: "auth/send_code",
        payload: { phone, log_in }
    })
    return post_data;
}

export const post_player_data = async (name, phone, code, dota_id, password,
    user_name, info, signature_heros, roles, rank_medal, rank_star, nick_name ,avatar, navigate, setUser) => {

    const post_data = await server_request.post_request({
        path: "auth/sign_up",
        payload: {
            name, phone, code, dota_id, password, user_name, info,
            signature_heros, roles, rank_medal, rank_star, nick_name, avatar
        }
    })
    if (post_data.status) {
        localStorage.setItem("token", post_data.data.token)
        setUser(1);
        navigate("/user_panel");
        toast("خوش آمدید", {
            theme: "dark",
            type: "success"
        });
    }
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


export const medal_array = [
    { src: '/photo/icons/medal-unclibrated.webp' },
    { src: '/photo/icons/medal-herald.png' },
    { src: '/photo/icons/medal-guardian.png' },
    { src: '/photo/icons/medal-crusader.png' },
    { src: '/photo/icons/medal-archon.png' },
    { src: '/photo/icons/medal-legend.png' },
    { src: '/photo/icons/medal-ancient.png' },
    { src: '/photo/icons/medal-divine.png' },
    { src: '/photo/icons/medal-immortal.png' }
];