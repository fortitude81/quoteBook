var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){  //inject dataService into mainCtrl
	
	$scope.quotes = dataService.getData(); //get quotes array and add it to $scope object using getData method on dataService object

	$scope.addData = function(quote, author) {
  		dataService.addData(quote, author);
	}

	$scope.removeData = function(quote) {
  		dataService.removeData(quote);
	}
});