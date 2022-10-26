/*faça um programa para calcular o valorde uma viagem.

você teraá 5 variáveis. Sendo elas: 
1- Preço do etanol.
2- Preço do gasolina.
3- Tipo de Combustível que está no carro.
3- Gasto médio de combustível do carro por KM.
4- Distância em KM da viagem.

 imprima no console o valor que será gasto para realizar a viagem.
*/
const gasolina = 4.9;
const etanol = 3.4;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoDeCombustivel === "etanol") {
  const quantoGastei = litrosConsumidos * etanol;
  console.log(quantoGastei.toFixed(2));
} else{ 

    const quantoGastei = litrosConsumidos * gasolina;
    console.log(quantoGastei.toFixed(2));
} 


