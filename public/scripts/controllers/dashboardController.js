define(['./_module'], function(module){
    module.controller('DashboardCtrl',['$scope', 'Dashboard', function($scope, Dashboard){
        var model = new Dashboard();
        $scope.hello = model.hello();
    }]);
});