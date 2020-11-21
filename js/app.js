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
        mostrarError('un mensaje no puede ir vacio');

        return; // Evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();
    
}

    // Mostrar mendajes de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de cierto tiempo
    setTimeout(() => {
        mensajeError.remove();
    },1000)
}

    // Muestra un listado de los tweets
function crearHTML() {
    
    if(tweets.lenght > 0) {
        
    }

}
