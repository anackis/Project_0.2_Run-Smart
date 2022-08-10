// tiny slider 
var slider = tns({
    container: '.slider-section__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  })

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })


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