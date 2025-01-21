document.addEventListener('DOMContentLoaded', async function () {
    const ctx = document.getElementById('mcklast12').getContext('2d');

    // Load the CSV file from GitHub
    const url = 'https://raw.githubusercontent.com/wkarpie/MBUSAspendingAwards/refs/heads/main/last12data.csv';
    const response = await fetch(url);
    const csvText = await response.text();
    const csvData = csvText.split('\n').map(row => row.split(','));

    // Parse the CSV data into the format required by Chart.js
    const labels = [];
    const data = [];
    const backgroundColors = [];

    csvData.slice(1).forEach(row => {
        const firm = row[0];
        const agency = row[1];
        const amount = Number(row[2]);

        if (!labels.includes(agency)) {
            labels.push(agency);
            data.push(0);
            if (firm === 'BCG Prime') {
                backgroundColors.push('rgba(20, 123, 88, 0.9)');
            } else if (firm === 'McKinsey Prime') {
                backgroundColors.push('rgba(4, 36, 64, 0.9)');
            }
        }

        const index = labels.indexOf(agency);
        data[index] += amount;
    });

    // Remove the last element if it's empty
    while (data[data.length - 1] === 0 && data.length > 0) {
        data.pop();
        labels.pop();
        backgroundColors.pop();
    }

    const dataset = {
        label: 'Prime Awards',
        data: data,
        backgroundColor: backgroundColors,
    };

    const chartData = {
        labels: labels,
        datasets: [dataset]
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
                text: 'Awards by Agency, Last 12 Months',
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
        data: chartData,
        options: options
    });
});