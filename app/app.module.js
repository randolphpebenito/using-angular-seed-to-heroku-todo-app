'use strict';

// Declare app level module which depends on views, and components
angular
    .module('todoApp', [
        'angularUtils.directives.dirPagination',
        'ngRoute',
        'ngResource',
		'todoList',
    ]
);

