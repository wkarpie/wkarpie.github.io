document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('fedcontractschart').getContext('2d');

    const data = {
        labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        datasets: [
            {
                label: 'McKinsey Prime',
                data: [24915831.09, 43523506.69, 69426690.32000001, 49472844.06, 40095671.93, 25524943.740000002, 61486301.32, 40531262.91, 49066210.19, 98225430.78999999, 172418455.89, 35071495.24, 118656189.99000001, 85493842.97999999, 41542438.89, 64654657.33, 34538275.5, 3878833.45],
                backgroundColor: 'rgba(4, 36, 64, 0.9)',
                stack: 'Stack 1'
            },
            {
                label: 'McKinsey Sub',
                data: [NaN, NaN, NaN, NaN, NaN, 8548414.9, 1847630.4, 31373326.28, 23618083.939999998, 19099977.69, 21421107.84, 21542818.57, 9885868.59, 4986958.0, 14633086.8, 42117563.14, 27108363.28, 18591477.8],
                backgroundColor: 'rgba(4, 36, 64, 0.7)',
                stack: 'Stack 1'
            },
            {
                label: 'BCG Prime',
                data: [NaN, 4490614.93, 1846558.23, 4875113.07, 1210767.88, 3511833.7, 1866797.73, 7457755.17, 69913597.32, 35692346.88, 158867852.51, 168073307.48, 295379991.33, 145233666.4, 403936395.36, 293390557.53999996, 192350058.76999998, NaN],
                backgroundColor: 'rgba(20, 123, 88, 0.9)',
                stack: 'Stack 2'
            },
            {
                label: 'BCG Sub',
                data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 7378133.68, 249458.0, 74985.0, NaN, 25259601.7, 23292530.94, 158192532.91, 156058133.36, 75023957.96],
                backgroundColor: 'rgba(20, 123, 88, 0.7)',
                stack: 'Stack 2'
            }
        ]
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
                    size: 20
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
            }   }
        }
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});