var ctx = document.getElementById('grafico').getContext('2d');


function geraGrafico(moeda) {
    var grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Dez/20', 'Jan/21', 'Fev/21', 'Mar/21', 'Abr/21', 'Mai/21'],
            datasets: [{
                label: 'Valor em Dólar (USD)',
                data: [98_238.93, 152_625.20, 182_151.80, 279_818.14, 335_263.14, 314_665.64],
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
}