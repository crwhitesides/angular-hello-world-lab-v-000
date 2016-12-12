function MainController($scope) {
  $scope.contact = {
    name: 'Christian Whitesides',
    phone: '01234567891',
    email: 'christian@test.com'
  }
}


angular
  .module('app')
  .controller('MainController', MainController)
