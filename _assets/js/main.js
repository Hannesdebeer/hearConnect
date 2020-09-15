function creative(){

  document.getElementById("clientorcreative").classList.add("hidden");
  document.getElementById("signup-container-creative").classList.remove("hidden");

}

function client(){
  document.getElementById("clientorcreative").classList.add("hidden");
  document.getElementById("signup-container-business").classList.remove("hidden");
}


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
     type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Uniswop", "Pool 1", "Pool 2", "Pool 3", "Pool 4", "Exhange Listing Reserve"],
        datasets: [{
            label: "Cryptos",
            backgroundColor: ['rgb(255, 99, 132)',
            'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)'],
            borderColor: 'rgb(255, 99, 132,0.0)',
            data: [15000, 5000, 5000, 5000, 7500, 2500],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'right',
         display: true,
         labels: {
             fontColor: '#fff',
         },

     }
    }
});


var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
     type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Uniswop", "Pool 1", "Pool 2", "Pool 3", "Pool 4", "Exhange Listing Reserve"],
        datasets: [{
            label: "Cryptos",
            backgroundColor: ['rgb(255, 99, 132)',
            'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)'],
            borderColor: 'rgb(255, 99, 132,0.0)',
            data: [15000, 5000, 5000, 5000, 7500, 2500],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'right',
         display: true,
         labels: {
             fontColor: '#fff',
         },

     }
    }
});
