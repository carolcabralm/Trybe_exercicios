//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let a = "Pedra";
let b = "Tesoura";

if ( (a == "Pedra" && b == "Tesoura") || (a == "Papel" && b == "Pedra") || (a == "Tesoura" && b == "Papel") ) {
    console.log ("Player 1 won");
}
else if ( (b == "Pedra" && a == "Tesoura") || (b == "Papel" && a == "Pedra") || (b == "Tesoura" && a == "Papel") ) {
    console.log ("Player 2 won");
}
else {
    console.log ("Ties");
}
