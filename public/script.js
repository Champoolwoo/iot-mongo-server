angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var vm = this

    getIOT()
    $interval(function () {
      getIOT()
    }, 5000)

    vm.submit = function (input) {
      saveIOT(input)
    }

    vm.toThaiDateTime = function (date) {
      return moment(date).fromNow()
    }

    function getIOT () {
      $http.get('/api/iot')
        .then(function success (response) {
          vm.IOT = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveIOT (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getIOT()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
    ////////////////////////////////////
   
      $http.get('/api/iot')
      .then(function success (response) {

        var data = {
          labels: [],
          datasets: [{
              label: "temperature",
              fillColor: "rgba(255,0,0,0.2)",
              strokeColor: "rgba(255,0,0,1)",
              pointColor: "rgba(255,0,0,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            },
            {
              label: "relative_humidity",
              fillColor: "rgba(69,187,91,0.2)",
              strokeColor: "rgba(69,187,91,1)",
              pointColor: "rgba(69,187,91,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: []
            }]
          };

          var ctx = document.getElementById("myChart").getContext("2d")
          var myLineChart = new Chart(ctx).Line(data);
         
          for(var i =0;i<response.data.length;i++){

            if (response.data[i].iot_id==7){
               myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,vm.toThaiDateTime(response.data[i].timestamp));
            }

        }
        
      },function error (response) {
        alert(response.data.message)
      }) 
    
    ////////////////////////////////////

  })
