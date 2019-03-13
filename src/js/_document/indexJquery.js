

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


	const initVideoAnimation = () => {
    const setVideoContainerHeight = function() {
      const videoContainerElem = document.getElementById('video-container');

      if (!matchMedia('(max-width: 63.99em)').matches) {
        const videoElem = document.getElementById('video');
        const playbackConst = 420;

        videoContainerElem.style.height = Math.floor(videoElem.duration) * playbackConst + 'px';

        window.addEventListener('scroll', hardwareSection);
      } else {
        videoContainerElem.style.height = '';
        window.removeEventListener('scroll', hardwareSection);
      }
    };

    const hardwareSection = function() {
      const hardwareSectionElem = document.querySelector('.home-hardware');
      const headerElem = document.getElementById('header');

      const hardwareSectionOffsetTop = $(hardwareSectionElem).offset().top;
      const hardwareSectionHeight = hardwareSectionElem.offsetHeight;
      const hardwareSectionOffsetBottom = hardwareSectionOffsetTop + hardwareSectionHeight;
      const headerHeight = headerElem.offsetHeight;

      // const windowScrollTop = window.pageYOffset + headerHeight;
      const windowScrollTop = window.pageYOffset;
      const windowScrollBottom = window.pageYOffset + document.documentElement.clientHeight;

      if (windowScrollTop >= hardwareSectionOffsetTop) {
        hardwareSectionElem.classList.add('js-sticky');
        videoTrigger();
      } else {
        hardwareSectionElem.classList.remove('js-sticky');
      }

      if (windowScrollBottom >= hardwareSectionOffsetBottom) {
        hardwareSectionElem.classList.remove('js-sticky');
        hardwareSectionElem.classList.add('js-stick-to-bottom');
      } else {
        hardwareSectionElem.classList.remove('js-stick-to-bottom');
      }
    };

    const videoTrigger = function() {
      const hardwareSectionElem = document.querySelector('.home-hardware');
      const videoElem = document.getElementById('video');
      const playbackConst = 420;

      const hardwareSectionOffsetTop = $(hardwareSectionElem).offset().top;

      function scrollPlay() {
        videoElem.currentTime = (window.pageYOffset - hardwareSectionOffsetTop) / playbackConst;

        if (!(videoElem.currentTime >= videoElem.duration)) {
          window.requestAnimationFrame(scrollPlay);
        }
      }

      window.requestAnimationFrame(scrollPlay);
    };

    const initEventListeners = function() {
      if (document.getElementById('video-container')) {
        document.getElementById('video').addEventListener('loadedmetadata', setVideoContainerHeight);
        window.addEventListener('resize', setVideoContainerHeight);
        window.addEventListener('load', setVideoContainerHeight);
      }
    };

    initEventListeners();
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
    initVideoAnimation();
  };
  initJquery();
});

