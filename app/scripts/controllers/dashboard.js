'use strict';

/**
 * @ngdoc function
 * @name hexagonApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboard
 */
angular.module('hexagonApp')
  .controller('DashboardCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pagename = "Dashboard";

    $scope.bilheteriasChart = {};
    $scope.bilheteriasChart.type = "PieChart";
    $scope.bilheteriasChart.options = {
      legend:'none',
      width:'100%',
      height:'100%',
      chartArea: {width:'90%', height:'90%'}
    };
    $scope.bilheteriasChart.data = {"cols": [
      {id: "t", label: "Filme", type: "string"},
      {id: "s", label: "Bilheteria", type: "number"}
      ], "rows": [
        {c: [
        {v: "Star Wars I"},
        {v: 10},
        ]},
        {c: [
        {v: "Star Wars II"},
        {v: 10},
        ]},
        {c: [
        {v: "Star Wars III"},
        {v: 10}
        ]},
        {c: [
        {v: "Star Wars Rogue One"},
        {v: 30},
        ]},
        {c: [
        {v: "Star Wars VII"},
        {v: 40},
        ]}
    ]};

    function getPlanetName (planetUrl) {
      return $http.get(planetUrl).then(response => response.data.name);
    }

    function cmToMeters (height) {
      return height/100;
    }
    
    $http.get("https://swapi.co/api/people/").then(function(response) {
      response.data.results.forEach( (element) => {
        getPlanetName(element.homeworld).then(name => element.homeworld_name = name);
        element.height = cmToMeters(element.height);
        element.films = element.films.length;
      });
      $scope.characters = response.data.results;
    });
  })
  .filter('capitalize', () => {
    return (input) => {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    };
  })
  ;
