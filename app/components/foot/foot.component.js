'use strict';

angular
    .module('foot')
    .component('foot', {
        templateUrl: './components/foot/foot.template.html',
        controller: ['$translate',
            function Foot($translate) {
                const self = this

                self.changeLanguage = function(langKey) {
                    $translate.use(langKey)

                }
            }
        ]
    })