const paiButtonCount = document.querySelector('h1');
const buttonCount = document.createElement('button');
buttonCount.innerHTML = 'Clique aqui!';
paiButtonCount.appendChild(buttonCount);
const text = document.createElement('h3');
buttonCount.appendChild(text);

buttonCount.addEventListener('click', count);
let contador = 0;

function count() {
  contador += 1;
  text.innerHTML = contador;  
}