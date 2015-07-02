var poll = angular.module ('poll', ['ngRoute'])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'app/question/question.html',
					controller: 'ListController'
				})
				.when('/first', {
					templateUrl: 'app/question/question-one.html',
					controller: 'FirstController'
				})
				.when('/second', {
					templateUrl: 'app/question/question-two.html',
					controller: 'SecondController'
				})
				.when('/all', {
					templateUrl: 'app/question/all-questions.html',
					controller: 'AllController'
				})
				.otherwise ({
					redirectTo: '/'
				});
});