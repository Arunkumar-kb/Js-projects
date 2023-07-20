const url = 'https://v2.jokeapi.dev/joke/Programming?type=single';

const txt = document.getElementById('joke');
const btn = document.getElementById('btn');

let getJoke = () => {
    txt.classList.remove('fade')
    fetch(url)
    .then(data => data.json())
    .then(item => {
        txt.textContent = item.joke;
        txt.classList.add('fade');
    });
}

btn.addEventListener('click', getJoke);