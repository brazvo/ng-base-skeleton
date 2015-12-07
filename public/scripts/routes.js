
define(['app'], function (app) {

    // app is the angular application object
    return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider.state(
            'dashboard',
            {
                url: '/dashboard',
                views: {
                    //title: {
                    //    templateUrl: 'modules/tournaments/angular/views/competitions/title.html'
                    //},
                    //navigation: {
                    //    templateUrl: 'modules/tournaments/angular/views/competitions/nav.html'
                    //},
                    content: {
                        templateUrl: 'views/dashboard/index.html',
                        controller: 'DashboardCtrl'
                    }
                },
                //resolve: {
                //    competitions: ['Rest', function(Rest){
                //        return Rest.resource('rest/tournaments/competitions').query();
                //    }]
                //}
            }
        );

        //$stateProvider.state(
        //    'competitions',
        //    {
        //        url: '/competitions',
        //        views: {
        //            title: {
        //                templateUrl: 'modules/tournaments/angular/views/competitions/title.html'
        //            },
        //            navigation: {
        //                templateUrl: 'modules/tournaments/angular/views/competitions/nav.html'
        //            },
        //            content: {
        //                templateUrl: 'modules/tournaments/angular/views/competitions/list.html',
        //                controller: 'CompetitionsCtrl'
        //            }
        //        },
        //        resolve: {
        //            competitions: ['Rest', function(Rest){
        //                return Rest.resource('rest/tournaments/competitions').query();
        //            }]
        //        }
        //    }
        //);
    }]);
});