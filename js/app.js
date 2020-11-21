// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners

eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
} 

// Funciones

function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion...
    if(tweet === '') {
        console.log('no puede ir vacio');

        return; // Evita que se ejecuten mas lineas de codigo
    }
    console.log('fpjawjgpg');
}