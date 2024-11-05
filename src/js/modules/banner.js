$(document).ready(function () {
  $(".banner").slick({
    infinite: true,
    speed: 500,
    cssEase: "linear",
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      return `<a href="#"><strong>${
        i === 0 ? "First" : i === 1 ? "Second" : "Third"
      } Slide</strong><br>Interdum et malesuada ac ante…</a>

      `;
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          fade: true,
          dots: true,
          customPaging: function (slider, i) {
            return `<button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1">${i}</button>`;
          },
        },
      },
    ],
  });
});
