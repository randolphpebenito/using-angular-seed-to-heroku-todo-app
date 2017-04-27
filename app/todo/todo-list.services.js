'use strict';

angular.module('todoList').factory(
    'Todo', function($resource){
            var url = 'http://intellij-todo-randolph.herokuapp.com/api/todo/:id'

           // var url = 'http://127.0.0.1:8000/api/todo/:id'
            return $resource(
                url, 
                null, 
                {
                    'update': { 
                        method:'PUT' 
                    }
                }
            )
    }
);

