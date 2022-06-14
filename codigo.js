let nome      = "Camilla"
let sobrenome = "Poubel"
console.log("Olá, eu sou a" + $nome + $sobrenome)

let primeiroNome = "Camilla"
let segundoNome  = "Poubel"
let idade        = 24
console.log("Olá meu primeiro nome é" + $primeiroNome + ",meu segundo nome é" + $segundoNome + ".E eu tenho" + $idade)

let preco1     = 35 
let preco2     = 42
let precoTotal = preco1 + preco2
console.log("Comprei uma xícara por" + Number($preco1) + "reais" + "e dois copos por" + Number($preco2) + "reais" + "No total, gastei" + Number($precoTotal) + "reais.")

let numero1   = 46
let numero2   = 38
let somaTotal = numero1 + numero2
console.log("A soma do valor" + Number($numero1) + "com o valor" + Number($numero2) + "é igual a" + Number($somaTotal))

let contador = 0
console.log(Number(contador, contador++, contador<=5))

let anoAtual      = 2022
let anoNascimento = 1997
let idadeAtual    = anoAtual - anoNascimento
console.log("No ano" + Number($anoAtual) + "eu tenho" + Number($idadeAtual) + "anos de idade.")

let alturaRetangulo  = 5
let larguraRetangulo = 7
let areaRetangulo    = alturaRetangulo * larguraRetangulo
console.log("Um retângulo com largura de" + Number($larguraRetangulo) + "cm e altura de" + Number($alturaRetangulo) + "cm, possui" + Number($areaRetangulo) + "cm² de área total.")

let diaAtual = 14
let mesAtual = 06
let ano      = 2022
let templateDataAtualFormatada = `${diaAtual} / ${mesAtual} / ${ano}`
console.log("A data de hoje é" + dataAtualFormatada)

let valorA = 10
let valorB = 20

valorA = 20
valorB = 10
console.log("Antes a variável 'valorA' possuía o valor" + Number($valorA) + ", agora possui o valor" + valorA)
console.log("Antes a variável 'valorA' possuía o valor" + Number($valorB) + ", agora possui o valor" + valorB)