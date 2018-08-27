;(function () {
    'use strict';

    angular.module('app')
        .controller('AddContactController', AddContactController);


    AddContactController.$inject = ['$localStorage', '$state', 'contact'];

    function AddContactController($localStorage, $state, contact) {
        let vm = this;
        vm.save = save;
        let people = typeof $localStorage.contacts !== 'undefined' ? $localStorage.contacts : []
        vm.user = contact ? contact : {};

        function save(form) {
            if (form.$valid) {
                if (typeof vm.user.id === 'undefined') {
                    people.push(vm.user);
                    vm.user.id = new Date() * 1;
                    $localStorage.contacts = people;
                }
                $state.go('home');
            } else {
                console.log("Form is invalid");
            }
        }


    }
})();