'use strict';

angular
    .module('userList')
    .component('userList', {
        templateUrl: './components/user-list/user-list.template.html',
        controller: ['User', '$rootScope', '$scope',
            function UserListController(User, $rootScope, $scope) {

                const self = this
                
                self.userList = User.query()
                
                $scope.$on('addUser', function(event, args) {
                    const {user, id} = args.user
                    const newUser = {
                        id,
                        ...user
                    }
                    self.userList = {
                        ...self.userList,
                        newUser
                    }
                })

                self.removeUser = function(userId) {
                    User.delete({userId}, function(response) {
                        const newList = self.userList.filter(user => user.id !== userId)
                        self.userList = newList
                    }, function (error) {
                        console.log(error.message)
                    })
                    
                }
            }
        ]
    })