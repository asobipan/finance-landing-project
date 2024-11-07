$(".reviews").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 4000,
  arrows: true,
  dots: false,
  rows: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
});
