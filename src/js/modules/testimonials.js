$(".reviews").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: `<button type="button" class='pull-left'><svg xmlns="http://www.w3.org/2000/svg" width="71" height="69" viewBox="0 0 71 69" fill="none">
<path d="M0.5 30C0.5 13.4315 13.9315 0 30.5 0H65.5C68.2614 0 70.5 2.23858 70.5 5V39C70.5 55.5685 57.0685 69 40.5 69H5.5C2.73858 69 0.5 66.7614 0.5 64V30Z" fill="#2E7D32"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.3609 34.4956L45.7345 19.3338C46.0956 18.9593 46.087 18.341 45.7173 17.9578L43.1469 15.2929C42.7772 14.9097 42.1755 14.901 41.8144 15.2755L24.26 33.7902C24.0709 33.9818 23.985 34.2431 24.0021 34.4956C23.9936 34.7569 24.0795 35.0095 24.26 35.2011L41.8144 53.7245C42.1755 54.099 42.7772 54.0903 43.1469 53.7071L45.7173 51.0422C46.087 50.659 46.0956 50.0407 45.7345 49.6662L31.3609 34.4956Z" fill="white"/>
</svg></button>`,
  nextArrow: `<button type="button" class='pull-right'><svg xmlns="http://www.w3.org/2000/svg" width="70" height="69" viewBox="0 0 70 69" fill="none">
<path d="M0 39C0 55.5685 13.4315 69 30 69L60 69C65.5229 69 70 64.5228 70 59V30C70 13.4315 56.5685 0 40 0H10C4.47715 0 0 4.47715 0 10L0 39Z" fill="#2E7D32"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.1391 34.5044L24.7655 49.6662C24.4044 50.0407 24.413 50.659 24.7827 51.0422L27.3531 53.7071C27.7228 54.0903 28.3245 54.099 28.6856 53.7245L46.24 35.2098C46.4291 35.0182 46.515 34.7569 46.4979 34.5044C46.5064 34.2431 46.4205 33.9905 46.24 33.7989L28.6856 15.2755C28.3245 14.901 27.7228 14.9097 27.3531 15.2929L24.7827 17.9578C24.413 18.341 24.4044 18.9593 24.7655 19.3338L39.1391 34.5044Z" fill="white"/>
</svg></button>`,
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
      breakpoint: 720,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});
