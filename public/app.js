angular.module('app', [])
  .controller('AppController', function ($http, $interval) {
    var vm = this

    getRegister()
    $interval(function () {
      getRegister()
    }, 5000)

    vm.submit = function (input) {
      saveRegister(input)
    }

    // vm.toThaiDateTime = function (date) {
    //   return moment(date).fromNow()
    // }

    function getRegister () {
      $http.get('/api/register')
        .then(function success (response) {
          vm.register = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveRegister (data) {
      $http.post('/api/register', data)
        .then(function success (response) {
          console.log(response)
          getRegister()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
   

  })