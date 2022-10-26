const numero = 10;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if(numeroPar){
    console.log('Par');
}else {
    console.log('Impar')
}


const numero1 = 5;
const numeroDivisivelPor5 = (numero1 % 5) === 0;

console.log(numeroDivisivelPor5);

if(numero1 === 0){
    console.log('O Número é Inválido');
}else if (numeroDivisivelPor5)
{
    console.log('Sim');
}else {
    console.log('Não')
}


const numero2 = 10;
const isNumeroPar = (numero % 2) === 0;

console.log(isNumeroPar);

if(isNumeroPar){
    console.log('O numero é Par');
}else {
    console.log('O numero é Impar')
}

