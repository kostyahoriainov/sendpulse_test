'use strict';

angular
    .module('core.user')
    .factory('User', ['$resource', 
        function($resource) {
            return $resource('https://jsonplaceholder.typicode.com/users/:userId', {}, {
                query: {
                    method: 'GET',
                    params: {userId: ''},
                    isArray: true
                },
                delete: {
                    method: 'DELETE',
                    params: {userId: null}
                },
                update: {
                    method: 'PATCH',
                    params: {userId: ''}
                }
            });
        }
    ]);