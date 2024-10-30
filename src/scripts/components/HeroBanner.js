/* ------------------------------------------------------------------------------
@name: Hero banner
@description: Hero banner
--------------------------------------------------------------------------------- */

const HeroBanner = (() => {
  // Default carousel options
  const defaultOptions = {
    loop: false,
    rewind: true,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    autoplayTimeout: 5000,
    autoHeight: true,
    autoplayHoverPause: false,
    animateOut: "fadeOut",
  };

  // - handleRunCarousel
  const handleRunCarousel = (options = {}) => {
    const _selector = $(".js-hero-banner");
    const _itemLength = $(".js-hero-banner .hero-banner__item").length;

    if (_itemLength < 1) return; // Early return if no items

    // Destroy existing carousel if initialized
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // Run carousel if there are multiple items
    if (_itemLength > 1) {
      _selector.addClass("owl-carousel").owlCarousel({
        ...defaultOptions,
        ...options, // Override default options with custom ones if provided
      });
    } else {
      _selector.addClass("hero-banner--single-show");
    }
  };

  // - init
  const init = (customOptions = {}) => {
    const bannerExists = $(".js-hero-banner").length > 0;
    if (bannerExists) {
      handleRunCarousel(customOptions);
    }
  };

  return {
    init,
  };
})();

export default HeroBanner;
