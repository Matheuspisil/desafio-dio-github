// function sayMyName(name){
//   console.log("Your name is "  +  name)

// sayMyName('Matheus')
// sayMyName('Karen')
// }

// function quadrado(valor){
//  return valor + valor;
// }
//  const quadradoDeDez = quadrado(10);
//  console.log(quadradoDeDez)

function incrementarJuros(valor, percentualJuros){
  const valorDeAcressimo = (percentualJuros / 100) * valor  ;
  return valor + valorDeAcressimo;

 }
  
  console.log(incrementarJuros(100, 10));
  console.log(incrementarJuros(100, 15));
  console.log(incrementarJuros(100, 20));