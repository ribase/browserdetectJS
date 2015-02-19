(function( $ ) {
	$.fn.browsedetect = function(options) {
		
		var settings = $.extend({
		    // These are the defaults.
		    opera: false,
		    firefox: true,
		    safari: false,
		    chrome: false,
		    ie9: true,
		    ie10: false,
		    ie11: false
		 }, options );
		
		
		
		
		var textEN = "We recognized that you visit our website with a non-supported Browser. To experience the website in its full extent, <a href='http://browsehappy.com'>please upgrade to a newer browser</a>.";
		var textDE = "Wir haben festgestellt, dass Sie uns mit einem nicht unterstützen Browser besuchen. Um die Website in vollem Umfang darstellen zu lassen, <a href='http://browsehappy.com'>verwenden Sie bitte einen anderen Browser</a>.";
		var textFR = "Nous avons remarqué que vous visitiez notre site Web avec un navigateur non pris en charge. Pour découvrir le site dans toute son étendue, <a href='http://browsehappy.com'>veuillez s'il vous plaît passer à un navigateur plus récent</a>.";
		
		var browser = {
			isIe: function () {
			    return navigator.appVersion.indexOf("MSIE") != -1;
			},
			navigator: navigator.appVersion,
			getVersion: function() {
			    var version = 999; // we assume a sane browser
			    if (navigator.appVersion.indexOf("MSIE") != -1)
				// bah, IE again, lets downgrade version number
				version = parseFloat(navigator.appVersion.split("MSIE")[1]);
			    return version;
			}
		};
		
		var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
		var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;	 
		var isChrome = !!window.chrome && !isOpera;
		var isIE9orLower = browser.isIe() && browser.getVersion() <= 9;
		var isIE10 = browser.isIe() && browser.getVersion() == 10;
		var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
		
		
		//create the banner
		$.createBanner = function(){
			if($('html').attr('lang') === 'de_DE'){
				$('body').append('<div class="broserdetect">'+textDE+'</div>');
			}	
			else if($('html').attr('lang') === 'fr_FR'){
				$('body').append('<div class="broserdetect">'+textFR+'</div>');
			}
			else if($('html').attr('lang') === 'en_US'){
				$('body').append('<div class="broserdetect">'+textEN+'</div>');
			}else {
				$('body').append('<div class="broserdetect">'+textDE+'</div>');
			}	
		};
		
		if(settings.opera && isOpera || settings.firefox && isFirefox || settings.safari && isSafari || settings.chrome && isChrome || settings.ie9 && isIE9orLower || settings.ie10 && isIE10 || settings.ie11 && isIE11) {
			$.createBanner();
		}else{
		
		} 
		
		$('.broserdetect').addClass('active');
		
	};
}( jQuery ));

$( document ).ready(function() {
	$("body").browsedetect({
	    // These are the defaults.
	    opera: false,
	    firefox: true,
	    safari: false,
	    chrome: true,
	    ie9: true,
	    ie10: false,
	    ie11: false
	 });	
		
});