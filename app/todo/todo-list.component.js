'use strict';

angular
    .module('todoList')
    .component('todoList', {
        templateUrl: 'todo/todo-list.html',
        controller: function ($scope, Todo, $location) {

            //List All Todo
			$scope.todos = Todo.query();

            //Create Todo
            $scope.addTodo = function() {
                console.log('inside addTodo');
                if(!$scope.newTodo || $scope.newTodo.length < 1) return;
                var todo = new Todo({ title: $scope.newTodo, completed: false });
                todo.$save(function(){
                  $scope.todos.unshift(todo);
                  $scope.newTodo = ''; // clear textbox
                });
            }

            //Retrieve Todo
            $scope.viewEditTodo = function(todo_id, index) {
                $scope.todo = Todo.get({ id: todo_id });
                $scope.todoIndex = index;
            }  

            //Update Todo Status
            $scope.updateTodoStatus = function(todo) {
                Todo.update({id: todo.id}, todo, function(){
                    console.log("Success Checkbox Update!");
                });
            }  

            //Update Todo Details
            $scope.updateTodo = function(todo, index) {
                Todo.update({id: todo.id}, todo, function(data){
                    console.log("Success Modal Update!");
                    $scope.todos[index] = angular.copy(data);
                    angular.element('#todo-info').modal('hide');
                });
            }  

            //Delete Todo
            $scope.removeTodo = function(todo_id, data) {
                Todo.remove({id: todo_id}, function(){
                    if (data.isModal) {
                        angular.element('#todo-info').modal('hide');
                    }
                    $scope.todos.splice(data.index, 1);
                });
            }
        }

    }

);


