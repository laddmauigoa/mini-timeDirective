var app = angular.module('timeApp');

app.directive('showTime', function($interval) {
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}} </div>',
		link: function(scope, ele, attr) {
			$interval(function () {
			var currentTime = new Date();
			scope.time = currentTime.toString()
			

		}, 1000)
		}
	}
})