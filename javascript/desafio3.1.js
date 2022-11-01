/* 1- faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

media = (nota1 + nota2 + nota3) /3;

classificação:
-media menor que 5, reprovado
-media entre 5 e 7, recuperação.
-media acima de 7, aprovado

*/

const nota1 = 6;
const nota2 = 7;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log("Aluno reprovado")
}else if(media >= 5 && media <=7){
    console.log("Aluno em recuperção")
}else {
    console.log("Aprovado")
}
console.log(media)
