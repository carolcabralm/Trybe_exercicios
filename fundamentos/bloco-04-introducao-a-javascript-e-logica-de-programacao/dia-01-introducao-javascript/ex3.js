const const1 = 2;
const const2 = 32.5;
const const3 = 32;

if (const1 > const2 && const1 > const3) {
    console.log(const1);
}
else if (const2 > const1 && const2 > const3) {
    console.log(const2);
}
else if (const3 > const1 && const3 > const2) {
    console.log(const3);
}
else {
    console.log("As constantes são iguais");
}