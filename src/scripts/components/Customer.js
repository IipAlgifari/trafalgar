/* ------------------------------------------------------------------------------
@name: Customer
@description: Carousel-customer
--------------------------------------------------------------------------------- */

const Customer = (() => {

  // - handleCustomer
  const handleRunCarousel = () => {
    const _selector = $('.js-customer-carousel');
    const _itemLength = $('.js-customer-carousel .customer__item').length;

    //Destroy Carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    //Run
    if (_itemLength > 1) {
      _selector.addClass('owl-carousel').owlCarousel ({
        loop: false,
        rewind: false,
        nav: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeOut: 3000,
        autoHeight: true,
        autoplayHoverPause: true,
        animateOut: 'fadeOut'
      });
    } else {
      _selector.addClass('customer__list--single-show');
    }
  }

  // - init
  const init = () => {
    if ($('.js-customer-carousel').length) {
      handleRunCarousel();
    }
  }

  return {
    init
  }

})();

export default Customer;
