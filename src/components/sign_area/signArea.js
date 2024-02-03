

export const unit_active = (e) => {
    e.target.classList.add('sign-bg-anim');
    setTimeout(() => {
        e.target.classList.remove('sign-bg-anim')
    }, 1000)
}

export const unit_array = [];
for (let index = 0; index < 630 ; index++) {
    unit_array.push('unit')
}