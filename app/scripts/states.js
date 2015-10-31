'use strict';

angular
    .module('sdwn')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('packets',{
                    url: '/app/packets',
                    templateurl:'views/packets.html'
                },100);

        }
    ])
;
