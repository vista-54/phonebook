;(function () {

    'use strict';

    angular.module('service.user', [])
        .service('user', user);


    user.$inject = ['http', 'url', '$localStorage'];

    function user(http, url, $localStorage) {


        return {
            get: get
        };


        function get(id) {
            if (id === '') {
                return false;
            }
            let people = typeof $localStorage.contacts !== 'undefined' ? $localStorage.contacts : []
            let contact = {};
            people.forEach(function (item) {
                if (item.id == id) {
                    contact = item;
                }
            });
            return contact;
        }
    }
})();