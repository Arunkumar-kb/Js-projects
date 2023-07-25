const quote = document.getElementsByClassName('quote')[0];
const author = document.getElementsByClassName('author')[0];
const btn = document.getElementsByTagName('button')[0];

const url = 'https://api.quotable.io/quotes/random';

let getQuote = () => {
    quote.classList.remove('show');
    author.classList.remove('show');
    fetch(url)
    .then(data => data.json())
    .then((item)=> {
        quote.innerHTML = `${item[0].content}`;
        author.innerHTML = `${item[0].author}`;
        quote.classList.add('show');
        author.classList.add('show');
    })
}

btn.addEventListener('click',getQuote);