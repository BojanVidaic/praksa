(function() {
	"use strict";
	
	angular
		.module('schu-eng.core')
		.controller('HeaderController', HeaderController);

//	HeaderController.$inject = ['$translate', 'tmhDynamicLocale', 'crTranslations'];
//	function HeaderController($translate, tmhDynamicLocale, crTranslations) {
    function HeaderController() {
		var hc = this;
        var foot = document.createElement('div');
        foot.className = 'footer';
        document.getElementsByClassName('content')[0].appendChild(foot);
        
        window.addEventListener('scroll', function() {
            var top = this.scrollY, left = this.scrollX;
            if (top > 200 && (!document.getElementById('backtotop'))) {
            //kreiraj back to top
                var backToTop = document.createElement('div');
                backToTop.id = 'backtotop';
                backToTop.innerHTML = '<p>Top</p>';
                backToTop.style.left = window.innerWidth - 0.2 * window.innerWidth;
                document.getElementsByClassName('content')[0].parentNode.insertBefore(backToTop, document.getElementsByClassName('footer')[0].nextSibling);
                //dodaj mu listener koji na klik brise div
                document.getElementById('backtotop').addEventListener('click', function() { 
                    window.scrollTo(window.scrollX,0); 
                    document.getElementById('backtotop').parentNode.removeChild(document.getElementById('backtotop')); 
                });
            }  
            if (top < 200 && (document.getElementById('backtotop'))) {
                document.getElementById('backtotop').parentNode.removeChild(document.getElementById('backtotop')); 
            }
        });

	}
})();