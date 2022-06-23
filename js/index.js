
// scroll-animation

// const pageScrollAnimation = () => {

// 	const elements = document.querySelectorAll('.page-scroll-animation');
// 	for (let i = 0; i < elements.length; i++) { flashIsScrolled(elements[i]); }

// }

// pageScrollAnimation();

// the-end-of-scroll-animation


// head-search

const headSearch = document.querySelector('.head-search');
flashNavbarSearch(headSearch);

// the-end-of-head-search


// page-slider-1

$('.page-slider-1').slick({
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	speed: 300,
	arrows: true,
	responsive: [
	  {
	    breakpoint: 991,
	    settings: {
	      rows: 2,
	      slidesToShow: 2,
	      slidesToScroll: 2,
	    }
	  }
	]  
});

// the-end-of-page-slider-1


// page-slider-2

$('.page-slider-2').slick({
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 300,
	arrows: true,
	autoplay:true,
	autoplaySpeed: 3000,
	pauseOnHover: true
});

// the-end-of-page-slider-2



// page-slider-3

$('.page-slider-3').slick({
	dots: false,
	infinite: false,
	slidesToShow: 6,
	slidesToScroll: 6,
	speed: 700,
	arrows: true,
	responsive: [
	  {
	    breakpoint: 400,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1,
	    }
	  },
	  {
	    breakpoint: 575,
	    settings: {
	      slidesToShow: 2,
	      slidesToScroll: 2,
	    }
	  },
	  {
	    breakpoint: 991,
	    settings: {
	      slidesToShow: 3,
	      slidesToScroll: 3,
	    }
	  }

	]  
});

// the-end-of-page-slider-3


// page-slider-4

$('.page-slider-4').slick({
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 800,
	arrows: true,
	autoplay:true,
	autoplaySpeed: 5000,
	pauseOnHover: true
});

// the-end-of-page-slider-4


