document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('bcgdonut').getContext('2d');
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut', // Corrected to 'doughnut'
        data: {
            labels: ['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5', 'Part 6'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100, 80, 40, 120],
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
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Doughnut Chart Example',
                    font: {
                        size: 20
                    }
                }
            }
        }
    });
});