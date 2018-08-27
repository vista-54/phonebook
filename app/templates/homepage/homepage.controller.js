;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = ['data', '$localStorage'];

    function HomepageController(data, $localStorage) {
        let vm = this;
        vm.people = typeof $localStorage.contacts !== 'undefined' ? $localStorage.contacts : []
    }
})();