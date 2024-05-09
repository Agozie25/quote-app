let quote = document.getElementById('quote')
let author = document.getElementById('author')
let btn = document.getElementById('btn')


const url = "https://api.quotable.io/random";

let getQuote = ()=>{
    quote.classList.remove('fade')
    fetch(url).then(data => data.json())
    .then((item)=>{
       quote.textContent = item.content
       author.textContent = item.author
    quote.classList.add('fade')

    console.log(item)

    })
};
btn.addEventListener('click',getQuote)

window.addEventListener('load',getQuote)