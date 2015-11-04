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
  })
