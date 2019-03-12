

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initAdvantageAnimation = () => {
	  $('.advantage__block').hover(
      (ev) => {
        $('.advantage__block').addClass('is-nhover');
        $(ev.currentTarget).removeClass('is-nhover').addClass('is-hover');
      },
      (ev) => {
        $('.advantage__block').removeClass('is-nhover');
        $(ev.currentTarget).removeClass('is-hover');
      }
    );
  };
	/*
	* CALLBACK :: end
	* ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
		// ==========================================

    // lib
		// ==========================================
    initSwiper();

    // callback
		// ==========================================
    initAdvantageAnimation();
  };
  initJquery();
});

