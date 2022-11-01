/*
2- IMC - Índice da massa corporal é um critério da organição mundial da saúde
para dar indicação sobre a condição de peso de uma pessoa adulta.

formula do IMC
IMC = peso / (altura * altura)

IMC em adultos condição:
-abaixo de 18.5 abaixo do peso;
-entre 18.5 e 25 peso normal;
-entre 25 e 30 acima do peso;
-entre 30 e 40 obeso;
-acima de 40 obesidade grave;
*/

const altura = 1.85;
const peso = 99;
const imc = peso / Math.pow(altura, 2);

if(imc < 18.5){
    console.log("Abaixo do peso")

}else if(imc >= 18.5 && imc < 25) {
    console.log("peso normal")
}else if(imc >=25 && imc < 30){
    console.log("acima do peso")
}else if(imc >=30 && imc < 40){
    console.log("obeso")
}else{
    console.log("Obesidade grave")
}
console.log(imc);
