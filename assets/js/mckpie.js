document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('mckpie').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        // The data for our dataset
        data: {
        labels: ['Prime Awards', 'Subcontracts'],
        datasets: [{
            label: 'Total Awards',
            data: [38417109, 187118401],
            backgroundColor: [
            'rgba(4, 36, 64, 0.9)',
            'rgba(4, 36, 64, 0.7)',
            ],
            borderColor: [
            'rgba(4, 36, 64, 0.9)',
            'rgba(4, 36, 64, 0.7)',
            ],
            borderWidth: 1
        }]
        },
    
        // Configuration options go here
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Awards by Type, Last 3 Years',
                    font: {
                        size: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        // Format the tooltip label to show in millions and percentage
                        label: function(tooltipItem) {
                            const value = tooltipItem.raw;
                            const total = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex).total; // Get the total value of the dataset
                            const percentage = (value / total) * 100; // Calculate percentage

                            return `${tooltipItem.dataset.label}: $${(value / 1000000).toFixed(1)}M (${percentage.toFixed(0)}%)`; // Format value in millions and show percentage
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                }
            }
        }
    });
});