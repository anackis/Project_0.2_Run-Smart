$(document).ready(function() {

	// tiny slider 
	var slider = tns({
		container: '.slider-section__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false
	});


	// tiny slider adaptive 
	// var slider = tns({
	// container: '.slider-section__inner',
	// items: 1,
	// responsive: {
	// 	992: {
	// 	fixedWidth: 100px
		
	// 	},
	// 	700: {
	// 	},
	// 	900: {
	// 	}
	// }
	// });

   // this script to make element as button for slider 
  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  });

  // this script to make element as button for slider 
  document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  // skript for tabs 
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
	  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
	  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  
  // Catalog LEARN MORE SCRIPT 
  // script that activate class=active 
	//   not optimizated 
	//   $('.catalog-item__link').each(function(i) {
	// 	  $(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	  })
	//   });
	// Catalog back link SCRIPT 
	// script that activate class=active 
	//   not optimizated 
	//   $('.catalog-item__back').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 	  e.preventDefault();
	// 	  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 	})
	// });


  	 // Catalog LEARN MORE SCRIPT 
  	// script that activate class=active 
	//   optimizated !
	function activate(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			})
		});
	};

	activate('.catalog-item__link');
	activate('.catalog-item__back');



	// when you click on button appiers modal window 
	$('[data-modal="consultation"]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	

	// modal close button 
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});


	// button buy in catalog 
	// we do not need it because we put it next script below 
	// $('.button_catalog').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		$('.overlay, #order').fadeIn('slow');
	// 	})
	// });



	// script that take name of product from catalog and put it in modal window 
	// as well we put part of top script here to activate  buy button 
	$('.button_catalog').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
	


	$('form').submit(function(e) {
		e.preventDefault();

		// if (!$(this).valid()) {
		// 	return;
		// }

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn();

			$('form').trigger('reset');
		});
		return false;
	});


	// Script for hamburger 
	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu__item'),
		hamburger = document.querySelector('.hamburger');
	
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		});
	
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('menu_active');
			})
		})
	});



	// Skript for page up icon fadein and fade out
	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});


	// smooth scroll alternative 
	// $("a[href^='#']").click(function() {
	// 	const _href = $(this).attr("href");
	// 	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	// 	return false;
	// });

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();
	
		  // Store hash
		  var hash = this.hash;
	
		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });



});






