// hero-slider-main start
0<jQuery(".hero-slider-main").length&&jQuery(".hero-slider-main").each(function(){jQuery(this).bxSlider({mode:jQuery(this).attr("data-mode"),auto:"true"===jQuery(this).attr("data-autoplay"),speed:jQuery(this).attr("data-speed"),infiniteLoop:"true"===jQuery(this).attr("data-infiniteloop"),pager:"true"===jQuery(this).attr("data-pager"),controls:"true"===jQuery(this).attr("data-controls"),captions:!0,adaptiveHeight:"true"===jQuery(this).attr("data-adaptiveheight"),stopAutoOnClick:!0,autoHover:!0})});