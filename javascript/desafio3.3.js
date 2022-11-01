/*
3 - Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1 À vista débito, receba 10% de desconto;
2 À vista no dinheiro ou pix, receba 15% de desconto;
3 em duas vezes, preço normal de etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%
 */

const precoDeEtiqueta = 100;
const condicaoDePagamento  = 4;
if(condicaoDePagamento === 1 ) {
    console.log(precoDeEtiqueta - (precoDeEtiqueta * 0.1));
}else if(condicaoDePagamento === 2) {
    console.log(precoDeEtiqueta -(precoDeEtiqueta * 0.15));
}else if(condicaoDePagamento === 3) {
    console.log( precoDeEtiqueta)
}else {
    console.log( precoDeEtiqueta + (precoDeEtiqueta * 0.1));
}
