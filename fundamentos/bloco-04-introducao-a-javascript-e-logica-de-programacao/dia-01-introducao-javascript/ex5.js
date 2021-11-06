const a = 60;
const b = 90;
const c = 30;

if (a < 0 || b < 0 || c < 0) {
    console.log ("Ângulo inválido. Favor informar apenas valores positivos.");
}
else if((a + b + c) == 180 ) {
    console.log(true)
}
else {
    console.log (false);
}