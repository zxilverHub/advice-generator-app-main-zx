// https://api.quotable.io/random

const dice = document.querySelector('.dice'),
    advice = document.querySelector('.advice'),
    number = document.querySelector('.advice-number');

dice.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        number.innerHTML = `${data.length}`
        advice.innerHTML = `${data.content}`
    })
})