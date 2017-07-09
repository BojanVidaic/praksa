(function() {
	"use strict";

	angular
		.module('schu-eng.core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/startseite');

		$stateProvider
			.state('main', {
				abstract: true,
				views: {
					'side-bar': {
						templateUrl: 'app/components/core/side-bar.html',
						controller: 'SideBarController',
						controllerAs: 'sbc'
					},
					'about': {
						templateUrl: 'app/components/core/about.html'
					}
				}
			})
			.state('main.startseite', {
				url: '/startseite',
				views: {
					'content@': {
						templateUrl: 'app/components/core/startseite.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
			})
			.state('main.leistungen', {
				url: '/leistungen',
				views: {
					'content@': {
						templateUrl: 'app/components/core/leistungen.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
            })
			.state('main.philosophie', {
				url: '/philosophie',
				views: {
					'content@': {
						templateUrl: 'app/components/core/philosophie.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
            })
			.state('main.produkte', {
				url: '/produkte',
				views: {
					'content@': {
						templateUrl: 'app/components/core/produkte.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
            })
			.state('main.maschinenpark', {
				url: '/maschinenpark',
				views: {
					'content@': {
						templateUrl: 'app/components/core/maschinenpark.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
            })
            .state('main.qualitätsmanagement', {
				url: '/qualitätsmanagement',
				views: {
					'content@': {
						templateUrl: 'app/components/core/qualitätsmanagement.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
			})
            .state('main.referenzen', {
				url: '/referenzen',
				views: {
					'content@': {
                        resolve: {
                            logos: getLogos
                        },
						templateUrl: 'app/components/core/referenzen.html',
                        controller: 'RefController',
						controllerAs: 'rc'
					}
				}
			})
            .state('main.kontakt', {
				url: '/kontakt',
				views: {
					'content@': {
						templateUrl: 'app/components/core/kontakt.html',
                        controller: 'KontController',
						controllerAs: 'kc'
					}
				}
			})
            .state('main.impressum', {
				url: '/impressum',
				views: {
					'content@': {
						templateUrl: 'app/components/core/impressum.html',
                        controller: 'ScrollController',
						controllerAs: 'sc'
					}
				}
			});
        
        function getLogos() {
            var nizSlika = [];
        
            var adiv = document.createElement('div');
            adiv.className = 'added';

            for (var i = 1; i<= 29; i++) {
                nizSlika.push(i + ".jpg");
            }

            for (var j = 0; j<nizSlika.length;j++) {
                adiv.innerHTML += "<img class='mala' src='./img/ref/" + nizSlika[j] + "'/>";
            }
            
            adiv.innerHTML += "<div class='lastp'><p></p></div>";
            return adiv;
        }
        
	}
})();