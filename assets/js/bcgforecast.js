document.addEventListener('DOMContentLoaded', async function () {
    const ctx = document.getElementById('bcgforecast').getContext('2d');
    const canvas = document.getElementById('bcgforecast'); // Get the canvas element

    // Define the chart data
    const url = 'https://raw.githubusercontent.com/wkarpie/MBUSAspendingAwards/refs/heads/main/bcg_pipeline_data.csv';
    const response = await fetch(url);
    const csvText = await response.text();
    const csvData = csvText.split('\n').map(row => row.split(','));

    console.log('CSV data:', csvData);
    
    // Filter out any rows that may be empty or have no label
    const labels = csvData.map(row => row[0]).filter(label => label !== "").slice(1);
    console.log(labels);
    
    const createDataset = (rowIndex) => {
        const label = csvData[rowIndex]?.[3] || `Label ${rowIndex}`;
        const startDate = new Date(csvData[rowIndex]?.[1] || null);
        const endDate = new Date(csvData[rowIndex]?.[2] || null);

        const data = Array(10).fill(null);
        
        if (!isNaN(startDate) && !isNaN(endDate)) {
            const startIndex = rowIndex - 1;
            data[startIndex] = [startDate, endDate];
        }

        return {
            label: label,
            data: data,
            backgroundColor: 'rgba(20, 123, 88, 0.9)',
            borderRadius: 10,  // Add this line to round the corners
            borderSkipped: false
        };
    };

    const datasets = [];
    for (let i = 1; i < 11; i++) {
        datasets.push(createDataset(i));
    }

    const data = {
        labels: labels,
        datasets: datasets
    };

    // Dynamically set chart height based on the number of bars
    const numberOfRows = labels.length;  // Number of valid rows in CSV data
    const minHeight = 250;  // Minimum height to ensure proper visibility for small datasets
    const chartHeight = Math.max(minHeight, 50 * numberOfRows);  // Ensure the height doesn't go below the minimum

    console.log(labels.length, chartHeight);
    
    // Set the height of the canvas element
    canvas.height = chartHeight; // This will update the canvas height directly

    const options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: { position: false },
            tooltip: {
                enabled: true,
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        const startDate = context.raw[0];
                        const endDate = context.raw[1];
                        const startFormatted = startDate ? startDate.toLocaleDateString() : 'N/A';
                        const endFormatted = endDate ? endDate.toLocaleDateString() : 'N/A';
                        return [
                            `${context.dataset.label}`,
                            `Start Date: ${startFormatted}`,
                            `End Date: ${endFormatted}`
                        ];
                        
                        return [`${context.dataset.label}', '${startFormatted} - ${endFormatted}`];
                    },
                    title: (tooltipItems) => `Contract for ${tooltipItems[0].label}`,
                }
            },
            title: {
                display: true,
                text: 'Prime Contract Pipeline',
                font: {
                    size: 20,
                    fontFamily: 'Open Sans', // inherit the font family from the parent element
                },
                color: '#3e3e3e', // set the text color to black
            },
        },
        scales: {
            y: { stacked: true },
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                    tooltipFormat: 'll',
                    displayFormats: { month: 'MMM yyyy' }
                },
                min: new Date('2024-12-01'),
                max: new Date('2026-01-05'),
                ticks: { barThickness: 20 }
            }
        }
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
