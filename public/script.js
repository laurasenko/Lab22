angular.module("punApp",[])

.controller("punController", function ($scope, $http){
	
	$http.get("/random-pun").then(function(response) {
		$scope.puns=response.data;
		console.log($scope.puns);
	})
	
});

