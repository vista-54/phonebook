;(function () {
    'use strict';

    angular.module('app')
        .controller('ContactViewController', ContactViewController);


    ContactViewController.$inject = ['$stateParams', '$localStorage', 'contact'];

    function ContactViewController($stateParams, $localStorage, contact) {
        let vm = this;
        vm.contact = contact;
    }
})();