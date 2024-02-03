import axios from "axios";
import server_request from "../../../container/server_request.js";

export const post_tournament = async (name, tournament_type, teams_count, games_type, group_stage, prize_pool,
    entry, from_rank, to_rank, registration_deadline, start_at, tournament_logo) => {

    const post_data = await server_request.post_request({
        path: "tournament/new_tournament",
        payload: {
            name, tournament_type, teams_count, games_type, group_stage, prize_pool,
            entry, from_rank, to_rank, registration_deadline, start_at, tournament_logo
        }
    })
    console.log(post_data);
}

export const template_array = [
    { src: "/photo/images/template-8team.jpg" },
    { src: "/photo/images/template-16team.jpg" },
    { src: "/photo/images/bracket-16team.jpg" }
];

export const from_ranks = [
    { value: 'herald', icon: '/photo/icons/medal-herald.png' },
    { value: 'guardian', icon: '/photo/icons/medal-guardian.png' },
    { value: 'crusader', icon: '/photo/icons/medal-crusader.png' },
    { value: 'archon', icon: '/photo/icons/medal-archon.png' },
    { value: 'legend', icon: '/photo/icons/medal-legend.png' },
    { value: 'ancient', icon: '/photo/icons/medal-ancient.png' },
    { value: 'divine', icon: '/photo/icons/medal-divine.png' },
    { value: 'immortal', icon: '/photo/icons/medal-immortal.png' },
];

export const to_ranks = [
    { value: 'herald', icon: '/photo/icons/medal-herald.png' },
    { value: 'guardian', icon: '/photo/icons/medal-guardian.png' },
    { value: 'crusader', icon: '/photo/icons/medal-crusader.png' },
    { value: 'archon', icon: '/photo/icons/medal-archon.png' },
    { value: 'legend', icon: '/photo/icons/medal-legend.png' },
    { value: 'ancient', icon: '/photo/icons/medal-ancient.png' },
    { value: 'divine', icon: '/photo/icons/medal-divine.png' },
    { value: 'immortal', icon: '/photo/icons/medal-immortal.png' },
];

export const previewImage = (e, prvimg, setPrvimg) => {
    let file = e.target.files[0];
    const url = URL.createObjectURL(file)

    let prv = [...prvimg];

    prv[0] = url;
    setPrvimg(prv);
}

export const imgDragAnim = (power) => {
    let team_logo = document.getElementById('tournament_logo');

    switch (power) {
        case "on":
            team_logo.classList.add('create-logo-anim');
            break;
        case "off":
            team_logo.classList.remove('create-logo-anim');
            break;
    }
}


export const upload_image = async (file) => {
    const form_data = new FormData()
    form_data.append(file, "tournament_logo")
    axios.post("sfgdf", form_data)
}