// cod imc desmembrado para caber dentro de funções !
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "obeso";
  } else {
    return "Obesidade grave";
  }
}
// main
(function () {
  const altura = 1.85;
  const peso = 99;
  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();

