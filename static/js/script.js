var css = document.getElementsByTagName("style")[0];
var ctx = document.getElementById('grafico').getContext('2d');
var conta = 0;
var dados = 0;

var dataBitcoin = [98_238.93, 152_625.20, 182_151.80, 279_818.14, 335_263.14, 314_665.64]
var dataEthereum = [3_071.15, 3_796.32, 7_468.19, 8_853.12, 11_237.28, 16_037.90]
var dataXrp = [0,0,0,0,0,0]
var dataLitecoin = [446.45, 657.12, 717.24, 991.39, 1_157.02, 1_506.48]
var dataEos = [0,0,0,0,0,0]
var dataCardano = [0,0,0,0,0,0]
var dataBinance_coin = [0,0,0,0,0,0]
var dataStellar_lumens = [0,0,0,0,0,0]
var dataChainlink = [0,0,0,0,0,0]
var dataNeo = [0,0,0,0,0,0]
var dataReau = [0,0,0,0,0,0]


// Chart inicial com dados para Bitcoin
var highlight = document.getElementsByClassName("moedas-menu")[0];
highlight.style.backgroundColor = 'red';


var grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dez/20', 'Jan/21', 'Fev/21', 'Mar/21', 'Abr/21', 'Mai/21'],
        datasets: [{
            label: 'Valor em Real (BRL)',
            data: dataBitcoin,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true
    }
});





function geraGrafico(moeda,n) {
    grafico.destroy();
    
    highlight.style.backgroundColor = '#232323';
    highlight = document.getElementsByClassName("moedas-menu")[n];
    highlight.style.backgroundColor = 'red';

    if (moeda == "bitcoin") {
        dados = dataBitcoin;
    } else if (moeda == "ethereum") {
        dados = dataEthereum;
    } else if (moeda == "xrp") {
        dados = dataXrp;
    } else if (moeda == "litecoin") {
        dados = dataLitecoin;
    } else if (moeda == "eos") {
        dados = dataEos;
    } else if (moeda == "cardano") {
        dados = dataCardano;
    } else if (moeda == "binance_coin") {
        dados = dataBinance_coin;
    } else if (moeda == "stellar_lumens") {
        dados = dataStellar_lumens;
    } else if (moeda == "chainlink") {
        dados = dataChainlink;
    } else if (moeda == "neo") {
        dados = dataNeo;
    } else if (moeda == "reau") {
        dados = dataReau;
    }
    
    
    grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Dez/20', 'Jan/21', 'Fev/21', 'Mar/21', 'Abr/21', 'Mai/21'],
            datasets: [{
                label: 'Valor em Real (BRL)',
                data: dados,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true
        }
    });
    conta +=1
}