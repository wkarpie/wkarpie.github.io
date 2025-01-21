document.addEventListener('DOMContentLoaded', async function () {
    const ctx = document.getElementById('fedcontractschart').getContext('2d');

    // Load the CSV file from GitHub
    const url = 'https://raw.githubusercontent.com/wkarpie/MBUSAspendingAwards/main/data.csv';
    const response = await fetch(url);
    const csvText = await response.text();
    const csvData = csvText.split('\n').map(row => row.split(','));

    console.log('CSV data:', csvData);

    // Parse the CSV data into the format required by Chart.js
    const labels = csvData.map(row => row[0]).slice(1); // Get the years from the first column
    const datasets = [
        {
            label: 'McKinsey Prime Awards',
            data: csvData.map(row => row[1]).slice(1).map(value => value === ''? NaN : Number(value)),
            backgroundColor: 'rgba(4, 36, 64, 0.9)',
            stack: 'Stack 1'
        },
        {
            label: 'McKinsey Subcontracts',
            data: csvData.map(row => row[2]).slice(1).map(value => value === ''? NaN : Number(value)),
            backgroundColor: 'rgba(4, 36, 64, 0.7)',
            stack: 'Stack 1'
        },
        {
            label: 'BCG Prime Awards',
            data: csvData.map(row => row[3]).slice(1).map(value => value === ''? NaN : Number(value)),
            backgroundColor: 'rgba(20, 123, 88, 0.9)',
            stack: 'Stack 2'
        },
        {
            label: 'BCG Subcontracts',
            data: csvData.map(row => row[4]).slice(1).map(value => value === ''? NaN : Number(value)),
            backgroundColor: 'rgba(20, 123, 88, 0.7)',
            stack: 'Stack 2'
        }
    ];

    // Remove the last element if it's empty
    if (labels[labels.length - 1] === '') {
        labels.pop();
        datasets[0].data.pop();
        datasets[1].data.pop();
        datasets[2].data.pop();
        datasets[3].data.pop();
    }

    console.log('Labels:', labels);
    console.log('Datasets:', datasets);

    const data = {
        labels: labels,
        datasets: datasets
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Comparison of McKinsey and BCG\'s Federal Contract Awards',
                font: {
                    size: 20,
                    fontFamily: 'Open Sans', // inherit the font family from the parent element
                },
                color: '#3e3e3e', // set the text color to black
            },
            tooltip: {
                callbacks: {
                    // Format the tooltip label to show in millions
                    label: function(tooltipItem) {
                        let value = tooltipItem.raw;
                        return tooltipItem.dataset.label + ': $' + (value / 1000000).toFixed(1) + 'M';
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value / 1000000 + 'M';
                    }
                }
            }
        }
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    console.log('Chart created');
});