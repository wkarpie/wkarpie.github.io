document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('mckdonut').getContext('2d');
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut', // Corrected to 'doughnut'
        data: {
            labels: ['Department of the Air Force', 'Centers for Medicare and Medicaid Services', 'Department of Energy', 'Internal Revenue Service', 'Department of Housing and Urban Development', 'National Aeronautics and Space Administration'],
            datasets: [{
                label: 'McKinsey Awards by Subagencies',
                data: [25704983, 4694679, 3878833, 2351168, 895000, 892446],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
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
            responsive: true,
            plugins: {
                legend: {
                    position: 'chartArea',
                },
                title: {
                    display: true,
                    text: 'McKinsey Awards by Agency, Last 12 Months',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
});