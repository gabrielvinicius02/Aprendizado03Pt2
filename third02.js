// Desafio #1 Pt 1

var nome = prompt("Digite seu nome: ");
var idade = prompt("Digite sua idade: ");
var peso = prompt("Digite seu peso em Kg: ");
var altura = prompt("Digite sua altura em metros: ");
var job = prompt("Digite sua profissão: ");

console.log ("Olá " + nome + ", você tem " + idade + " anos, é " + job + ", tem " + altura + " de altura e pesa " + peso + " kg.");


// Desafio #1 Pt 2

if (idade >= 18){
    console.log("Tu está liberado para tomar umas geladas!! ");
} else {
    console.log("Sem gelada para você!! ");
}


// Desafio #1 Pt 3
var meses = idade *12;
var semanas = idade *52;
var dias = idade * 365;
console.log("Sua idade em meses é: " + meses);
console.log("Sua idade em semanas é "+ semanas);
console.log("Sua idade em dias é: " + dias)


// Desafio #1 Pt 4

var imc = 80 / (altura * altura);

if (imc < 18.5 ){
    console.log("Teu IMC é " + imc.toFixed(2) + "kg/m2. Está na faixa: Magreza. ");
} else if (imc >= 18.5 && imc <= 24.9 ){
    console.log("Teu IMC é " + imc.toFixed(2) + "kg/m2. Está na faixa:  Normal. ");
} else if(imc >= 25 && imc <= 30){
    console.log("Teu IMC é " + imc.toFixed(2) + "kg/m2. Está na faixa: Sobrepeso. ");
} else {
    console.log("Teu IMC é " + imc.toFixed(2) + "kg/m2. Está na faixa: Obesidade. ");
}

// Desafio #1 Pt 5

var anoAtual = 2023
var anoNascimento = anoAtual - idade
console.log("Você nasceu no ano de " + anoNascimento);


// Desafio #1 Pt 6

var idadeAtual = 0;

for (var anosVividos = anoNascimento; anosVividos <= anoAtual; anosVividos++) {
    console.log(anosVividos + " - " + idadeAtual + " anos de idade ");
    idadeAtual++
    
}


//Desafio #2

var nome = prompt("Digite seu nome: ");
var idade = prompt("Digite sua idade: ");
var salarioAtual = parseInt(prompt("Digite seu salário atual: "));
var aumento = 0.015 //1.5% de aumento no primeiero ano;

console.log("\nPrevisão salarial para os próximos 10 anos: ");

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento;
    aumento *= 2 //O aumento dobra a cada ano;

    var salario = salarioAtual;
    var anoCorrespondente = 2023 + ano;
    console.log("No ano de " + anoCorrespondente + ", teu salário vai para: R$" + salario.toFixed(2));
    
}