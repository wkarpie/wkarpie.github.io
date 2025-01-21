document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('bcglast12').getContext('2d');
    const data = {
        labels: ['Defense Health Agency', 'Department of Education', 'Department of the Air Force', 'Department of Energy', 'U.S. International Development Finance Corporation'],
        datasets: [
            {
                label: 'BCG Prime',
                data: [108129925, 1293679, 900000, 500000, 186000],
                backgroundColor: 'rgba(20, 123, 88, 0.9)',
            },
        ]
    };

    const options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'bottom',
                display: false
            },
            title: {
                display: true,
                text: 'Awards by Agency',
                font: {
                    size: 20
                }
            },
            subtitle: {
                display: true,
                text: 'Top Five, Last Three Years',
                position: 'bottom',
                font: {
                    size: 16
                }
            }
        },        
        scales: {
            x: {
                stacked: true,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value / 1000000 + 'M';
                    }
            },
            y: {
                stacked: true,
            }   }
        }
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});