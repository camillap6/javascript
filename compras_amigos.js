const refrigerante= 11.99
const macarrao= 6.99
const ervilha= 6.99
const arroz= 22.99
const feijao= 11.89
const vinho= 70.00
let valorTotalRefrigerante= refrigerante * 3
let valorTotalMacarrao= macarrao * 4
let valorTotalErvilha= ervilha * 3
let valorTotalArroz= arroz * 3
let valorTotalFeijao= feijao * 2
let valorTotalVinho= vinho * 3
let precoTotal= parseInt(valorTotalRefrigerante + valorTotalMacarrao + valorTotalErvilha + valorTotalArroz + valorTotalFeijao + valorTotalVinho)
let metade= precoTotal / 2
let eu= metade - valorTotalVinho
let meuAmigo= metade + valorTotalVinho
let novoEu= metade
let novoMeuAmigo= metade
let templateOpcao1= (`Eu pagarei:  ${eu}, e meu amigo pagará: ${meuAmigo}`)
let templateOpcao2= (`Eu pagarei:  ${novoEu}, e meu amigo pagará: ${novoMeuAmigo}`)
console.log("O preço total da compra é de : " + precoTotal)
if(precoTotal % 2 == 0){
     console.log(templateOpcao1)
  }else{
    console.log(templateOpcao2)
  }

  let precoRefrigerante= parseInt(prompt("Qual o preço do refrigerante?"))
  let precoMacarrao= parseInt(prompt("Qual o preço do macarrão?"))
  let precoErvilha= parseInt(prompt("Qual o preço da ervilha?"))
  let precoArroz= parseInt(prompt("Qual o preço do arroz?"))
  let precoFeijao= parseInt(prompt("Qual o preço do feijão?"))
  let precoVinho= parseInt(prompt("Qual o preço do vinho?"))
  let quantidadeRefrigerante= parseInt(prompt("Quantas garrafas de refrigerante?"))
  let quantidadeMacarrao= parseInt(prompt("Quantas embalagens de macarrão?"))
  let quantidadeErvilha= parseInt(prompt("Quantos pacotes de ervilha?"))
  let quantidadeArroz= parseInt(prompt("Quantos sacos de arroz?"))
  let quantidadeFeijao= parseInt(prompt("Quantos pacotes de feijão?"))
  let quantidadeVinho= parseInt(prompt("Quantas unidades de vinho?"))
  let precoTotalRefrigerante= precoRefrigerante * quantidadeRefrigerante
  let precoTotalMacarrao= precoMacarrao * quantidadeMacarrao
  let precoTotalErvilha= precoErvilha * quantidadeErvilha
  let precoTotalArroz= precoArroz * quantidadeArroz
  let precoTotalFeijao= precoFeijao * quantidadeFeijao
  let precoTotalVinho= precoVinho * quantidadeVinho
  let valorTotal= parseInt(precoTotalRefrigerante + precoTotalMacarrao + precoTotalErvilha + precoTotalArroz + precoTotalFeijao + precoTotalVinho)
  alert(`Valor total a ser pago: ${valorTotal}`)