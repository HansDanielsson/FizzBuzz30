// JavaScript source code
(function () {

  let FizzBuzz = angular.module("FizzBuzz", []);

  FizzBuzz.controller('FizzBuzzController', function ($scope) {
    $scope.FuzzCalc = function () {
      $scope.ResFizz = "FizzBuzz : ";
      let stopp = $scope.istopp;
      let fizz = $scope.fizz;
      let buzz = $scope.buzz;
      if (buzz != 0) {
        for (let i = 1; i <= stopp; i++) {
          if (i % fizz == 0 && i % buzz == 0) {
            $scope.ResFizz = $scope.ResFizz + "Fizz-Buzz";
          }
          else if (i % fizz == 0) {
            $scope.ResFizz = $scope.ResFizz + "Fizz";
          }
          else if (i % buzz == 0) {
            $scope.ResFizz = $scope.ResFizz + "Buzz";
          }
          else {
            $scope.ResFizz = $scope.ResFizz + i.toString();
          }
          if (i != stopp) {
            $scope.ResFizz = $scope.ResFizz + ",";
          }
        }
      }
    }
  });
}());