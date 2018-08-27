;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',
                resolve: {
                    data: function (weather) {
                        return weather.get({
                            q: 'Poltava,UA',
                            appid: '264a4855a3aeeb5196ff38e3d006cbe9',
                            mode: 'json',
                            units: 'metric'
                        })
                            .then(function (res) {
                                return res;
                            })
                    }
                }
            })
            .state('contact-view', {
                url: '/contact-view/:id',
                templateUrl: 'templates/contact-view/contact-view.html',
                controller: 'ContactViewController',
                controllerAs: 'vm',
                resolve: {
                    contact: function ($stateParams, $localStorage) {
                        let people = typeof $localStorage.contacts !== 'undefined' ? $localStorage.contacts : []
                        let contact = {};
                        people.forEach(function (item) {
                            if (item.id == $stateParams.id) {
                                contact = item;
                            }
                        });
                        return contact;
                    }
                }
            })
            .state('add-contact', {
                url: '/add-contact/:id',
                templateUrl: 'templates/add-contact/add-contact.html',
                controller: 'AddContactController',
                controllerAs: 'vm',
                resolve: {
                    contact: function ($stateParams, user) {
                        return user.get($stateParams.id)
                    }
                }
            })


    }


})();

