function f33ls_hide_home() {
    const greeting_section = document.getElementById('greeting')
    greeting_section.style.display = 'none'

    const back_button = document.getElementById('back-button')
    back_button.style.visibility = 'visible'

}

function f33ls_go_home() {
    const track_section  = document.getElementById('track')
    track_section.style.display = 'none'

    const review_section  = document.getElementById('review')
    review_section.style.display = 'none'

    const button_review = document.getElementById('button-review')
    button_review.style.display = 'block'

    const button_track = document.getElementById('button-track')
    button_track.style.display = 'block'

    const greeting_section = document.getElementById('greeting')
    greeting_section.style.display = 'flex'

    const back_button = document.getElementById('back-button')
    back_button.style.visibility = 'hidden'
}

function f33ls_review(event) {
    event.target.style.display = 'none'
   
    f33ls_hide_home()

    const track_section  = document.getElementById('track')
    track_section.style.display = 'none'

    const button_track = document.getElementById('button-track')
    button_track.style.display = 'block'

    const review_section  = document.getElementById('review')
    review_section.style.display = 'flex'
}

function f33ls_track(event) {
    event.target.style.display = 'none'

    f33ls_hide_home()

    const review_section  = document.getElementById('review')
    review_section.style.display = 'none'

    const button_review = document.getElementById('button-review')
    button_review.style.display = 'block'

    const track_section  = document.getElementById('track')
    track_section.style.display = 'flex'
}

function f33ls_run(event) {

    const button_track = document.getElementById('button-track')
    if (button_track) {
        button_track.addEventListener('click', f33ls_track)
    }

    const button_review = document.getElementById('button-review')
    if (button_review) {
        button_review.addEventListener('click', f33ls_review)
    }

    const back_button = document.getElementById('back-button')
    if (button_review) {
        back_button.addEventListener('click', f33ls_go_home)
    }
}

document.addEventListener("DOMContentLoaded", f33ls_run)