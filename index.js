var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy'],
        datasets: [{
            label: 'Weather',
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
            borderWidth: 1
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



$("#btn").click(function(){
    const weather= $("#wea").val();
    console.log(weather);
    console.log();
    saveLocal(weather);
    myChart.data.datasets[0].data = getData();
    myChart.update();
});
function saveLocal(weather){
    if(localStorage.getItem(weather)==null){
        localStorage.setItem(weather,"1");
    }
    else{
        localStorage.setItem(weather,parseInt(localStorage.getItem(weather))+1);
    }
}
function getData() {
    var data = [localStorage.getItem("sunny"), localStorage.getItem("cloudy"), localStorage.getItem("partlycloudy"), localStorage.getItem("rainy")]
    return data;
}

