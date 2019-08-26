'use strict';

/**
 * @ngdoc function
 * @name hexagonApp.controller:PersonagensCtrl
 * @description
 * # PersonagensCtrl
 * Controller of the Personagens page
 */
angular.module('hexagonApp')
  .controller('PersonagensCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pagename = "Personagens";
  })
  ;
