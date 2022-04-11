const slider = document.querySelector('.slider__content')
const animals = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie']


function showCard() {
    animals.map(el => {
        const card = document.createElement('div')
        card.classList.add('card')
        const img = document.createElement('img')
        img.classList.add('card-img')
        img.src = `/assets/images/${el}.png`
        img.alt = 'animal'
        slider.append(card)
        card.append(img)
        const title = document.createElement('h3')
        title.innerHTML = `${el}`
        card.append(title)
        const button = document.createElement('button')
        button.innerHTML = `Learn more`
        button.classList.add('card-btn')
        card.append(button)
    })
}
showCard();


slider.addEventListener('click', e => {


    console.log(e.currentTarget);
})