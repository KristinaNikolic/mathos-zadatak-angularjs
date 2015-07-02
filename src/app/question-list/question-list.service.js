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
						data.item[item].totalA = 0;
						data.item[item].totalB = 0;
						data.item[item].totalC = 0;
						
						data.item[item].winner = function() {
							
							var sum = data.item[item].totalA + data.item[item].totalB + data.item[item].totalC;
							if (sum == 0) {
								return '';
							};
							
							if (data.item[item].totalA > data.item[item].totalB && data.item[item].totalA > data.item[item].totalC) {
								return data.item[item].answers[0].answer;
							} else if (data.item[item].totalB > data.item[item].totalA && data.item[item].totalB > data.item[item].totalC) {
								return data.item[item].answers[1].answer;
							} else if (data.item[item].totalC > data.item[item].totalA && data.item[item].totalC > data.item[item].totalB) {
								return data.item[item].answers[2].answer;
							} else {
								return "Answer tie!";	
							};
						};
						
						data.item[item].optionA = function() {
							data.item[item].totalA = data.item[item].totalA + 1;
						};
						
						data.item[item].optionB = function() {
							data.item[item].totalB = data.item[item].totalB + 1;
						};
						
						data.item[item].optionC = function() {
							data.item[item].totalC = data.item[item].totalC + 1;
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