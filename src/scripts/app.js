// --- utilities
import { Scrolllable, BrowserCheck } from "utilities";

// --- components
import { Example, Header, HeroBanner, Customer, Reveal } from "components";

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $("body").removeClass("hold-transition");
  };

  // --- show site content
  const showSiteContent = () => {
    $(".js-main-site").removeClass("main-site--hide");
    // --- disable scroll
    Scrolllable.enable();
  };

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();
      Header.init();

      // --- Project
      Example.init();
      HeroBanner.init();
      Customer.init();
      Reveal.init();
    })(jQuery);
  };

  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {});
    })(jQuery);
  };

  // --- init
  const init = () => {
    load();
    ready();
  };

  // --- return
  return {
    init,
  };
})();

// ---  run main js
App.init();
