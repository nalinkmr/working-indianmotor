var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/ourconcept', {
    templateUrl : 'pages/ourconcept.html',
    controller  : 'OurConceptController'
  })

  .when('/contactus', {
    templateUrl : 'pages/contactus.html',
    controller  : 'ContactUsController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
  $scope.indexVal = 0;
    $scope.trendingTours = [{
                url: "https://devilonwheels.com/manali-leh-highway-status-2018/",
                text: 'MANALI – LEH – MANALI [13-DAYS]'
            }, {
                url: "https://devilonwheels.com/manali-leh-highway-status-2018/",
                text: 'LEGENDRY RAJASTHAN[14-DAYS]'
            }, {
                url: "https://devilonwheels.com/manali-leh-highway-status-2018/",
                text: 'THUNDER DRAGON – BHUTAN[13-DAYS]'
            }];
            
   setInterval(function(){ 
        $scope.displayFlashUrl();
    }, 1500);
    
   $scope.displayFlashUrl = function(){
        if( $scope.indexVal == 0){
            $scope.obj = $scope.trendingTours[$scope.indexVal];
            $scope.$apply();
            $scope.indexVal = $scope.indexVal + 1;
        }else{
            $scope.obj = $scope.trendingTours[$scope.indexVal];
            $scope.$apply();
            if($scope.indexVal == $scope.trendingTours.length - 1){
                $scope.indexVal = 0;
            }else{
                $scope.indexVal = $scope.indexVal + 1;
            }
        }
   }
});

app.controller('OurConceptController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

app.controller('ContactUsController', function($scope) {
  $scope.message = 'Hello from contactusController';
});
