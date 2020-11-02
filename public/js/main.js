const userProfile = document.querySelector('.user-profile')
const dropdownProfile = document.querySelector('.profile-dropdown')

userProfile.addEventListener('click', (e) => {
    e.preventDefault()

    dropdownProfile.classList.toggle('hidden')
})

