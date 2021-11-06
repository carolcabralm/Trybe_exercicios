let peca = "Bispo";
let peca_lower = peca .toLowerCase();

switch (peca_lower) {
    case "rei":
        console.log ("Qualquer direção, uma casa por vez.");    
        break;
    case "dama":
        console.log ("Qualquer direção, quantas casas quiser.");
        break;
    case "torre":
        console.log ("Em linha reta, quantas casas quiser.");
        break;
    case "bispo":
        console.log ("Diagonal, quantas casas quiser.");
        break;
    case "cavalo":
        console.log ("Em L.");
        break;
    case "peão":
        console.log ("Uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
        break;
    default:
        console.log ("Peça inválida.");
        break;
}