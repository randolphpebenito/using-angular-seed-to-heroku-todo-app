'use strict';

// Declare app level module which depends on views, and components
angular
    .module('todoApp')
    .config(RouteConfig);

    function RouteConfig($routeProvider) {
		$routeProvider
			.when('/', {
				template: "<todo-list></todo-list>",
			})
			.otherwise({
				redirectTo: '/'
			});


    }
