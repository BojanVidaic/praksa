(function() {
	"use strict";
	
	angular
		.module('schu-eng.core')
		.controller('KontController', KontController);

    function KontController($scope, $http, $location) {
		var kc = this;
        
        $scope.sub = function() {
            $http.post('/view1',$scope.formData).
            success(function(data) {
                document.forms[0].classList.add('sent');
                console.log("posted successfully");
                $location.url('/index');
            }).error(function(data) {
                console.error("error in posting");
            })
        }
	
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