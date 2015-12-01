'use strict';

angular
  .module('sdwn')

  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider

        .otherwise('/app');


      //////////////////////////
      // State Configurations //
      //////////////////////////

      $stateProvider

        //////////
        // Home //
        //////////

        .state('app', {
          url: '/app',
          templateUrl:'views/layout.html',
        }, 100)

        .state('app.network',{
          url:'/network',
          abstract:true,

          views:{
            'tree':{
              templateUrl:'views/network/networks.html',
              controllerAs:'tree',
            },
          },
        },100)

        .state('app.controller',{
          url:'/controller',
          abstract:true,

          views:{
            'tree':{
              templateUrl:'views/controller/controllers.html',
              controllerAs:'tree',
            },
          },
        },100)

        .state('app.network.setting', {
          url: '',
          views:{
            'content@app':{
              templateUrl: 'views/network/setting.html'
            },
          },
        }, 100)

        .state('app.controller.setting', {
          url: '',
          views:{
            'content@app':{
              templateUrl: 'views/controller/setting.html'
            },
          },
        }, 100)

         ;
    }
  ])
;
