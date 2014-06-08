'use strict';

/**
 * @ngdoc function
 * @name foolingAroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foolingAroundApp
 */
angular.module('foolingAroundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
