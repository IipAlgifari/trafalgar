/* ------------------------------------------------------------------------------
@name: Header
@description: Handle JS Header
--------------------------------------------------------------------------------- */
// --- utilities
import { Scrolllable } from "utilities";

const Header = (() => {
  // - handleSayHello
  const handleShowNavigation = () => {
    $(".js-burger-menu").on("click", (e) => {
      const _this = $(e.currentTarget);
      handleToggleMenu(_this, _this.hasClass("show"));
    });
  };

  // - handleCloseNav
  const handleCloseNav = () => {
    $(document).on("keyup", (e) => {
      if (e.which === 27) {
        if ($(".js-burger-menu").hasClass("show")) {
          handleToggleMenu($(".js-burger-menu"), true);
        }
      }
    });
  };

  // - handleToggleMenu
  const handleToggleMenu = (selector, status) => {
    if (status) {
      $("body").removeClass("show-menu");
      selector.removeClass("show");
      $(".js-header-nav").removeClass("show-navigation"); // Menghapus kelas saat ditutup
      Scrolllable.enable();
    } else {
      $("body").addClass("show-menu");
      selector.addClass("show");
      $(".js-header-nav").addClass("show-navigation"); // Menambahkan kelas saat dibuka
      Scrolllable.disable();
    }
  };

  // - handleHideMenu
  const handleHideMenu = () => {
    if ($(window).width() > 992) {
      handleToggleMenu($(".js-burger-menu"), true);
    }
  };

  // handleClickMenu
  const handleClickMenu = () => {
    $(".js-header-nav .header__link").on("click", (e) => {
      const _target = $(e.currentTarget).attr("href");
      const _parent = $(e.currentTarget).parents(".header__item");
      let _targetPosition = 0;

      if (_target !== "#home") {
        _targetPosition = $(_target).offset().top;
        if ($(window).scrollTop() > _targetPosition) {
          _targetPosition = _targetPosition - $(".header").outerHeight();
          _targetPosition -= $(".header").outerHeight();
        }
      }

      if ($(window).width() < 992) {
        handleToggleMenu($(".js-burger-menu"), true);
      }

      $(".header__item").removeClass("header__item--active");
      _parent.addClass("header__item--active");

      $("html, body").animate(
        {
          scrollTop: _targetPosition,
        },
        700
      );
      e.preventDefault();
    });
  };

  // - init
  const init = () => {
    handleShowNavigation();
    handleCloseNav();
    handleClickMenu();
  };

  return {
    init,
    hideMenu: handleHideMenu,
  };
})();

export default Header;
