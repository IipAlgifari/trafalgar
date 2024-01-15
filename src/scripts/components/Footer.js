
const Footer = (() => {

  const handleFooterMenu = () => {
    $('.js-footer-accordion').on('click', (e) => {
      if($(this).find('.footer__nav').hasClass('active')) {
        $(this).find('.footer__nav').removeClass('active').slideUp(300);
      } else {
        $(this).find('.footer__nav').addClass('active').slideDown();
      }
    })
  }
  console.log(handleFooterMenu);

  const init = () => {
    Footer.handleFooterMenu();
  }

  return {
    init
  }

})();

// $(function(){
//   var accordion = {
//     handleClick: function() {
//       $('.js-footer-accordion').on('click', function(){
//         if($(this).find('.footer__nav').hasClass('active')) {
//           $(this).find('.footer__nav').removeClass('active').slideUp(300);
//         } else {
//           $(this).find('.footer__nav').addClass('active').slideDown();
//         }
//       })
//     },
//     init: function() {
//       accordion.handleClick();
//     }
//   }

//   accordion.init();
// });

export default Footer;
