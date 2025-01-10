document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('mcklast12').getContext('2d');
    const data = {
        labels: ['Department of the Air Force', 'Centers for Medicare and Medicaid Services', 'Department of Energy', 'Internal Revenue Service', 'Department of Housing and Urban Development', 'National Aeronautics and Space Administration'],
        datasets: [
            {
                label: 'McKinsey Prime',
                data: [25704983, 4694679, 3878833, 2351168, 895000, 892446],
                backgroundColor: 'rgba(4, 36, 64, 0.9)',
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
                text: 'McKinsey Awards by Agency, Last 12 Months',
                font: {
                    size: 20
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