const body = document.body;
const head = document.head;

var CSS = document.createElement('link');
CSS.rel = "stylesheet";
CSS.href="https://jheroldy.github.io/whatsapp-bot/style.css";


var flutuante = document.createElement('section');
flutuante.classList = 'flutuante';

body.appendChild(flutuante);
head.appendChild(CSS);