'use strict';

angular.module('todoList').factory(
    'Todo', function($resource){
            var url = 'http://intellij-todo-randolph.herokuapp.com/api/todo/'
            return $resource(url, {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true,
                    // transformResponse
                    // interceptor
                },
                get: {
                    method: "GET",
                    // params: {"id": @id},
                    isArray: true,
                    cache: true,
                }
            })
    }
);

