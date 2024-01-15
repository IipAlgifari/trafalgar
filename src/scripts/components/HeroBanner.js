/* ------------------------------------------------------------------------------
@name: Hero banner
@description: Hero banner
--------------------------------------------------------------------------------- */

const HeroBanner = (() => {
  // - handleHeroBanner
  const handleRunCarousel = () => {
    const _selector = $(".js-hero-banner");
    const _itemLength = $(".js-hero-banner .hero-banner__item").length;

    //destroy carosuel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // run
    if (_itemLength > 1) {
      _selector.addClass("owl-carousel").owlCarousel({
        loop: false,
        rewind: true,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 5000,
        autoHeight: true,
        autoplayHoverPause: true,
        animateOut: "fadeOut",
      });
    } else {
      _selector.addClass("hero-banner--single-show");
    }
  };

  // - init
  const init = () => {
    if ($(".js-hero-banner").length) {
      handleRunCarousel();
    }
  };

  return {
    init,
  };
})();

export default HeroBanner;
