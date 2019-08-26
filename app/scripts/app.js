'use strict';

/**
 * @ngdoc overview
 * @name hexagonApp
 * @description
 * # hexagonApp
 *
 * Main module of the application.
 */
angular
  .module('hexagonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'googlechart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'main'
      })
      .when('/personagens', {
        templateUrl: 'views/personagens.html',
        controller: 'PersonagensCtrl',
        controllerAs: 'personagens'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
