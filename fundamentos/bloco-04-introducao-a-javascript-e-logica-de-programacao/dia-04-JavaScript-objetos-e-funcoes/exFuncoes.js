//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function maior(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    else if(num1 < num2) {
        return num2;
    }
    else {
        return ("Os números são iguais");
    }
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function maior(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3) {
        return num2;
    }
    else if(num3 > num1 && num3 > num2) {
        return num3;
    }
    else{
        return ("Os números são iguais");
    }
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function valor(num) {
    if (num > 0) {
        return ("positive");
    }
    else if (num < 0) {
        return ("negative");
    }
    else {
        return ("zero");
    }
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

function triangulo(a, b, c) {
    if((a || b || c) < 0) {
        return("Ângulo inválido");
    }
    else if(a + b + c == 180) {
        return true;
    }
    else {
        return false;
    }
}