// tiny slider 
var slider = tns({
    container: '.slider-section__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  
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

// tiny slider adaptive 
//   var slider = tns({
//     container: '.my-slider',
//     items: 1,
//     responsive: {
//       640: {
//         edgePadding: 20,
//         gutter: 20,
//         items: 2
//       },
//       700: {
//         gutter: 30
//       },
//       900: {
//         items: 3
//       }
//     }
//   });