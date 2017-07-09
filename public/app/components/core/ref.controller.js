(function() {
	"use strict";
	
	angular
		.module('schu-eng.core')
		.controller('RefController', RefController);

    function RefController(logos) {
		var rc = this;
        
//        rc.nizSlika = [];
//        
//        var adiv = document.createElement('div');
//        adiv.className = 'added';
//        
//        for (var i = 1; i<= 29; i++) {
//            rc.nizSlika.push(i + ".jpg");
//        }
//        
//        for (var j = 0; j<rc.nizSlika.length;j++) {
//            adiv.innerHTML += "<img class='mala' src=./img/ref/" + rc.nizSlika[j] + "/>";
//        }
        
//        core.route.js -> resolve -> logos: getLogos -> poziva funkciju getLogos iz ovog route-a -> 
//        u kontroleru u dependencies ide logos i dalje se u kontroleru koristi logos kao return te funckije
        document.getElementsByClassName('content')[0].appendChild(logos);
	
//        dodavanje skrol kontrolera unutra jer ne moze na routu 2 kontrolera
        var foot = document.createElement('div');
        foot.className = 'ffooter';
        document.getElementsByClassName('content')[0].appendChild(foot);
        
        window.addEventListener('scroll', function() {
            var top = this.scrollY, left = this.scrollX;
            if (top > 200 && (!document.getElementById('backtotop'))) {
            //kreiraj back to top
                var backToTop = document.createElement('div');
                backToTop.id = 'backtotop';
                backToTop.innerHTML = '<p>Top</p>';
                backToTop.style.left = window.innerWidth - 0.2 * window.innerWidth;
                document.getElementsByClassName('content')[0].parentNode.insertBefore(backToTop, document.getElementsByClassName('ffooter')[0].nextSibling);
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