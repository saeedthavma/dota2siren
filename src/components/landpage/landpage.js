export const service_array = [
    {
        img: '/photo/images/user-img.jpg'
    },
    {
        img: '/photo/images/tournament-img.jpg'
    },
    {
        img: '/photo/images/host-img.jpg'
    },
    {
        img: '/photo/images/jointeam-img.jpg'
    },
    {
        img: '/photo/images/team-img.jpg'
    },
    {
        img: '/photo/images/award-img.jpg'
    }
];


export const qweAnim = () => {
    let quas = document.getElementById('quas');
    let wex = document.getElementById('wex');
    let exort = document.getElementById('exort');
    let invoker_voice = document.getElementById('invoker_voice');

    invoker_voice.play()
    quas.classList.add('invoker-quas-anim');
    wex.classList.add('invoker-wex-anim');
    exort.classList.add('invoker-exort-anim');
}
export const qweRemove = () => {
    let quas = document.getElementById('quas');
    let wex = document.getElementById('wex');
    let exort = document.getElementById('exort');
    let invoker_voice = document.getElementById('invoker_voice');

    invoker_voice.pause()
    quas.classList.remove('invoker-quas-anim');
    wex.classList.remove('invoker-wex-anim');
    exort.classList.remove('invoker-exort-anim');
}