var Dugong = function($){
    var $window, $body,
    Site = {
        isMobile: false,
        settings: {
            
        },

        init: function () {

            Site.onLoad();

        },
        
        onLoad: function () {
        	$(document).foundation();
        }
    };
    
   
    $window = $(window),
    $body = $("body"),
    Site.init();
    
}(jQuery);