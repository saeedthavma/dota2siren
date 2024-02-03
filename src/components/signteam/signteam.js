export const previewImage = (e, prvimg, setPrvimg) => {
    let file = e.target.files[0];
    const url = URL.createObjectURL(file)

    let prv = [...prvimg];

    prv[0] = url;
    setPrvimg(prv);
}

export const imgDragAnim = (power) => {
    let team_logo = document.getElementById('team_logo');

    switch (power) {
        case "on":
            team_logo.classList.add('signteam-logo-anim');
            break;
        case "off":
            team_logo.classList.remove('signteam-logo-anim');
            break;
    }
}