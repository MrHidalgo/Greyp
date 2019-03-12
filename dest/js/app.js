'use strict';

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

function stickyHeader() {
  var elSelector = 'header',
      $element = $(elSelector);

  if (!$element.length) return true;

  var elHeight = 0,
      elTop = 0,
      $document = $(document),
      dHeight = 0,
      $window = $(window),
      wHeight = 0,
      wScrollCurrent = 0,
      wScrollBefore = 0,
      wScrollDiff = 0;

  $window.on('scroll', function () {
    elHeight = $element.outerHeight();
    dHeight = $document.height();
    wHeight = $window.height();
    wScrollCurrent = $window.scrollTop();
    wScrollDiff = wScrollBefore - wScrollCurrent;
    elTop = parseInt($element.css('top')) + wScrollDiff;

    if (wScrollCurrent <= 0) $element.css('top', 0);else if (wScrollDiff > 0) $element.css('top', elTop > 0 ? 0 : elTop);else if (wScrollDiff < 0) {
      if (wScrollCurrent + wHeight >= dHeight - elHeight) $element.css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);else $element.css('top', Math.abs(elTop) > elHeight ? -elHeight : elTop);
    }

    wScrollBefore = wScrollCurrent;
  });
}

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var mySwiper = new Swiper('.swiper-container-main', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: false,
    speed: 500,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.main__slider-btn--next',
      prevEl: '.main__slider-btn--prev'
    }
  });
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  WebFont.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900']
    }
  });

  /**
    * @description
   */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  stickyHeader();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */
  var initAdvantageAnimation = function initAdvantageAnimation() {
    $('.advantage__block').hover(function (ev) {
      $('.advantage__block').addClass('is-nhover');
      $(ev.currentTarget).removeClass('is-nhover').addClass('is-hover');
    }, function (ev) {
      $('.advantage__block').removeClass('is-nhover');
      $(ev.currentTarget).removeClass('is-hover');
    });
  };

  var initTabs = function initTabs() {
    var bikeBtn = function bikeBtn() {
      $('.bike__btn').on('click', function (ev) {
        $('.bike__btn').removeClass('is-active');
        $(ev.currentTarget).addClass('is-active');
      });
    };

    var bikeTabs = function bikeTabs() {
      $('.bike__tabs').on('click', function (ev) {
        var _elem = $(ev.currentTarget),
            _elemID = _elem.data('btn-id'),
            _elemName = _elem.text();

        var _bikeTitle = $('.bike__title');

        $('.bike__tabs').removeClass('is-active');
        _elem.addClass('is-active');

        _bikeTitle.text(_elemName);

        $('.bike__head-img').removeClass('is-active');
        $('.bike__block').removeClass('is-active');
        $('.bike__head-img[data-image-' + _elemID + ']').addClass('is-active');
        $('.bike__block[data-block-' + _elemID + ']').addClass('is-active');
      });
    };

    var bikeHoverBlock = function bikeHoverBlock() {
      $('.bike__block').hover(function (ev) {
        $('.bike__block').removeClass('is-active');
        $(ev.currentTarget).addClass('is-active');
      }, function (ev) {
        // $(ev.currentTarget).removeClass('is-active');
      });
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
  var initJquery = function initJquery() {
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