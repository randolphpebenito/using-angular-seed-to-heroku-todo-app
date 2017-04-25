'use strict';

angular
    .module('todoList')
    .component('todoList', {
        templateUrl: 'todo/todo-list.html',
        controller: function ($scope, Todo) {
            $scope.hello = 'this is a component again!';
			$scope.todos = Todo.query();
        }

    }


);


