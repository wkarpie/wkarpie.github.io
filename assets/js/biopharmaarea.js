
document.addEventListener('DOMContentLoaded', async function () {
    const ctx = document.getElementById('biopharmaarea').getContext('2d');
    const canvas = document.getElementById('biopharmaarea'); // Get the canvas element
            // Data for the area chart
            const data = {
                labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [
                    {
                        label: 'Classical',
                        data: [24, 21, 34, 30, 32, 38, 33, 42, 39, 33, 44],
                        backgroundColor: 'rgba(91,155,162, 0.9)', // Light green fill
                        borderColor: 'rgba(255, 255, 255, .4)', // Green border
                        borderWidth: 1,
                        fill: true
                    },
                    {
                        label: 'Adaptive',
                        data: [62, 59, 40, 40, 42, 28, 46, 33, 22, 31, 24],
                        backgroundColor: 'rgba(240,149,31, 0.9)', // Light purple fill
                        borderColor: 'rgba(255, 255, 255, .3)', // Purple border
                        borderWidth: 1,
                        fill: true
                    },
                    {
                        label: 'Visionary',
                        data: [14, 21, 23, 30, 26, 34, 21, 22, 36, 28, 26],
                        backgroundColor: 'rgba(243,196,83, 0.9)', // Light orange fill
                        borderColor: 'rgba(255, 255, 255, .3)', // Orange border
                        borderWidth: 1,
                        fill: true
                    },
                    {
                        label: 'Shaping',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        backgroundColor: 'rgba(72,165,146, 0.9)', // Light red fill
                        borderColor: 'rgba(255, 255, 255, .3)', // Red border
                        borderWidth: 1,
                        fill: true
                    },
                    {
                        label: 'Renewal',
                        data: [0, 0, 3, 0, 0, 0, 0, 3, 3, 8, 6],
                        backgroundColor: 'rgba(232,108,104, 0.9)', // Light blue fill
                        borderColor: 'rgba(255, 255, 255, .3)', // Blue border
                        borderWidth: 1,
                        fill: true
                    }
                ]
            };

            // Chart options
            const options = {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Strategic Approach Distribution in the Biopharma Industry',
                        font: {
                            size: 20,
                            fontFamily: 'Open Sans', // H2 CSS
                        },
                        color:'#3e3e3e', // set the text color to dark grey 
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 20
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        min: 0,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Percentage (%)'
                        },
                        stacked: true
                    }
                }
            };

            // Create the chart
            new Chart(ctx, {
                type: 'line',  // Use line type for area chart
                data: data,
                options: options
            });
        });