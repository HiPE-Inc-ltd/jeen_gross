$('.center').slick({
    // centerMode: true,
    // centerPadding: '80px',
    lazyLoad: 'ondemand',
    dots: true,
    nextArrow :'.next-arrow',
    prevArrow :'.prev-arrow',
    slidesToShow: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });