

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

	const initTabs = () => {
	  const bikeBtn = () => {
	    $('.bike__btn').on('click', (ev) => {
        $('.bike__btn').removeClass('is-active');
	      $(ev.currentTarget).addClass('is-active');
      });
    };

	  const bikeTabs = () => {
	    $('.bike__tabs').on('click', (ev) => {
	      const _elem = $(ev.currentTarget),
          _elemID = _elem.data('btn-id'),
          _elemName = _elem.text();

	      const _bikeTitle = $('.bike__title');

        $('.bike__tabs').removeClass('is-active');
        _elem.addClass('is-active');

        _bikeTitle.text(_elemName);

        $('.bike__head-img').removeClass('is-active');
        $('.bike__block').removeClass('is-active');
        $('.bike__head-img[data-image-' + _elemID + ']').addClass('is-active');
        $('.bike__block[data-block-' + _elemID + ']').addClass('is-active');
      });
    };

	  const bikeHoverBlock = () => {
      $('.bike__block').hover(
        (ev) => {
          $('.bike__block').removeClass('is-active');
          $(ev.currentTarget).addClass('is-active');
        },
        (ev) => {
          // $(ev.currentTarget).removeClass('is-active');
        }
      );
    };

    bikeBtn();
    bikeTabs();
    bikeHoverBlock();
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
    initTabs();
  };
  initJquery();
});

