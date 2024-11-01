/* ------------------------------------------------------------------------------
@name: Reveal
@description: Reveal
--------------------------------------------------------------------------------- */

const Reveal = (() => {
  // --- handleRevealConfig
  const handleRevealConfig = (
    delay = 70,
    distance = "32px",
    interval = 70,
    origin = "bottom"
  ) => {
    const _config = {
      duration: 2000,
      distance: distance,
      delay: delay,
      interval: interval,
      origin: origin,
    };
    return _config;
  };

  // --- handleRunScrollReveal
  const handleRunScrollReveal = () => {
    // Header
    ScrollReveal().reveal(".header", { duration: 3000 });

    //Our Services
    ScrollReveal().reveal(".services__title", handleRevealConfig());
    ScrollReveal().reveal(".services__desc", handleRevealConfig());
    ScrollReveal().reveal(
      ".services__item",
      handleRevealConfig(60, "70px", 60, "left")
    );
    ScrollReveal().reveal(".btn", handleRevealConfig(70, "80px", 60, "bottom"));

    if ($(window).width() >= 992.98) {
    }

    // -- leading
    ScrollReveal().reveal(
      ".leading__img",
      handleRevealConfig(70, "80px", 60, "left")
    );
    ScrollReveal().reveal(
      ".leading__title",
      handleRevealConfig(70, "80px", 60, "right")
    );
    ScrollReveal().reveal(
      ".leading__desc",
      handleRevealConfig(70, "80px", 60, "right")
    );
    ScrollReveal().reveal(".leading__btn", handleRevealConfig());

    // -- customer
    ScrollReveal().reveal(".article__item", handleRevealConfig());

    // -- footer
    ScrollReveal().reveal(
      ".footer__copyright",
      handleRevealConfig(55, "24px", 50, "bottom")
    );
    ScrollReveal().reveal(
      ".footer__menu__wrapper",
      handleRevealConfig(55, "24px", 50, "right")
    );
    ScrollReveal().reveal(
      ".footer__desc",
      handleRevealConfig(55, "24px", 50, "left")
    );
    ScrollReveal().reveal(
      ".footer__logo",
      handleRevealConfig(55, "24px", 50, "bottom")
    );

    // -- responsive config
    if ($(window).width() <= 767.98) {
      ScrollReveal().reveal(
        ".portofolio__list",
        handleRevealConfig(50, "24px", 50, "bottom")
      );
      ScrollReveal().reveal(
        ".expertise__list",
        handleRevealConfig(50, "24px", 50, "bottom")
      );
      ScrollReveal().reveal(
        ".contact-us__img",
        handleRevealConfig(55, "24px", 50, "bottom")
      );
      ScrollReveal().reveal(
        ".contact-us__form",
        handleRevealConfig(55, "24px", 50, "bottom")
      );
    }
  };

  // --- init
  const init = () => {
    handleRunScrollReveal();
  };

  // --- return
  return {
    init,
  };
})();

export default Reveal;
