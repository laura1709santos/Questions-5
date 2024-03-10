
//Questão 1//
function resultado1() {
    var INDICE = 13;
    var SOMA = 0;
    var K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    document.getElementById("resultado1").innerText = "A soma é: " + SOMA;
}



//Questão 2
//OBS: Somar o atual com o anterior vai dar o proximo número
//adicionando números na sequencia somando os dois últimos números 
// já presentes na sequência até que o último número seja maior ou igual ao N. 

function fibonacci_sequence(n) 
{
    var fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < n) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
}

function verificarFibonacci() {
    var numero = document.getElementById("numero").value.trim();
    
    if (numero.length === 0) {
        document.getElementById("resultado2").innerText = "Por favor, digite um número.";
        return;
    }

    var numero = parseInt(document.getElementById("numero").value);
    var fibonacci = fibonacci_sequence(numero);

    if (fibonacci.includes(numero)) {
        document.getElementById("resultado2").innerText = "O número " + numero + " pertence à sequência de Fibonacci.";
    } else {
        document.getElementById("resultado2").innerText = "O número " + numero + " não pertence à sequência de Fibonacci.";
    }
}

//Questão 3
function calculateSequences() {
    //A      
    var sequence_a = [1, 3, 5, 7];
    var proximo_a = sequence_a[sequence_a.length - 1] + 2;
    document.getElementById("sequence_a").innerHTML = "Resposta: " + proximo_a;
    //B
    var sequence_b = [2, 4, 8, 16, 32, 64];
    var proximo_b = sequence_b[sequence_b.length - 1] * 2;
    document.getElementById("sequence_b").innerHTML = "Resposta: " + proximo_b;
    //C
    var sequence_c = [0, 1, 4, 9, 16, 25, 36];
    var proximo_c = sequence_c.length * sequence_c.length;
    document.getElementById("sequence_c").innerHTML = "Resposta: " + proximo_c;
    //D
    var sequence_d = [4, 16, 36, 64];
    var proximo_d = Math.pow((Math.sqrt(sequence_d[sequence_d.length - 1]) + 2), 2);
    document.getElementById("sequence_d").innerHTML = "Resposta: " + proximo_d;
    //E
    var sequence_e = [1, 1, 2, 3, 5, 8];
    var proximo_e = sequence_e[sequence_e.length - 1] + sequence_e[sequence_e.length - 2];
    document.getElementById("sequence_e").innerHTML = "Resposta: " + proximo_e;
    //F
    var sequence_f = [2, 10, 12, 16, 17, 18, 19];
    var proximo_f;
    var ultimoNumero = sequence_f[sequence_f.length - 1];
    if (ultimoNumero === 18) {
        proximo_f = 200;
    } else {
        proximo_f = ultimoNumero + 1;
    }
    document.getElementById("sequence_f").innerHTML = "Resposta: " + proximo_f;
}

//Questão5
function inverterString() {
    let stringOriginal = document.getElementById("inputString").value;
    if (stringOriginal.trim() === "") {
        document.getElementById("resultado").innerHTML = "Por favor, insira uma string válida.";
        return;
    }

    // Inverta a string
    let stringInvertida = "";
    for (let i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i];
    }

    //string invertida
    document.getElementById("resultado").innerHTML = "String original: " + stringOriginal + "<br>" +  "String invertida: " + stringInvertida;}


