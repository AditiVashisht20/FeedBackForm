Chart.defaults.global.legend.display = false;
var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy'],
        datasets: [{
            label: '',
            data: getData(),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            fill : false
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

$("#feedBackForm").submit(function () {
    const weather = $("#wea").val();
    saveLocal(weather);
    myChart.data.datasets[0].data = getData();
    myChart.update();
    $("#chart").slideDown();
    return false;
});

function saveLocal(weather) {
    if (localStorage.getItem(weather) == null) {
        localStorage.setItem(weather, "1");
    }
    else {
        localStorage.setItem(weather, parseInt(localStorage.getItem(weather)) + 1);
    }
}
function getData() {
    var data = [localStorage.getItem("sunny"), localStorage.getItem("cloudy"), localStorage.getItem("partlycloudy"), localStorage.getItem("rainy")]
    return data;
}

$(document).ready(function () {
    // console.log(formatDate(new Date().toDateString()));

    $('#datePicker').val(formatDate(new Date().toDateString()));
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
