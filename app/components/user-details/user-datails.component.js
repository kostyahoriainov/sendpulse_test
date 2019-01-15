'use strict';

angular
    .module('userDetails')
    .component('userDetails', {
        templateUrl: './components/user-details/user-details.template.html',
        controller: ['$routeParams', 'User',
            function UserDetailsController ($routeParams, User) {
                const self = this

                self.user = User.get({userId: $routeParams.userId}, function(user) {
                    console.log(user)
                })
                self.isEditing = false
                self.editingUser = null

                self.editUser = function () {
                    self.isEditing = true;
                    self.editingUser = angular.copy(self.user)

                }
                
                self.updateUser = function () {
                    self.isEditing = false

                    const { name, username, phone, email, website, company } = self.editingUser

                    User.update({userId: $routeParams.userId}, {name, username, phone, email, website, company}, function(response) {
                        self.user = response
                    }, function(error) {
                        console.log(error)
                    })
                }

            }
        ]
    })