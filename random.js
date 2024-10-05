// Escreva um código que gera 3 números aletórios
// Entre 1 e 100, e apresente de forma decrescente

const numeroRandom = [];

function gerarNumero() 
{
    //zerar a array pra não ter outra em cima
    numeroRandom.length = 0; 

    for (let i = 0; i < 3; i++)
    {
        numeroRandom.push(Math.floor(Math.random() * 101));
    }

    document.getElementById('num1').textContent = numeroRandom;

}

function ordenarDecrescente()
{
     // Deixa em ordem decrescente
    numeroRandom.sort((a, b) => b - a);
    document.getElementById('num1').textContent = numeroRandom;
}