/*
 * @require shape-shifter.js
 */
/************************* Router *****************************/
angular.module('yhtml5', [
    'ui.router',
    'controllers',
    'directive'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        var domainUrl = "";
        $urlRouterProvider
        /**.when('/dashboard/*', '/dashboard')**/
            .otherwise("/");
        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "content": {
                        templateUrl: domainUrl + "view/developing/index.html"
                    }
                }
            })
            .state('design', {
                url: "/design",
                views: {
                    "content": {
                        templateUrl: domainUrl + "view/design/index.html"
                    }
                }
            })
    })
