(function() {

	"use strict";

	AOS.init({
		ease: 'slide',
		once: true
	});

	var slider = function(){
		
		var carouselSlider = document.querySelectorAll('.carousel-testimony');
		if ( carouselSlider.length > 0 ) {

			var testimonySlider = tns({
				container: '.carousel-testimony',
				items: 1,
				mode: 'carousel',
				autoplay: true,
			  animateIn: 'tns-fadeIn',
		    animateOut: 'tns-fadeOut',
				speed: 700,
				nav: true,
				gutter: 20,
				controls: false,
				autoplayButtonOutput: false,
				responsive:{
					0:{
						items: 1,
						gutter: 0
					},
					600:{
						items: 2,
						gutter: 20
					},
					1000:{
						items: 3,
						gutter: 20
					}
				}
			});

		}

	}
	slider();
	
	(function() {
    "use strict"; // Corrected typo here

    // Animation settings
    const animationDuration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);

    const easeOutQuad = t => t * (2 - t);

    const numberWithCommas = n => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const animateCountUp = el => {
        console.log("Starting animation for:", el); // Debug log
        let frame = 0;
        const countTo = parseInt(el.innerHTML, 10);
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(countTo * progress);

            if (parseInt(el.innerHTML, 10) !== currentCount) {
                el.innerHTML = numberWithCommas(currentCount);
            }

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    };

    // Run the animation on all elements with a class of ‘countup’
    const runAnimations = () => {
        const countupEls = document.querySelectorAll('.countup');
        if (countupEls.length === 0) {
            console.log("No elements found with class 'countup'");
        }
        countupEls.forEach(animateCountUp);
    };

    // Ensure the DOM is loaded before running animations
    document.addEventListener('DOMContentLoaded', runAnimations);
})();





		// In Viewed
		var elements;
		var windowHeight;

		function init() {
			elements = document.querySelectorAll('.section-counter');
			windowHeight = window.innerHeight;
		}

		function checkPosition() {
			var i;
			for (i = 0; i < elements.length; i++) {
				var element = elements[i];
				var positionFromTop = elements[i].getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= 0) {
			if( !element.classList.contains('viewed') ) {
			element.classList.add('viewed');
			runAnimations();
			} else {
			if ( element.classList.contains('viewed') ) {

			}
		}

		}
		}
		}

		window.addEventListener('scroll', checkPosition);
		window.addEventListener('resize', init);

		init();
		checkPosition();


	//GLIGHTBOX
	const lightbox = GLightbox({
	  touchNavigation: true,
	  loop: true,
	  autoplayVideos: true
	});

	//MENU SCROLLING FIXED TOP
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	    // document.getElementById("navbar").style.background = "black";

	    var element = document.getElementById("navbar");
   		element.classList.add("scroll");
	  } else {
	  	var element = document.getElementById("navbar");
   		element.classList.remove("scroll");
	    // document.getElementById("navbar").style.background = "transparent";
	  }
	}


	//TARGETED LINK
	window.slide = new SlideNav({
		activeClass: "activeme",
		toggleButtonSelector: false,
		toggleBoxSelector: false,
		hideAfterSelect: true,
		speed: 70,
		changeHash: false,
		navBoxToggleClass: false
  });



})()

