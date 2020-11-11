$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    dots: true,
    nextArrow :'.next-arrow',
    prevArrow :'.prev-arrow',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
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