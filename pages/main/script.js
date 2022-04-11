
const friendBtn = document.querySelector('.friend')
const aboutBtn = document.querySelector('.about')
friendBtn.addEventListener('click', locationDoc)
aboutBtn.addEventListener('click', locationOur)

function locationDoc() {
    document.location = '#about'
}
function locationOur() {
    document.location = '../pets/index.html'
}

