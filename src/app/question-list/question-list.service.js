angular.module('poll')
	.service('itemService', ['$http', '$q', function ($http, $q) {
		this.getItems = function () {
			return $http.get ('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/');
		};
		
		this.getAllItems = function () {
			var deferred = $q.defer();
			$http.get ('http://api.baasic.com/beta/mathos-ng/resources/pollquestion/')
				.success (function (data) {
					
					function calcA (i) {
						"use strict";
					    return function () {
					        data.item[i].totalA = data.item[i].totalA + 1;
					    };	
					};
					
					function calcB (i) {
						"use strict";
					    return function () {
					        data.item[i].totalB = data.item[i].totalB + 1;
					    };	
					};
					
					function calcC (i) {
						"use strict";
					    return function () {
					        data.item[i].totalC = data.item[i].totalC + 1;
					    };	
					};
					
					function calcWinner (i) {
						"use strict";
						return function() {
							var sum = data.item[i].totalA + data.item[i].totalB + data.item[i].totalC;
							if (sum == 0) {
								return '';
							};
							
							if (data.item[i].totalA > data.item[i].totalB && data.item[i].totalA > data.item[i].totalC) {
								return data.item[i].answers[0].answer;
							} else if (data.item[i].totalB > data.item[i].totalA && data.item[i].totalB > data.item[i].totalC) {
								return data.item[i].answers[1].answer;
							} else if (data.item[i].totalC > data.item[i].totalA && data.item[i].totalC > data.item[i].totalB) {
								return data.item[i].answers[2].answer;
							} else {
								return "Answer tie!";	
							};
						};
					}
 					
					for (item in data.item) {
						data.item[item].totalA = 0;
						data.item[item].totalB = 0;
						data.item[item].totalC = 0;
						
						data.item[item].winner = calcWinner(item);
												
						data.item[item].optionA = calcA(item);
						
						data.item[item].optionB = calcB(item);
						
						data.item[item].optionC = calcC(item);
						
						deferred.resolve(data.item);
					}	
				})
				.error (function (data, status) {
					deferred.reject(data);
				})
				
				return deferred.promise;
		};
		
	}]);