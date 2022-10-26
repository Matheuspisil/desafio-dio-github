/*faça um programa para calcular o valorde uma viagem.

você teraá 3 variáveis. Sendo elas: 
1- Preço do combustivel.
2- Gasto médio de combustível do carro por KM.
3- Distância em KM da viagem.

 imprima no console o valor que será gasto para realizar a viagem.
*/


const precoCombustivel = 4.9;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro ;
const quantoGastei = litrosConsumidos * precoCombustivel ;

console.log(quantoGastei.toFixed(2));

