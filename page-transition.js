(function($) {

	if (typeof window.PageTransitions == 'undefined') window.PageTransitions = {};

	PageTransitions = {

        settings: {
            className: 'transition',
            speed: 1000,
        },

		init: function(className) {

            this.settings.className = (className) ? className : 'transition';

    		// Setup Links Events
            this.events();

            // Remove Starting Class
            this.onload();


		},

        onload:function(){

            $('body').removeClass(PageTransitions.settings.className+'-enter');
            $('body').removeClass(PageTransitions.settings.className+'-leave');

        },

        events:function(){

            // Links
            $('a').not('a[href*="#"]').not('a[href*="mailto:"]').not('a[target="_blank"]').on('click',function(e){

                // Stop The Link
                e.preventDefault();

                // Save The Instance
                let $this = $(this);

                // Transitions
                PageTransitions.transition($this.attr('href'));

            });

            // No Caching On Back Button
            $(window).bind("pageshow", function(event) {

                if (event.originalEvent.persisted) window.location.reload()

            });

        },

        transition: function(url){

            // Add The Class
            $('body').addClass(PageTransitions.settings.className+'-leave');

            // Resume The Link
            setTimeout(function(){ window.location.href = url; },PageTransitions.settings.speed);

        }

	};

	module.exports = PageTransitions;

})(jQuery);


jQuery(document).ready(function($) {


	PageTransitions.init('transition');

});
