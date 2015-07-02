angular.module('poll')
	.service('itemService', ['$http', '$q', function ($http, $q) {
		this.getItems = function () {
			return $http.get ('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/');
		};
		
		this.getAllItems = function () {
			var deferred = $q.defer();
			$http.get ('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/')
				.success (function (data) {
					for (item in data.item) {
						item.totalA = 0;
						item.totalB = 0;
						item.totalC = 0;
						
						item.winner = function() {
							
							var sum = item.totalA + item.totalB + item.totalC;
							if (sum == 0) {
								return '';
							};
							
							if (item.totalA > item.totalB && item.totalA > item.totalC) {
								return item.answers[0].answer;
							} else if (item.totalB > item.totalA && item.totalB > item.totalC) {
								return item.answers[1].answer;
							} else if (item.total > item.totalA && item.totalC > item.totalB) {
								return item.answers[2].answer;
							} else {
								return "Answer tie!";	
							};
						};
						
						item.optionA = function() {
							item.totalA = item.totalA + 1;
						};
						
						item.optionB = function() {
							item.totalB = item.totalB + 1;
						};
						
						item.optionC = function() {
							item.totalC = item.totalC + 1;
						};
						
						deferred.resolve(data.item);
					}	
				})
				.error (function (data, status) {
					deferred.reject(data);
				})
				
				return deferred.promise;
		};
		
	}]);