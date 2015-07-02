angular.module('poll')
	.service('itemService', ['$http', '$q', function ($http, $q) {
		this.getItems = function () {
			return $http.get ('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/');
		};
		
	}]);