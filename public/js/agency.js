{/*(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
	
	


})(jQuery); // End of use strict*/}

$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".navbar").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
    }
  });
});


/*$(document).ready(function()
{
	"use strict";

	

	// 1. Vars and Inits



	var searchActive = false;
	var menuActive = false;
	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMainSlider();
	initDoubleArrow();
	initSearchForm();
	initHamburger();
	initVSlider();
	initServicesSlider();
	initParallax();
	initScrolling();

	
	
	// 2. Set Header

	

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}



	// 4. Init Main Slider



	function initMainSlider()
	{
		if($('.hero_slider').length)
		{
			var heroSlider = $('.hero_slider');
			heroSlider.owlCarousel(
			{
				items: 1,
				loop: true,
				autoplay:false,
				animateOut: 'slideOutDown',
				animateIn: 'flipInX',
				dots:false,
				nav:false,
				autoplayTimeout:5000,
				autoplaySpeed:800,
				smartSpeed:800
			});

			if($('.hero_slider_prev').length)
			{
				var prev = $('.hero_slider_prev');

				prev.on('click', function()
				{
					heroSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.hero_slider_next').length)
			{
				var prev = $('.hero_slider_next');

				prev.on('click', function()
				{
					heroSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	function initDoubleArrow()
	{
		if($('.double_arrow').length)
		{
			$('.double_arrow').on('click', function()
			{

			});
		}
	}

	function initSearchForm()
	{
		if($('.search_form').length)
		{
			var searchForm = $('.search_form');
			var searchInput = $('.search_input');
			var searchButton = $('.search_button');

			searchButton.on('click', function(event)
			{
				event.stopPropagation();

				if(!searchActive)
				{
					searchForm.addClass('active');
					searchActive = true;
					searchInput.focus();

					$(document).one('click', function closeForm(e)
					{
						if($(e.target).hasClass('search_input'))
						{
							$(document).one('click', closeForm);
						}
						else
						{
							searchForm.removeClass('active');
							searchActive = false;
						}
					});
				}
				else
				{
					searchForm.removeClass('active');
					searchActive = false;
				}
			});	
		}
	}


	// 7. Init Hamburger


	function initHamburger()
	{
		if($('.hamburger_container').length)
		{
			var hamb = $('.hamburger_container');

			hamb.on('click', function(event)
			{
				event.stopPropagation();

				if(!menuActive)
				{
					openMenu();
					
					$(document).one('click', function cls(e)
					{
						if($(e.target).hasClass('menu_mm'))
						{
							$(document).one('click', cls);
						}
						else
						{
							closeMenu();
						}
					});
				}
				else
				{
					$('.menu_container').removeClass('active');
					menuActive = false;
				}
			});
		}
	}

	function openMenu()
	{
		$('.menu_container').addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		$('.menu_container').removeClass('active');
		menuActive = false;
	}

	
});*/