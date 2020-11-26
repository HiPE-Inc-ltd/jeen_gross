$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    slidestoScroll:1,
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
      },
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });