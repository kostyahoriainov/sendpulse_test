'use strict';

angular
    .module('addUser')
    .component('addUser', {
        templateUrl: './components/add-user/add-user.template.html',
        controller: ['User', '$rootScope', '$translate',
            function AddUserController (User, $rootScope, $translate) {

                const self = this

                self.isAdd = false;

                self.openForm = function() {
                    self.isAdd = true
                }

                self.addUser = function(event) {
                    const { target } = event

                    event.preventDefault();
                    self.errors = self.validate(target)
                    if(Object.keys(self.errors).length === 0) {
                        const user = {
                            [target.name.name]: target.name.value,
                            [target.username.name]: target.username.value,
                            [target.email.name]: target.email.value,
                            [target.phone.name]: target.phone.value,
                            [target.website.name]: target.website.value,
                            [target.company.name]: target.company.value
                        }
                        User.save({user}, function (response) {

                            $rootScope.$broadcast('addUser', {
                                user: response
                            }) 
                            self.isAdd = false
                        })                        
                    }
                }

                self.validate = function(target) {
                    const errors = {}
                    if (!target.name.value) {
                        errors.name = 'Error, please, fill this field'
                    }
                    if (!target.username.value) {
                        errors.username = 'Error, please, fill this field'
                    }
                    if (!target.email.value) {
                        errors.email = 'Error, please, fill this field'
                    }
                    if (!target.phone.value) {
                        errors.phone = 'Error, please, fill this field'
                    }
                    if (!target.company.value) {
                        errors.company = 'Error, please, fill this field'
                    }
                    if (!target.website.value) {
                        errors.website = 'Error, please, fill this field'
                    }
                    return errors
                }

            }
        ]
    })