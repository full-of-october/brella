let toggle = document.querySelector('.header-toggle')
let menuMobile = document.querySelector('.menu-mobile')

toggle.addEventListener('click', function () {
  menuMobile.classList.toggle('open')
})

$(document).ready(function(){

  $('.labels').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});