"use strict";

var $document = $(document),
    $window = $(window),
    $body = $('body'),
    $html = $('html'),
    $ptPageContent = $('#pt-pageContent'),
    $ptFooter = $('footer'),
    $ptHeader = $('header'),
    $ptLeftColumnAside = $ptPageContent.find('.leftColumn.aside'),
    $ptFilterOptions = $ptPageContent.find('.pt-filters-options'),

    /* menu setting*/
    header_menu_timeout = 150,
    header_menu_delay = 150,   

    //header
    $ptTopPanel = $('.pt-top-panel'),
    //header stuck
    $stucknav = $ptHeader.find('.pt-stuck-nav'),
    //header menu
    $ptDesctopMenu = $ptHeader.find('.pt-desctop-menu'),
    $ptDesctopParentMenu = $ptHeader.find('.pt-desctop-parent-menu'),
    $ptMobileParentMenu = $ptHeader.find('.pt-mobile-parent-menu'),
    $ptMobileParentMenuChildren = $ptMobileParentMenu.children(),
    $ptStuckParentMenu = $ptHeader.find('.pt-stuck-parent-menu'),
    //header search
    $ptSearchObj = $ptHeader.find('.pt-search'),
    $ptDesctopParentSearch = $ptHeader.find('.pt-desctop-parent-search'),
    $ptMobileParentSearch = $ptHeader.find('.pt-mobile-parent-search'),
    $ptStuckParentSearch = $ptHeader.find('.pt-stuck-parent-search'),
    $ptSearchObjPopupInput = $ptSearchObj.find('.pt-search-input'),
    $ptSearchObjPopupResults = $ptSearchObj.find('.search-results'),
    //header cart
    $ptcartObj = $ptHeader.find('.pt-cart'),
    $ptDesctopParentCart = $ptHeader.find('.pt-desctop-parent-cart'),
    $ptMobileParentCart = $ptHeader.find('.pt-mobile-parent-cart'),
    $ptStuckParentCart = $ptHeader.find('.pt-stuck-parent-cart'),
    //header account
    $ptAccountObj = $ptHeader.find('.pt-account'),
    $ptDesctopParentAccount = $ptHeader.find('.pt-desctop-parent-account'),
    $ptMobileParentAccount = $ptHeader.find('.pt-mobile-parent-account'),
    $ptStuckParentAccount = $ptHeader.find('.pt-stuck-parent-account'),
    //header compare
    $ptCompareObj = $ptHeader.find('.pt-compare'),
    $ptDesctopParentCompare = $ptHeader.find('.pt-desctop-parent-compare'),
    $ptMobileParentCompare = $ptHeader.find('.pt-mobile-parent-compare'),
    $ptStuckParentCompare = $ptHeader.find('.pt-stuck-parent-compare'),
    //header wishlist
    $ptWishlistObj = $ptHeader.find('.pt-wishlist'),
    $ptDesctopParentWishlist = $ptHeader.find('.pt-desctop-parent-wishlist'),
    $ptMobileParentWishlist = $ptHeader.find('.pt-mobile-parent-wishlist'),
    $ptStuckParentWishlist = $ptHeader.find('.pt-stuck-parent-wishlist'),

    // Template Blocks
    blocks = {
      ptCalendarDatepicker: $ptPageContent.find('.calendarDatepicker'),
      ptSliderBlog: $ptPageContent.find('.pt-slider-blog'),
      ptSlickMain: $ptPageContent.find('.pt-slick-main'),
      ptSliderBlogSingle: $ptPageContent.find('.pt-slider-blog-single'),
      ptVideoBlock: $('.pt-video-block'),
      ptBlogMasonry: $ptPageContent.find('.pt-blog-masonry'),
      ptPortfolioMasonry: $ptPageContent.find('.pt-portfolio-masonry'),
      ptProductMasonry: $ptPageContent.find('.pt-product-listing-masonry'),
      ptInputCounter: $('.pt-input-counter'),
      ptCollapseBlock: $('.pt-collapse-block'),
      modalVideoProduct: $('#modalVideoProduct'),
      modalAddToCart: $('#modalAddToCartProduct'),
      ptMobileProductSlider: $('.pt-mobile-product-slider'),
      ptCollapse: $ptPageContent.find('.pt-collapse'),
      ptProductListing: $ptPageContent.find('.pt-product-listing'),
      ptBtnColumnClose: $ptLeftColumnAside.find('.pt-btn-col-close'),
      ptBtnToggle: $ptFilterOptions.find('.pt-btn-toggle a'),
      ptProductItem: $ptPageContent.find('.pt-product, .pt-product-design02'),
      ptProductDesign02: $ptPageContent.find('.pt-product-design02'),
      ptProductDesign01: $ptPageContent.find('.pt-product'),
      ptFilterDetachOption: $ptLeftColumnAside.find('.pt-filter-detach-option'),
      ptFilterSort: $ptFilterOptions.find('.pt-sort'),
      ptSliderLookbook: $ptPageContent.find('.pt-slider-lookbook'),
      ptPortfolioContent: $ptPageContent.find('.pt-portfolio-content'),
      ptLookbook: $ptPageContent.find('.pt-lookbook'),
      ptAirSticky: $ptPageContent.find('.airSticky'),
      ptfooterMobileCollapse: $ptFooter.find('.pt-collapse-title'),
      ptBackToTop: $('.pt-back-to-top'),
      ptHeaderDropdown: $ptHeader.find('.pt-dropdown-obj'),
      ptCarouselProducts: $('.pt-carousel-products'),
      ptItemsCategories: $ptPageContent.find('.pt-items-categories'),
      ptDotsAbsolute: $ptPageContent.find('.pt-dots-absolute'),
      ptAlignmentImg: $ptPageContent.find('.pt-alignment-img'),
      ptProductSingleBtnZomm: $ptPageContent.find('.pt-product-single-img .pt-btn-zomm'),
      ptRevolutionPromo: $ptPageContent.find('.pt-revolution-promo'),
      ptTabsGorizontal: $('#pt-pageContent .pt-tabs-gorizontal-js'),
    };

var ptwindowWidth = window.innerWidth || $window.width();



if (blocks.ptRevolutionPromo.length) {
  setTimeout(function(){
    blocks.ptRevolutionPromo.fadeTo("90", 1);
  }, 2300);
  blocks.ptRevolutionPromo.on('click', '.pt-btn-close', function() {
    $(this).closest('.pt-revolution-promo').hide();
  });
};

if (blocks.ptItemsCategories.length) {
  ptItemsCategories();
};
if (blocks.modalAddToCart.length) {
  modalAddToCart();
};
// Mobile Menu
if ($('.mainmenumob-js').length) {
  var mobileMenuToggle = $('.pt-menu-toggle');

  var mobileCaterorieMenu = $('.mobile-categorie-menu'),
      panelMenu = $('.panel-menu');

  if(mobileCaterorieMenu.length){
    var objCategories = mobileCaterorieMenu.find('ul:first-child').detach();
    var categtext = mobileCaterorieMenu.find('.catsvg-text').html() + mobileCaterorieMenu.find('.catsvg-nextlvlicon').html();
    panelMenu.find('ul:first-child').prepend("<li id='wrap-categories'><a href='index.html'>"+categtext+"</a></li>");
    panelMenu.find('#wrap-categories').append(objCategories);
  }
  
  $('.mainmenumob-js').initMM({
    enable_breakpoint: true,
    mobile_button: true,
    breakpoint: 1025,
    menu_class: 'mobile-main-menu',
    external_container: true
  });
};
//header top panel
if ($ptTopPanel.length) {
  ptTopPanel();
};
// add product item
if (blocks.ptBackToTop.length) {
  ptBackToTop();
};
// Slide Column *listing-left-column.html
if ($ptLeftColumnAside && blocks.ptBtnColumnClose && blocks.ptBtnToggle) {
  ptToggleCol();
};
if (blocks.ptCollapse.length) {
  ptCollapse();
};
//modal video on page product
if (blocks.modalVideoProduct.length) {
  ptVideoPopup();
};
//pt-collapse-block(pages product single)
if (blocks.ptCollapseBlock.length) {
  ptCollapseBlock();
};
//calendarDatepicker(blog)
if (blocks.ptCalendarDatepicker.length) {
  blocks.ptCalendarDatepicker.datepicker();
};
//video(blog listing)
if (blocks.ptVideoBlock.length) {
  ptVideoBlock();
};
// determination ie
if (getInternetExplorerVersion() !== -1) {
  $html.addClass("ie");
};
// inputCounter
if (blocks.ptInputCounter.length) {
  ptInputCounter();
};
// header
initStuck();
if ($ptDesctopParentSearch.length) {
  mobileParentSearch();
};
if ($ptcartObj.length) {
  mobileParentCart();
};

// product item Design01
if (blocks.ptProductDesign01.length) {
  ptProductHover();
};
if (blocks.ptfooterMobileCollapse.length) {
  ptFooterCollapse();
};
// lookbook.html
if (blocks.ptLookbook.length) {
  ptLookbook(ptwindowWidth);
};
// carusel
if (blocks.ptCarouselProducts.length) {
  blocks.ptCarouselProducts.each( function() {
    var slick = $(this),
        item =  $(this).data('item');
    slick.slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
       slidesToShow: item || 4,
       slidesToScroll: item || 4,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1025,
        settings: {
           slidesToShow: 3,
           slidesToScroll: 3
        }
      },
                   {
                     breakpoint: 791,
                     settings: {
                       slidesToShow: 2,
                  		slidesToScroll: 2
                     }
                   }]
    });
  });
};
// lookbook.html
// slider
if (blocks.ptSliderLookbook.length) {
  blocks.ptSliderLookbook.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
};

//blog listing slider
if (blocks.ptMobileProductSlider.length) {
  blocks.ptMobileProductSlider.slick({
    lazyLoad: 'progressive',
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
};
//slick main (* index-14.html)
if (blocks.ptSlickMain.length) {
  blocks.ptSlickMain.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        dots: false,
      }
    }]
  });
};
//blog listing slider
if (blocks.ptSliderBlog.length) {
  blocks.ptSliderBlog.slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
};
//blog single post slider
if (blocks.ptSliderBlogSingle.length) {
  blocks.ptSliderBlogSingle.slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  //total slides
  var ptSlickQuantity = $('.pt-slick-quantity');
  if (ptSlickQuantity.length) {
    ptSlickQuantity.find('.total').html(blocks.ptSliderBlogSingle.slick("getSlick").slideCount);
    blocks.ptSliderBlogSingle.on('afterChange', function(event, slick, currentSlide){
      var currentIndex = $('.slick-current').attr('data-slick-index');
      currentIndex++;
      ptSlickQuantity.find('.account-number').html(currentIndex);
    });
  };
  //button
  var ptSlickButton = $('.pt-slick-button');
  if (ptSlickButton.length) {
    ptSlickButton.find('.slick-next').click(function(){
      blocks.ptSliderBlogSingle.slick('slickNext');
    });
    ptSlickButton.find('.slick-prev').click(function(){
      blocks.ptSliderBlogSingle.slick('slickPrev');
    });
  };
};




// portfolio mobile click
if (blocks.ptPortfolioContent.length && is_touch_device()) {
  ptPortfolioContentMobile();
};
if (blocks.ptDotsAbsolute.length) {
  ptSlickDots();
};
//sticky(product-05.html)
if (blocks.ptAirSticky.length) {
  ptAirSticky(ptwindowWidth);
};
// header - pt-dropdown-obj
if (blocks.ptHeaderDropdown.length) {
  ptHeaderDropdown();
};

// product single pt-btn-zomm(*magnific popup)
if (blocks.ptProductSingleBtnZomm.length) {
  ptProductSingleBtnZomm();
};

$window.on('load', function () {
  var ptwindowWidth = window.innerWidth || $window.width();
  if ($body.length) {
    $body.addClass('loaded');
  };
  // filters options product(definition layout)
  if ($ptFilterOptions.length) {
    ptFilterLayout(ptwindowWidth);
  };
  if (blocks.ptProductItem.length) {
    ptProductSmall(ptwindowWidth);
  };
  if (blocks.ptProductDesign02.length) {
    ptOverflowProduct();
  };
  if (blocks.ptProductMasonry.length) {
    gridProductMasonr();
  };
  if (blocks.ptBlogMasonry.length) {
    gridGalleryMasonr();
  };
  if (blocks.ptPortfolioMasonry.length) {
    gridPortfolioMasonr();
    initPortfolioPopup();
  };  
});

var ptCachedWidth = $window.width();
$window.on('resize', function () {
  var newWidth = $window.width();
  if(newWidth !== ptCachedWidth){
    ptCachedWidth = newWidth;


    var ptwindowWidth = window.innerWidth || $window.width();

    // filters options product(definition layout)
    if ($ptFilterOptions.length) {
      ptFilterLayout(ptwindowWidth);
    };
    if (blocks.ptProductItem.length) {
      ptProductSmall();
    };
    if (blocks.ptProductDesign02.length) {
      ptOverflowProduct();
    };
    // portfolio mobile click
    if (blocks.ptPortfolioContent.length && is_touch_device()) {
      ptPortfolioContentMobile();
    };
    //sticky(product-05.html)
    if (blocks.ptAirSticky.length) {
      ptAirSticky(ptwindowWidth);
    };
    if ($ptLeftColumnAside.hasClass('column-open') && $ptLeftColumnAside.length) {
      $ptLeftColumnAside.find('.pt-btn-col-close a').trigger('click');
    };

    //header init stuck and detach
    if ($ptDesctopParentSearch.length) {
      mobileParentSearch();
    };
    if ($ptcartObj.length) {
      mobileParentCart();
    };
    if (blocks.ptDotsAbsolute.length) {
      ptSlickDots();
    };
  }
});
// Functions
var cssFix = function() {
  var u = navigator.userAgent.toLowerCase(),
      is = function(t) {
        return (u.indexOf(t) != -1)
      };
  $html.addClass([
    (!(/opera|webtv/i.test(u)) && /msie (\d)/.test(u)) ? ('ie ie' + RegExp.$1) :
    is('firefox/2') ? 'gecko ff2' :
    is('firefox/3') ? 'gecko ff3' :
    is('gecko/') ? 'gecko' :
    is('opera/9') ? 'opera opera9' : /opera (\d)/.test(u) ? 'opera opera' + RegExp.$1 :
    is('konqueror') ? 'konqueror' :
    is('applewebkit/') ? 'webkit safari' :
    is('mozilla/') ? 'gecko' : '',
    (is('x11') || is('linux')) ? ' linux' :
    is('mac') ? ' mac' :
    is('win') ? ' win' : ''
  ].join(''));
}();

function ptTopPanel(){
  $ptTopPanel.on('click', function(e) {
    e.preventDefault;
    var target = e.target;
    if ($('.pt-btn-close').is(target)){
      $(this).slideUp(200);
    };
  });
};

//tabs init carusel
$('a[data-toggle="tab"]').length && $('body').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
  $('.slick-slider').each(function() {
    $(this).slick("getSlick").refresh();
  });
});
$('.modal').on('shown.bs.modal', function (e) {
  var objSlickSlider = $(this).find('.slick-slider');
  if(objSlickSlider.length){
    objSlickSlider.each(function() {
      $(this).slick("getSlick").refresh();
    });
  };
});
function ptItemsCategories(){
  blocks.ptItemsCategories.hover(function() {
    $(this).toggleClass('active');
  });
};
function ptHeaderDropdown(){
  var dropdownPopup = $('.header-popup-bg');
  if(!dropdownPopup.length){
    $body.append('<div class="header-popup-bg"></div>');
  };
  
  $('header').on('click', '.js-dropdown', function(e) {
    var ptwindowWidth = window.innerWidth || $window.width(),
        $this = $(this),
        target = e.target,
        objSearch = $('.pt-search'),
        objSearchInput = objSearch.find('.pt-search-input');

    // search
    if ($this.hasClass('pt-search') && $('.pt-dropdown-toggle').is(target)){
      searchPopup();
    };
    function searchPopup(){
      $this.addClass('active');
      $body.addClass('pt-open-search');
      objSearchInput.focus();
      return false;
    };
    if (objSearch.find('.pt-btn-close').is(target)){
      objSearchClose();
      return false;
    };
    function objSearchClose(){
      $this.removeClass('active');
      objSearchInput.blur();
      $body.removeClass('pt-open-search');
      return false;
    };

    // cart, account, multi-ob
    if (!$(this).hasClass('pt-search') && $('.pt-dropdown-toggle').is(target)){
      ptwindowWidth <= 1024 ?  popupObjMobile($this) : popupObjDesctop($this);
    };
    function popupObjMobile(obj){
      $('header').find('.js-dropdown.active').removeClass('active');
      obj.toggleClass('active').find('.pt-dropdown-menu').removeAttr("style");
      $body.toggleClass('pt-popup-dropdown');
      $('header .pt-dropdown-menu').perfectScrollbar().addClass('perfectScrollbar');
    };
    function popupObjDesctop(obj){
      var $this = obj,
          target = e.target;

      if ($this.hasClass('active')){
        $this.toggleClass('active').find('.pt-dropdown-menu').slideToggle(200);
        $this.find('.ps-container').removeAttr("style");
        return;
      };
      $('.pt-desktop-header .pt-dropdown-obj').each( function () {
        var $this = $(this);
        if($this.hasClass('active')){
          $this.removeClass('active').find('.pt-dropdown-menu').css("display", "none");
        }
      });
      if ($('.pt-dropdown-toggle').is(target)){
        toggleDropdown($this);
      };
      if($this.hasClass('pt-cart')){
        $.fn.getRealDimensions = function (outer){
          var $this = $(this);
          if ($this.length == 0) {
            return false;
          }
          var $clone = $this.clone()
          .show()
          .css('visibility','hidden')
          .insertAfter($this);
          var result = {
            width:      (outer) ? $clone.outerWidth() : $clone.innerWidth(),
            height:     (outer) ? $clone.outerHeight() : $clone.innerHeight(),
            offsetTop:  $clone.offset().top,
            offsetLeft: $clone.offset().left
          };
          $clone.remove();
          return result;
        };

        var dimensions = $('.pt-cart-content').first().getRealDimensions().height,
            viewportHeight = window.innerHeight,
            cartPopup = dimensions + $('#pt-header').height(),
            stuckNav = $('.pt-stuck-nav');

        if(stuckNav.hasClass('stuck')){
          var insertValue = viewportHeight - stuckNav.height();
        } else{
          var insertValue = viewportHeight - $('#pt-header').height();
        };

        if(viewportHeight <= cartPopup){
          $('header .pt-dropdown-menu .pt-cart-layout').css({
            'height' : insertValue  + 'px'
          }).perfectScrollbar().addClass('perfectScrollbar');
        };
        $(window).resize(function(e){
          var ptCart = $('.pt-cart');
          if(ptCart.hasClass('active')){
            $('.pt-cart .pt-dropdown-toggle').trigger('click');
          };
        });
      }
    };
    function toggleDropdown(obj){
      obj.toggleClass('active').find('.pt-dropdown-menu').slideToggle(200);
    };

    $(document).mouseup(function(e){
      var ptwindowWidth = window.innerWidth || $window.width();

      if (!$this.is(e.target) && $this.has(e.target).length === 0){
        $this.each(function(){
          if($this.hasClass('active') && $this.hasClass('pt-search')){
            objSearch.find('.pt-btn-close').trigger('click');
          };
          if($this.hasClass('active') && !$this.hasClass('pt-search')){
            if(ptwindowWidth <= 1024){
              closeObjPopupMobile();
            } else {
              $('.js-dropdown').each( function () {
                if($(this).hasClass('active')){
                  $(this).removeClass('active').find('.pt-dropdown-menu').css("display", "none");
                }
              });
            };
          };
        });
      };
      if ($this.find('.pt-mobile-add .pt-close').is(e.target)){
        closeObjPopupMobile();
      };
    });
    function closeObjPopupMobile(){
      $('.js-dropdown.active').removeClass('active');
      $body.removeClass('pt-popup-dropdown');
      $('header .pt-dropdown-menu').removeClass('perfectScrollbar').perfectScrollbar('destroy');
      return false;
    };
  });
};

// button back to top
function ptBackToTop() {
  blocks.ptBackToTop.on('click',  function(e) {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $window.scroll(function() {
    $window.scrollTop() > 500 ? blocks.ptBackToTop.stop(true.false).addClass('pt-show') : blocks.ptBackToTop.stop(true.false).removeClass('pt-show');
  });
};

// modal Add ToCart(*close)
function modalAddToCart() {
  blocks.modalAddToCart.on('click', '.btn-close-popup',  function(e) {
    $(this).closest('.modal-content').find('.modal-header .close').trigger('click');
    return false;
  });
};

// Mobile footer collapse
function ptFooterCollapse() {
  blocks.ptfooterMobileCollapse.on('click',function(e){
    e.preventDefault;
    var ptlayout = $(this).next(),
        ptwindowWidth = window.innerWidth || $window.width();

    $(this).toggleClass('pt-open');
    if(ptlayout.css('display') == 'none' &&  ptwindowWidth <= 790){
      ptlayout.animate({height: 'show'}, 300);
    }else if(ptlayout.css('display') == 'block' &&  ptwindowWidth <= 790){
      ptlayout.animate({height: 'hide'}, 300);
    }
  });
};

//slick slider functional for dots
function ptSlickDots() {
  blocks.ptDotsAbsolute.each(function(){
    var $this = $(this).find('.slick-dots');
    if($this.is(':visible')){
      var upperParent = $this.closest('[class ^= container]');
      if (upperParent.length){
        upperParent.css({'paddingBottom' : parseInt($this.height(), 10) + parseInt($this.css('marginTop'), 10)});
      }
    }
  });
};
// product item Design01 hover (*desctope)
function ptProductHover() {
  $document.on('mouseenter mouseleave', '#pt-pageContent .pt-product', function(e) {
    if($('.pt-product-listing').length && $('.pt-product-listing').hasClass("pt-col-one")) return false;

    var $this = $(this),
        windW = window.innerWidth,
        objLiftUp01 = $this.find('.pt-description'),
        objLiftUp02 = $this.find('.pt-product-inside-hover'),
        objHeight02 = parseInt(objLiftUp02.height())+3,
        objCountdown = $this.find('.pt-countdown_box'),
        target = e.target;

    if($this.hasClass('product-nohover')) return false;
    
    if (e.type === 'mouseenter' && windW > 1024) {
      ptOnHover();
    } else if (e.type === 'mouseleave' && e.relatedTarget && windW > 1024) {
      ptOffHover();
    };

    function ptOnHover(e){
      $this.stop().css({
        height: $this.innerHeight()
      }).addClass('hovered');
      objLiftUp01.stop().animate({'top': '-' + objHeight02}, 200);
      objLiftUp02.stop().animate({ 'opacity': 1 }, 400);
      objCountdown.stop().animate({'bottom': objHeight02}, 200);
      return false;
    };
    function ptOffHover(e){
      $this.stop().removeClass('hovered').removeAttr('style');
      objLiftUp01.stop().animate({'top': '0'}, 200, function(){$(this).removeAttr('style')});
      objLiftUp02.stop().animate({ 'opacity': 0 }, 100, function(){$(this).removeAttr('style')});
      objCountdown.stop().animate({'bottom': 0}, 200, function(){$(this).removeAttr('style')});
      return false
    };
  });
};

// product Small
function ptProductSmall(){
  var currentW = parseInt(blocks.ptProductItem.width(), 10),
      objProduct = $(".pt-product, .pt-product-design02");
  currentW <= 210 ? objProduct.addClass("pt-small") : objProduct.removeClass("pt-small");
};

(function($){
  if($('.js-align-arrow').length){
    placeArrows();
    $(window).resize(placeArrows);
  }
})(jQuery);
function placeArrows(e){
  $('.js-align-arrow').each(function(){
    var _ = $(this);
    var h = _.find('.slick-prev').height();
    setTimeout(function(){
      var ih = _.find('img').first().height();
      var _h = h > 40 ? 67 : 38;
      var y = parseInt(ih/2 + _h);
      _.find('.slick-arrow').css('top', y);
    }, 700);
  })
}

// pt-hotspot
function ptLookbook(ptwindowWidth){
  //add lookbook popup
  var objPopup = $('.pt-lookbook-popup');
  if(!objPopup.length){
    $body.append('<div class="pt-lookbook-popup"><div class="pt-lookbook-container"></div></div>');
  };

  var events = 'ontouchstart' in window ? "click" : "click mouseenter";
  blocks.ptLookbook.on(events, '.pt-hotspot' , function(e) {
    var $this = $(this),
        target = e.target,
        ptHotspot = $('.pt-hotspot'),
        ptwindowWidth = window.innerWidth || $window.width(),
        ptCenterBtn = $('.pt-btn').innerHeight() / 2,
        ptWidthPopup = $('.pt-hotspot-content').innerWidth();


    ptwindowWidth <= 789 ?  ptLookbookMobile($this) : ptLookbookDesktop($this);

    //ptLookbookDesktop
    function ptLookbookDesktop($this){

      if ($this.hasClass('active')) return;

      var objTop = $this.offset().top + ptCenterBtn,
          objLeft = $this.offset().left,
          objContent = $this.find('.pt-hotspot-content').detach();

      //check if an open popup
      var checkChildren = $('.pt-lookbook-container').children().size();
      if(checkChildren > 0){
        if(ptwindowWidth <= 789){
          closePopupMobile();
        } else {
          closePopupDesctop();
        };
      }

      //open popup
      popupOpenDesktop(objContent, objTop, objLeft);

    };
    function popupOpenDesktop(objContent, objTop, objLeft){
      //check out viewport(left or right)
      var halfWidth =  ptwindowWidth / 2,
          objLeftFinal = 0;

      if(halfWidth < objLeft){
        objLeftFinal = objLeft - ptWidthPopup - 7;
        popupShowLeft(objLeftFinal);
      } else{
        objLeftFinal = objLeft + 45;
        popupShowRight(objLeftFinal);
      };

      $('.pt-lookbook-popup').find('.pt-lookbook-container').append(objContent);
      $this.addClass('active').siblings().removeClass('active');

      function popupShowLeft(objLeftFinal){
        $('.pt-lookbook-popup').css({
          'top' : objTop,
          'left' : objLeftFinal,
          'display' : 'block'
        }, 300).animate({
          marginLeft: 26 + 'px',
          opacity: 1
        }, 300);
      };
      function popupShowRight(objLeftFinal){
        $('.pt-lookbook-popup').css({
          'top' : objTop,
          'left' : objLeftFinal,
          'display' : 'block'
        }).animate({
          marginLeft: -26 + 'px',
          opacity: 1
        });
      };
    };
    //ptLookbookMobile
    function ptLookbookMobile($this){
      var valueTop = $this.attr('data-top') + '%',
          valueLeft = $this.attr('data-left') + '%';

      $this.find('.pt-btn').css({
        'top' : valueTop,
        'left' : valueLeft
      });
      $this.css({
        'top' : '0px',
        'left' : '0px',
        'width' : '100%',
        'height' : '100%'
      });
      $this.addClass('active').siblings().removeClass('active');
      $this.find('.pt-content-parent').fadeIn(200);
    };
    //Close mobile
    if(ptwindowWidth <= 789){
      if ($('.pt-btn-close').is(e.target)){
        closePopupMobile();
        return false;
      };
      if ($('.pt-hotspot').is(e.target)){
        closePopupMobile();
      };
      $(document).mouseup(function(e){
        if (!$('.pt-lookbook-popup').is(e.target) && $('.pt-lookbook-popup').has(e.target).length === 0 && !$('.pt-hotspot').is(e.target) && $('.pt-hotspot').has(e.target).length === 0){
          closePopupDesctop();
        };
      });
    };
    //Close desctope
    if(ptwindowWidth > 789){
      //ptLookbookClose
      $(document).mouseup(function(e){
        var ptwindowWidth = window.innerWidth || $window.width();
        if ($('.pt-btn-close').is(e.target)){
          closePopupDesctop();
          return false;
        };
        if (!$('.pt-lookbook-popup').is(e.target) && $('.pt-lookbook-popup').has(e.target).length === 0 && !$('.pt-hotspot').is(e.target) && $('.pt-hotspot').has(e.target).length === 0){
          closePopupDesctop();
        };
      });
    };

    function closePopupDesctop(){
      //detach content popup
      var detachContentPopup = $('.pt-lookbook-popup').removeAttr("style").find('.pt-hotspot-content').detach();
      $('.pt-hotspot.active').removeClass('active').find('.pt-content-parent').append(detachContentPopup);
    };
    function closePopupMobile(){
      if($('.pt-lookbook-container').is(':has(div)')){
        var checkPopupContent = $('.pt-lookbook-container').find('.pt-hotspot-content').detach();
        $('.pt-hotspot.active').find('.pt-content-parent').append(checkPopupContent);
      };
      $('.pt-lookbook').find('.pt-hotspot.active').each(function(index) {
        var $this = $(this),
            valueTop = $this.attr('data-top') + '%',
            valueLeft = $this.attr('data-left') + '%';

        $this.removeClass('active').removeAttr("style").css({
          'top' : valueTop,
          'left' : valueLeft,
        }).find('.pt-btn').removeAttr("style").next().removeAttr("style");
      });
    };
    function checkclosePopupMobile(){
      $('.pt-hotspot').find('.pt-content-parent').each(function() {
        var $this = $(this);
        if($this.css('display') == 'block'){
          var $thisParent = $this.closest('.pt-hotspot'),
              valueTop = $thisParent.attr('data-top') + '%',
              valueLeft = $thisParent.attr('data-left') + '%';

          $this.removeAttr("style").prev().removeAttr("style");
          $thisParent.removeAttr("style").css({
            'top' : valueTop,
            'left' : valueLeft,
          });
        };
      });
    };
    $(window).resize(function(e) {
      var ptwindowWidth = window.innerWidth || $window.width();
      if(ptwindowWidth <= 789){
        closePopupMobile();
      } else {
        closePopupDesctop();
        checkclosePopupMobile();
      };
    });
    // return false;
  });
};
// Overflow Product
function ptOverflowProduct(){
  blocks.ptProductDesign02.hover(function() {
    if($('.pt-product-listing').length && $('.pt-product-listing').hasClass("pt-col-one")) return false;

    if (window.innerWidth < 1024) return;
    var objImgHeight = $(this).find('.pt-image-box').height(),
        objScroll = $(this).find('.pt-description'),
        objScrollHeight = objScroll.height() + 25;

    if (objImgHeight > objScrollHeight) return;
    $(this).addClass('pt-small');
    objScroll.height(objImgHeight).perfectScrollbar();

  }, function() {
    if (window.innerWidth < 1024) return;
    $(this).removeClass('pt-small').find('.pt-description').removeAttr('style').perfectScrollbar('destroy');
  });
};
function ptReinitflowProduct(){
  if (window.innerWidth < 1024 || $ptPageContent.find('.pt-product-design02').length == 0) return;
  $ptPageContent.find('.pt-product-design02').each(function() {
    $(this).perfectScrollbar('destroy');
    var objImgHeight = $(this).find('.pt-image-box').height(),
        objScroll = $(this).find('.pt-description'),
        objScrollHeight = objScroll.height() + 25;

    if (objImgHeight > objScrollHeight) return;
    $(this).addClass('pt-small');
    objScroll.height(objImgHeight).perfectScrollbar();
  });
}

// portfolio mobile click
function ptPortfolioContentMobile(){
  blocks.ptPortfolioContent.on('click', 'figure img', function() {
    $(this).closest(".pt-portfolio-content").find('figure').removeClass('gallery-click');
    $(this).closest("figure").addClass('gallery-click');
  });
};

//toggle col (listing-left-column.html)
function ptToggleCol() {
  var $btnClose = $ptLeftColumnAside.find('.pt-btn-col-close a');

  $('.pt-btn-toggle').on('click', function (e) {
    e.preventDefault();
    var ptScrollValue = $body.scrollTop() || $html.scrollTop();
    $ptLeftColumnAside.toggleClass('column-open').perfectScrollbar();
    $body.css("top", - ptScrollValue).addClass("no-scroll").append('<div class="modal-filter"></div>');
    var modalFilter = $('.modal-filter').fadeTo('fast',1);
    if (modalFilter.length) {
      modalFilter.click(function() {
        $btnClose.trigger('click');
      })
    }
    return false;
  });
  blocks.ptBtnColumnClose.on('click', function(e) {
    e.preventDefault();
    $ptLeftColumnAside.removeClass('column-open').perfectScrollbar('destroy');
    var top = parseInt($body.css("top").replace("px", ""), 10) * -1;
    $body.removeAttr("style").removeClass("no-scroll").scrollTop(top);
    $html.removeAttr("style").scrollTop(top);
    $(".modal-filter").unbind().remove();
  });
};

function ptCollapseBlock() {
  blocks.ptCollapseBlock.each( function () {
    var obj = $(this),
        objOpen = obj.find('.pt-item.active'),
        objItemTitle = obj.find('.pt-item .pt-collapse-title');

    objOpen.find('.pt-collapse-content').slideToggle(200);

    objItemTitle.on('click', function () {
      $(this).next().slideToggle(200).parent().toggleClass('active');
    });
  });
};
function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName === 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  } else if (navigator.appName === 'Netscape') {
    var ua = navigator.userAgent;
    var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  return rv;
};
// identify touch device
function is_touch_device() {
  return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
};
if (is_touch_device()) {
  $body.addClass('touch-device');
  $html.addClass('touch-device');
};
if (/Edge/.test(navigator.userAgent)) {
  $html.addClass('edge');
};
//video
function ptVideoBlock() {
  $('body').on('click', '.pt-video-block', function(e){
    e.preventDefault();
    var myVideo = $(this).find('.movie')[0];
    if (myVideo.paused){
      myVideo.play();
      $(this).addClass('play');
    } else {
      myVideo.pause();
      $(this).removeClass('play');
    }
  });
};
// Blog Masonr
function gridGalleryMasonr() {
  // init Isotope
  var $grid = blocks.ptBlogMasonry.find('.pt-blog-init').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout').addClass('pt-show');
  });
  // filter functions
  var ptFilterNav =  blocks.ptBlogMasonry.find('.pt-filter-nav');
  if (ptFilterNav.length) {
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    // bind filter button click
    ptFilterNav.on('click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
      $(this).addClass('active').siblings().removeClass('active');
    });
  };
};
// Product Masonr (listing-metro.html)
function gridProductMasonr() {
  // init Isotope
  var $grid = blocks.ptProductMasonry.find('.pt-product-init').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
  // filter functions
  var ptFilterNav =  blocks.ptProductMasonry.find('.pt-filter-nav');
  if (ptFilterNav.length) {
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    // bind filter button click
    ptFilterNav.on('click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
      $(this).addClass('active').siblings().removeClass('active');
    });
  };
};
// collapseBlock(pages listing) *listing-left-column.html
function ptCollapse() {
  var item = blocks.ptCollapse,
      itemTitle = item.find('.pt-collapse-title'),
      itemContent = item.find('.pt-collapse-content');

  item.each(function() {
    if ($(this).hasClass('open')) {
      $(this).find(itemContent).slideDown();
    } else {
      $(this).find(itemContent).slideUp();
    }
  });
  itemTitle.on('click', function(e) {
    e.preventDefault();
    var speed = 300;
    var thisParent = $(this).parent(),
        nextLevel = $(this).next('.pt-collapse-content');
    if (thisParent.hasClass('open')) {
      thisParent.removeClass('open');
      nextLevel.slideUp(speed);
    } else {
      thisParent.addClass('open');
      nextLevel.slideDown(speed);
    }
  })
};
// ptFiltersOptions
(function($) {
  $.fn.removeClassFirstPart = function(mask) {
    return this.removeClass(function(index, cls) {
      var re = mask.replace(/\*/g, '\\S+');
      return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
    });
  };
})(jQuery);

function ptFilterLayout(ptwindowWidth){
  if($('.pt-product-listing').hasClass("only-row")) return false;
  // detach filter aside left
  if($ptFilterOptions.hasClass('desctop-no-sidebar') && !$ptFilterOptions.hasClass('filters-detach-mobile')){
     ptwindowWidth <= 1024 ?  insertMobileCol() : insertFilter();
  };
  if($ptFilterOptions.hasClass('filters-detach-mobile')){
    ptwindowWidth <= 1024 ?  insertMobileCol() : insertFilter();
  };
  if(!$ptFilterOptions.hasClass('desctop-no-sidebar')){
    ptwindowWidth <= 1024 ?  insertMobileCol() : insertFilter();
  };

  function insertMobileCol(){
    var objFilterOptions = blocks.ptFilterSort.find('> *').detach();
    blocks.ptFilterDetachOption.find('.filters-row-select').append(objFilterOptions);
  };
  function insertFilter(){
    var objColFilterOptions = blocks.ptFilterDetachOption.find('.filters-row-select > *').detach();
    blocks.ptFilterSort.append(objColFilterOptions);
  };

  //active filter detection
  blocks.ptProductListing.removeClassFirstPart("pt-col-*");

  var ptQuantity = $ptFilterOptions.find('.pt-quantity'),
      ptProductItem = blocks.ptProductListing.find('.pt-col-item:first'),
      ptProductItemValue =  (function(){
        if(ptQuantity.length && ptProductItem.length){
          var ptValue = parseInt(ptProductItem.css("flex").replace("0 0", "").replace("%", ""), 10) || parseInt(ptProductItem.css("max-width"), 10);
          return ptValue;
        };
      }());

  if(ptProductItemValue == 16){
    ptСhangeclass(ptQuantity, '.pt-col-six');
  } else if(ptProductItemValue == 25){
    ptСhangeclass(ptQuantity, '.pt-col-four');
  } else if(ptProductItemValue == 33){
    ptСhangeclass(ptQuantity, '.pt-col-three');
  } else if(ptProductItemValue == 50){
    ptСhangeclass(ptQuantity, '.pt-col-two');
  } else if(ptProductItemValue == 100){
    ptСhangeclass(ptQuantity, '.pt-col-one');
  };

  function ptСhangeclass(ptObj, ptObjvalue){
    ptwindowWidth <= 1024 ?  ptShowIconMobile(ptObj, ptObjvalue) : ptShowIconDesctop(ptObj, ptObjvalue);
    if(ptObj.find(".active").length == 0 || !ptObj.find(".active").hasClass('pt-show-siblings')) ptObj.find(ptObjvalue).addClass('active').siblings().removeClass('active');
  };

  function ptShowIconDesctop(ptObj, ptObjvalue){

    ptObj.find('.pt-show').removeClass('pt-show');
    ptObj.find('.pt-show-siblings').removeClass('pt-show-siblings');

    var $this = ptObj.find(ptObjvalue);
    $this.addClass('pt-show');

    $this.next().addClass('pt-show-siblings');
    $this.prev().addClass('pt-show-siblings');
    var quantitySiblings = $('.pt-quantity .pt-show-siblings').length;
    if(quantitySiblings === 1){
      ptObj.find('.pt-show-siblings').prev().addClass('pt-show-siblings');
    };

    if(!Boolean($('.pt-product-listing').data("onerow"))) return false;
    $(".pt-col-one").addClass('pt-show-siblings');
    var _ca = ptObj.find(".active").data("value");
    $('.pt-product-listing').addClass(_ca);
  };
  function ptShowIconMobile(ptObj, ptObjvalue){
    ptObj.find('.pt-show').removeClass('pt-show');
    ptObj.find('.pt-show-siblings').removeClass('pt-show-siblings');

    var $this = ptObj.find(ptObjvalue);
    $this.addClass('pt-show');
    $this.prev().addClass('pt-show-siblings');
    
    if($('.pt-product-listing').data("onerow") == "false") return false;
    $(".pt-col-one").addClass('pt-show-siblings');
    var _ca = ptObj.find(".active").data("value");
    $('.pt-product-listing').addClass(_ca);
  };

  //click buttons filter
  $('body').on('click', '.pt-filters-options a', function(e) {
    e.preventDefault();
    ptQuantity.find('a').removeClass('active');
    var ptActiveValue = $(this).addClass('active').attr('data-value');
    $ptPageContent.find('.pt-product-listing').removeClassFirstPart("pt-col-*").addClass(ptActiveValue);
    ptProductSmall();
  });
};


// Portfolio
function gridPortfolioMasonr() {
  // init Isotope
  var $grid = blocks.ptPortfolioMasonry.find('.pt-portfolio-content').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout').addClass('pt-show');
  });
  // filter functions
  var ptFilterNav =  blocks.ptPortfolioMasonry.find('.pt-filter-nav');
  if (ptFilterNav.length) {
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    // bind filter button click
    ptFilterNav.on('click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
      $(this).addClass('active').siblings().removeClass('active');
    });
  };
};
function initPortfolioPopup() {
  var objZoom = $ptPageContent.find('.pt-portfolio-masonry .pt-btn-zomm');
  objZoom.magnificPopup({
    type: 'image',
    mainClass: 'mfp-zoom-in',
    gallery: {
      enabled: true
    },
    callbacks:{
      open: function(){
        $('body').css('height', 'unset');
        $('.mfp-gallery').append('<button title="Close (Esc)" type="button" class="mfp-close">×</button>');
      },
    }
  });
};

//input-counter
function ptInputCounter() {
  blocks.ptInputCounter.find('.minus-btn, .plus-btn').click(function( e ) {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val(), 10) + parseInt(e.currentTarget.className === 'plus-btn' ? 1 : -1, 10);
    $input.val(count).change();
  });
  blocks.ptInputCounter.find("input").change(function() {
    var _ = $(this);
    var min = 1;
    var val = parseInt(_.val(), 10);
    var max = parseInt(_.attr('size'), 10);
    val = Math.min(val, max);
    val = Math.max(val, min);
    _.val(val);
  })
  .on("keypress", function( e ) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
};
//popup on pages product single
function ptVideoPopup() {
  blocks.modalVideoProduct.on('show.bs.modal', function(e) {
    var relatedTarget = $(e.relatedTarget),
        attr = relatedTarget.attr('data-value'),
        attrPoster = relatedTarget.attr('data-poster'),
        attrType = relatedTarget.attr('data-type');

    if(attrType === "youtube" || attrType === "vimeo" || attrType === undefined){
      $('<iframe src="'+attr+'" allowfullscreen></iframe>').appendTo($(this).find('.modal-video-content'));
    };

    if(attrType === "video"){
      $('<div class="pt-video-block"><a href="#" class="link-video"></a><video class="movie" src="'+attr+'" poster="'+attrPoster+'" allowfullscreen></video></div>').appendTo($(this).find('.modal-video-content'));

    };
    ptVideoBlock();
  }).on('hidden.bs.modal', function () {
    $(this).find('.modal-video-content').empty();
  });
};
//product pages
var elevateZoomWidget = {
  scroll_zoom: true,
  class_name: '.zoom-product',
  thumb_parent: $('#smallGallery'),
  scrollslider_parent: $('.slider-scroll-product'),
  checkNoZoom: function(){
    return $(this.class_name).parent().parent().hasClass('no-zoom');
  },
  init: function(type){
    var _ = this;
    var currentW = window.innerWidth || $(window).width();
    var zoom_image = $(_.class_name);
    var _thumbs = _.thumb_parent;
    _.initBigGalleryButtons();
    _.scrollSlider();

    if(zoom_image.length == 0) return false;
    if(!_.checkNoZoom()){
      var attr_scroll = zoom_image.parent().parent().attr('data-scrollzoom');
      attr_scroll = attr_scroll ? attr_scroll : _.scroll_zoom;
      _.scroll_zoom = attr_scroll == 'false' ? false : true;
      currentW > 575 && _.configureZoomImage();
      _.resize();
    }

    if(_thumbs.length == 0) return false;
    var thumb_type = _thumbs.parent().attr('class').indexOf('-vertical') > -1 ? 'vertical' : 'horizontal';
    _[thumb_type](_thumbs);
    _.setBigImage(_thumbs);
  },
  configureZoomImage: function(){
    var _ = this;
    $('.zoomContainer').remove();
    var zoom_image = $(this.class_name);
    zoom_image.each(function(){
      var _this = $(this);
      var clone = _this.removeData('elevateZoom').clone();
      _this.after(clone).remove();
    });
    setTimeout(function(){
      $(_.class_name).elevateZoom({
        gallery: _.thumb_parent.attr('id'),
        zoomType: "inner",
        scrollZoom: Boolean(_.scroll_zoom),
        cursor: "crosshair",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 300
      });
    }, 100);
  },
  resize: function(){
    var _ = this;
    $(window).resize(function(){
      var currentW = window.innerWidth || $(window).width();
      if(currentW <= 575) return false;
      _.configureZoomImage();
    });
  },
  horizontal: function(_parent){
    _parent.slick({
      lazyLoad: 'progressive',
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
                   {
                     breakpoint: 992,
                     settings: {
                       slidesToShow: 4,
                       slidesToScroll: 1
                     }
                   }]
    });
  },
  vertical: function(_parent){
    _parent.slick({
      lazyLoad: 'progressive',
      vertical: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      verticalSwiping: true,
      arrows: true,
      dots: false,
      centerPadding: "0px",
      customPaging: "0px",
      responsive: [{
        breakpoint: 1239,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
                   {
                     breakpoint: 992,
                     settings: {
                       slidesToShow: 4,
                       slidesToScroll: 1
                     }
                   },
                   {
                     breakpoint: 768,
                     settings: {
                       slidesToShow: 4,
                       slidesToScroll: 1
                     }
                   }]
    });
  },
  initBigGalleryButtons: function(){
    var bigGallery = $('.bigGallery');
    if(bigGallery.length == 0) return false;
    $( 'body' ).on( 'mouseenter', '.zoomContainer',
                   function(){        bigGallery.find('button').addClass('show');        }
                  ).on( 'mouseleave', '.zoomContainer',
                       function(){ bigGallery.find('button').removeClass('show'); }
                      );
  },
  scrollSlider: function(){
    var _scrollslider_parent = this.scrollslider_parent;
    if(_scrollslider_parent.length == 0) return false;
    _scrollslider_parent.on('init', function(event, slick) {
      _scrollslider_parent.css({ 'opacity': 1 });
    });
    _scrollslider_parent.css({ 'opacity': 0 }).slick({
      infinite: false,
      vertical: true,
      verticalScrolling: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
                   {
                     breakpoint: 992,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                     }
                   },
                   {
                     breakpoint: 768,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                     }
                   }]
    }).mousewheel(function(e) {
      e.preventDefault();
      e.deltaY < 0 ? $(this).slick('slickNext') : $(this).slick('slickPrev');
    });
  },
  setBigImage: function(_parent){
    var _ = this;
    _parent.find('a').click(function(e){
      _.checkNoZoom() && e.preventDefault();
      var zoom_image = $(_.class_name);
      var getParam = _.checkNoZoom() ? 'data-image' : 'data-zoom-image';
      var setParam = _.checkNoZoom() ? 'src' : 'data-zoom-image';
      var big_image = $(this).attr(getParam);
      zoom_image.attr(setParam, big_image);

      if(!_.checkNoZoom()) return false;
      _parent.find('.zoomGalleryActive').removeClass('zoomGalleryActive');
      $(this).addClass('zoomGalleryActive');
    });
  }
};
elevateZoomWidget.init();

// product single pt-btn-zomm(*magnific popup)
function ptProductSingleBtnZomm() {
  $body.on('click', '.pt-product-single-img .pt-btn-zomm', function (e) {
    var objSmallGallery = $('#smallGallery');
    objSmallGallery.find('a').each(function(){
      var dataZoomImg = $(this).attr('data-zoom-image');
      if(dataZoomImg.length){
        $(this).closest('li').append("<a class='link-magnific-popup' href='#'></a>").find('.link-magnific-popup').attr('href', dataZoomImg);
        if($(this).hasClass('zoomGalleryActive')){
          $(this).closest('li').find('.link-magnific-popup').addClass('zoomGalleryActive');
        };
      };
    });
    objSmallGallery.addClass('pt-magnific-popup').find('.link-magnific-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        tCounter: '<span class="mfp-counter"></span>'
      },
      callbacks: {
        close: function() {
          setTimeout(function() {
            objSmallGallery.removeClass('pt-magnific-popup').find('.link-magnific-popup').remove();
          }, 200);

        }
      }
    });
    objSmallGallery.find('.link-magnific-popup.zoomGalleryActive').trigger('click');
  });
};

//sticky(product-05.html)
function ptAirSticky(ptwindowWidth){
  var airStickyObj =  blocks.ptAirSticky,
      tabObj =  blocks.ptCollapseBlock.find('.pt-collapse-title');

  if(ptwindowWidth >= 1024){
    airStickyObj.airStickyBlock({
      debug: false,
      stopBlock: '.airSticky_stop-block',
      offsetTop: 70,
    });
  } else if(airStickyObj.hasClass('airSticky_absolute')) {
    airStickyObj.removeClass('airSticky_absolute');
  };
  $document.on('resize scroll', tabObj, function () {
    airStickyObj.trigger('render.airStickyBlock');
  });
  tabObj.on('click', function() {
    setTimeout(function(){
      airStickyObj.trigger('render.airStickyBlock');
    }, 170);
  });
};
// img for ratio > 1
if (window.devicePixelRatio > 1) {
  var ptImgToReplace = $('.pt-retina');
  for (var i = 0, l = ptImgToReplace.length; i < l; i++) {
    var src = ptImgToReplace[i].src;
    src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
    ptImgToReplace[i].src = src;
  };
};



/**
     * Stuck init. Properties: on/off
     * @value = 'off', default empty
     */
function initStuck(value) {
  if($stucknav.hasClass('disabled')) return;

  var value = value || false,
      ie = (getInternetExplorerVersion() !== -1) ? true : false;

  if (value === 'off') return false;
  var n = 0;
  $window.scroll(function() {
    
    var HeaderTop = $('header').innerHeight();
    if ($window.scrollTop() > HeaderTop) {
      if ($stucknav.hasClass('stuck')) return false;
      $stucknav.hide();
      $stucknav.addClass('stuck');
      $('body').trigger('showStuck');
      window.innerWidth < 1025 ? $ptStuckParentMenu.append($ptMobileParentMenuChildren.detach()) : $ptStuckParentMenu.append($ptDesctopMenu.detach());
      $ptStuckParentCart.append($ptcartObj.detach());
      $ptStuckParentCompare.append($ptCompareObj.detach());
      $ptStuckParentWishlist.append($ptWishlistObj.detach());
      $ptStuckParentAccount.append($ptAccountObj.detach());
      $ptStuckParentSearch.append($ptSearchObj.detach());


      if ($stucknav.find('.pt-stuck-cart-parent > .pt-cart > .dropdown').hasClass('open') || ie)
        $stucknav.stop().show();
      else
        $stucknav.stop().fadeIn(300);

    } else {
      if (!$stucknav.hasClass('stuck')) return false;
      $stucknav.hide();
      $stucknav.removeClass('stuck');
      $('body').trigger('hideStuck');
      if (window.innerWidth < 1025) {
        $ptMobileParentMenu.append($ptMobileParentMenuChildren.detach());
        $ptMobileParentCart.append($ptcartObj.detach());
        $ptMobileParentSearch.append($ptSearchObj.detach());
        return false;
      }
      $ptDesctopParentMenu.append($ptDesctopMenu.detach());
      $ptDesctopParentCart.append($ptcartObj.detach());
      $ptDesctopParentCompare.append($ptCompareObj.detach());
      $ptDesctopParentWishlist.append($ptWishlistObj.detach());
      $ptDesctopParentAccount.append($ptAccountObj.detach());
      $ptDesctopParentSearch.append($ptSearchObj.detach());
    }
  });
  $window.resize(function() {
    if (!$stucknav.hasClass('stuck')) return false;
    if (window.innerWidth < 1025) {
      $ptDesctopParentMenu.append($ptDesctopMenu.detach());
      $ptStuckParentMenu.append($ptMobileParentMenuChildren.detach());
    } else {
      $ptMobileParentMenu.append($ptMobileParentMenuChildren.detach());
      $ptStuckParentMenu.append($ptDesctopMenu.detach());
    }
  });
};
//header search
function mobileParentSearch() {
  if (window.innerWidth < 1025) {
    if ($ptMobileParentSearch.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptMobileParentSearch.append($ptSearchObj.detach());
  } else {
    if ($ptDesctopParentSearch.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptDesctopParentSearch.append($ptSearchObj.detach());
  };
};
//header cart
function mobileParentCart() {
  if (window.innerWidth < 1025) {
    if ($ptMobileParentCart.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptMobileParentCart.append($ptcartObj.detach());
  } else {
    if ($ptDesctopParentCart.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptDesctopParentCart.append($ptcartObj.detach());
  };
};
//header account
function mobileParentAccount() {
  if (window.innerWidth < 1025) {
    if ($ptMobileParentAccount.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptMobileParentAccount.append($ptAccountObj.detach());
  } else {
    if ($ptDesctopParentAccount.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptDesctopParentAccount.append($ptAccountObj.detach());
  };
};
function mobileParentCompare() {
  if (window.innerWidth < 1025) {
    if ($ptMobileParentCompare.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptMobileParentCompare.append($ptCompareObj.detach());
  } else {
    if ($ptDesctopParentCompare.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptDesctopParentCompare.append($ptCompareObj.detach());
  };
};
function mobileParentWishlist() {
  if (window.innerWidth < 1025) {
    if ($ptMobileParentWishlist.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptMobileParentWishlist.append($ptWishlistObj.detach());
  } else {
    if ($ptDesctopParentWishlist.children().lenght) return false;
    if ($('.stuck').length) return false;
    $ptDesctopParentWishlist.append($ptWishlistObj.detach());
  };
};

/*Module Categories*/
(function(){
  var $obj = $(".pt-menu-categories"),
      $objLi = $obj.find('nav > ul > li'),
      $subMenu = $(this).find('.dropdown-menu'),
      mobileCategoriesToggle = $ptHeader.find('.pt-categories-toggle');

  if(!$obj.length) return;

  //event open menu categories
  $body.on('click', '.pt-menu-categories button', function(e){
    e.preventDefault();
    $(this).closest('.pt-menu-categories').toggleClass('opened').find('.pt-dropdown-menu').slideToggle(200);
  });

  //determination sub menu
  (function subMenuCategories(){
    $obj.find('nav > ul > li').each(function(){
      var ptSubmenu = $(this).find('.dropdown-menu');
      if(ptSubmenu.length){
        $(this).closest('li').addClass('pt-submenu');
      }
    });
  })();

  //add active class menu
  (function menuHover(){
    $obj.find(".pt-dropdown-menu li").hover(function(e){
      $(this).toggleClass('acitve', e.type === 'mouseenter');
      catbtnsubposition($(this));
    });
  })();
  function catbtnsubposition($this){
    var t = $this.position().top,
        p = $this.find('.dropdown-menu');
    if(!p.length) return false;

    var h = p.height(),
        ph = t+$this.height();
    
    var d = -29;
    
    if(h >= ph)
      p.css({top: 0});
    else
      p.css({top: t+d});
  }

  //check popup past viewport
  $obj.find('.pt-megamenu-submenu ul li').on("mouseenter", function() {
    var $ul = $(this).find('ul:first');
    if ($ul.length) {
      var windW = window.innerWidth,
          ulW = parseInt($ul.css('width'), 10) + 20,
          thisR = this.getBoundingClientRect().right,
          thisL = this.getBoundingClientRect().left;

      if (windW - thisR < ulW){
        $ul.addClass('right-popup');
      } else if (thisL < ulW) {
        $ul.removeClass('right-popup');
      };
    }
  }).on('mouseleave', function() {
    $(this).find('ul:first').removeClass('right-popup');
  });

  //detach
  (function detachCategories(){
    if($stucknav.hasClass('disabled')) return;
    var //desctop
    $ptDesctopParentMenuCategories = $ptHeader.find('.pt-desctop-parent-menu-categories'),
        $ptStuckParentMenuCategories = $ptHeader.find('.pt-stuck-desctop-menu-categories'),
        //mobile
        $ptMobileParentMenuCategories = $ptHeader.find('.pt-mobile-parent-menu-categories'),
        $ptStuckMobileMenuCategories = $ptHeader.find('.pt-stuck-mobile-menu-categories');

    $window.scroll(function(){
      var HeaderTop = $('header').innerHeight();
      if($window.scrollTop() > HeaderTop){
        $ptStuckParentMenuCategories.append($ptDesctopParentMenuCategories.find('.pt-menu-categories').detach());
        $ptStuckMobileMenuCategories.append($ptMobileParentMenuCategories.find('.pt-categories-toggle').detach());
      } else {
        $ptDesctopParentMenuCategories.append($ptStuckParentMenuCategories.find('.pt-menu-categories').detach());
        $ptMobileParentMenuCategories.append($ptStuckMobileMenuCategories.find('.pt-categories-toggle').detach());
      };
    });
  })();

})();
("undefined"==typeof eac||null===eac)&&$("body").empty();
(function($){
  "use strict";
    var settings = {
        entryPointInclude : $('#entrypoint-objects'),
        classWrapperLayout: 'pt-item-wrapper'
    };
    var methods = {
        init: function(options){
            return this.each(function(){
                var objVar = {
                    objClass : $(this).attr("class").split(' ')[0],
                    objTitle: options.titleObj,
                    objAddClass: options.addClassObj || false,
                    wrapperAddClass: options.addClassWrapper || false,
                  	createBlok: options.createBlok,
                    objinnerEntryPoint: options.innerEntryPoint
                };
                methods.insertMobile(objVar, options);
            });
        },
        insertMobile: function(objVar,options){
          var setting = $.extend(settings, options);
          setting.entryPointInclude.attr("dataDetach", "true");

          if(objVar.createBlok){
            var checkForExistence = setting.entryPointInclude.find('.' + objVar.createBlok);
            if(!checkForExistence.length){
              setting.entryPointInclude.append("<div class='external-item "+ objVar.createBlok +"'><div class='external-item-title'>" + setting.createBlokTitle + "</div><div class='external-item-content'></div></div>");
            };

            if(typeof objVar.objinnerEntryPoint == "undefined"){
              var objDesktop = $("." + objVar.objClass).children().clone().get(0),
                  location = setting.entryPointInclude.find('.' + objVar.createBlok + ' .external-item-content');
            } else {
              var objDesktop = $("." + objVar.objClass).find("." + objVar.objinnerEntryPoint).children().clone().get(0),
                  location = setting.entryPointInclude.find('.' + objVar.createBlok + ' .external-item-content');
            };

            location.append(objDesktop);

            return false;
          };

          if(typeof objVar.objinnerEntryPoint == "undefined"){
            var objDesktop = $("." + objVar.objClass).children().clone().get(0);
          } else {
            var objDesktop = $("." + objVar.objClass).find("." + objVar.objinnerEntryPoint).children().clone().get(0);
          };

          if(typeof objVar.objTitle != "undefined"){
            setting.entryPointInclude.append("<div class='external-item "+ objVar.objClass +"'><div class='external-item-title'>" + setting.titleObj + "</div><div class='external-item-content'>" + objDesktop.outerHTML + "</div></div>");
          } else {
            setting.entryPointInclude.append("<div class='external-item "+ objVar.objClass +"'><div class='external-item-content'>" + objDesktop.outerHTML + "</div></div>");
          };
          if(typeof objVar.objTitle == "undefined"){
            setting.entryPointInclude.find('.' + objVar.objClass).find('.external-item-content > *:first-child').addClass(objVar.objAddClass);
          };
          if(typeof objVar.objWrapperAddClass != "false"){
            settings.entryPointInclude.addClass(String(options.wrapperAddClass));
          }
        }
    };
    $.fn.movingObjects = function(action){
       if(methods[action]){
           return methods[action].apply(this, Array.prototype.slice.call(arguments, 1));
       } else if(typeof action === 'object' || !action){
           return methods.init.apply(this, arguments);
       } else {
           console.info('Action ' +action+ 'not found this plugin');
           return this;
       }
    };
    $('#pt-header .single-button').movingObjects({
        wrapperAddClass: 'extra-layout'
    });
  
    $('#pt-header').find('.pt-desctop-parent-account').movingObjects({
      innerEntryPoint: 'pt-dropdown-inner',
      createBlok:'my-account',
      createBlokTitle: myaccount
    });
    $('#pt-header').find('.pt-desctop-parent-compare').movingObjects({
      createBlok:'my-account',
      createBlokTitle: myaccount
    });
    $('#pt-header').find('.pt-desctop-parent-wishlist').movingObjects({
      createBlok:'my-account',
      createBlokTitle: myaccount
    });
  
    $('#pt-header .pt-desctop-parent-language').movingObjects({
        titleObj: 'Languages',
        innerEntryPoint: 'pt-dropdown-inner'
    });
    $('#pt-header .pt-desctop-parent-currency').movingObjects({
        titleObj: 'Currency',
        innerEntryPoint: 'pt-dropdown-inner'
    });
    $('#pt-header .pt-desctop-parent-submenu').movingObjects({
        addClassObj: 'list-icon'
    });
})(jQuery);

/*
      header menu
    */
// header menu(hover)
(function toggle_header_menu() {
  var delay = header_menu_timeout,
      hoverTimer = header_menu_delay,
      timeout1 = false;

  var set_dropdown_maxH = function() {
    var wind_H = window.innerHeight,
        $ptDesctopMenu = $(this).find('.dropdown-menu'),
        menu_top = $ptDesctopMenu.get(0).getBoundingClientRect().top,
        menu_max_H = wind_H - menu_top,
        $ptDesctopMenu_H = $ptDesctopMenu.innerHeight();

    if ($ptDesctopMenu_H > menu_max_H) {
      var $body = $('body'),
          $stuck = $('.pt-stuck-nav');
      $ptDesctopMenu.css({
        maxHeight: menu_max_H - 20,
        overflow: 'auto'
      });

      var scrollWidth = function() {
        var $div = $('<div>').css({
          overflowY: 'scroll',
          width: '50px',
          height: '50px',
          visibility: 'hidden'
        });

        $body.append($div);
        var scrollWidth = $div.get(0).offsetWidth - $div.get(0).clientWidth;
        $div.remove();

        return scrollWidth;
      };

      $body.css({
        overflowY: 'hidden',
        paddingRight: scrollWidth()
      });

      $stuck.css({
        paddingRight: scrollWidth()
      });
     
      $('.pt-header-static').length && $('.pt-header-static').css({'padding-right': scrollWidth()});
    }
  };

  if ($ptDesctopMenu.length > 0) {
    $('.pt-megamenu-submenu li').each(function(){
      if($(this).find('img').length){
        $(this).closest('ul').addClass('pt-sub-img');
      }
    });
    $ptDesctopMenu.find('.dropdown-menu').each(function(){
      if($(this).length){
        $(this).closest('.dropdown').addClass('pt-submenu');
      }
    });
    
    $(document).on({
      mouseenter: function() {
        var $this = $(this),
            that = this,
            windowW = window.innerWidth || $(window).width();

        if (windowW > 1025 && $body.hasClass('touch-device')) {
          $ptDesctopMenu.find('.dropdown.pt-submenu > a').one("click", false);
        };

        timeout1 = setTimeout(function () {

          var $carousel = $this.find('.pt-menu-slider'),
              $ptDesctopMenu = $this.find('.dropdown-menu');


          $this.addClass('active')
          .find(".dropdown-menu")
          .stop()
          .addClass('hover')
          .fadeIn(hoverTimer);

          if($ptDesctopMenu.length & !$ptDesctopMenu.hasClass('one-col')) {
            set_dropdown_maxH.call(that);
          }

          if($carousel.length) {
            if(!$carousel.hasClass('slick-initialized')) {
              $carousel.slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                adaptiveHeight: true
              });
            }
          };
          $carousel.slick('setPosition');

        }, delay);

      },
      mouseleave: function(e) {
        var $this = $(this),
            $dropdown = $this.find(".dropdown-menu");

        if($(e.target && e.relatedTarget).parents('.dropdown-menu').length && !$(e.target).parents('.pt-megamenu-submenu').length && !$(e.target).parents('.one-col').length) return;

        if(timeout1 !== false) {
          clearTimeout(timeout1);
          timeout1 = false;
        }

        if($dropdown.length) {
          $dropdown.stop().fadeOut({duration: 0, complete: function() {
            $this.removeClass('active')
            .find(".dropdown-menu")
            .removeClass('hover');
          }});
        } else {
          $this.removeClass('active')
          .find(".dropdown-menu")
          .removeClass('hover');
        }

        $dropdown.removeAttr('style');
        $('.pt-header-static').length && $('.pt-header-static').removeAttr('style');

        $body.removeAttr('style');

        $('.pt-stuck-nav').css({
          paddingRight: 'inherit'
        });

      }
    }, '.pt-desctop-menu li');

    $('.multicolumn ul li').hover(function() {
      var $ul = $(this).find('ul:first');

      if ($ul.length) {
        var windW = window.innerWidth,
            windH = window.innerHeight,
            ulW = parseInt($ul.css('width'), 10),
            thisR = this.getBoundingClientRect().right,
            thisL = this.getBoundingClientRect().left;

        if (windW - thisR < ulW) {
          $ul.removeClass('left').addClass('right');
        } else if (thisL < ulW) {
          $ul.removeClass('right').addClass('left');
        } else {
          $ul.removeClass('left right');
        }
        $ul.stop(true, true).fadeIn(300);
      }
    }, function() {
      $(this).find('ul:first').stop(true, true).fadeOut(300).removeAttr('style');
    });

    $ptDesctopMenu.find('.pt-megamenu-submenu li').hover(function() {
      var $ul = $(this).find('ul:first');

      if ($ul.length) {
        var $dropdownMenu = $(this).parents('.dropdown').find('.dropdown-menu'),
            dropdown_left = $dropdownMenu.get(0).getBoundingClientRect().left,
            dropdown_Right = $dropdownMenu.get(0).getBoundingClientRect().right,
            dropdown_Bottom = $dropdownMenu.get(0).getBoundingClientRect().bottom,
            ulW = parseInt($ul.css('width'), 10),
            thisR = this.getBoundingClientRect().right,
            thisL = this.getBoundingClientRect().left;

        if (dropdown_Right - 20 - thisR < ulW) {
          $ul.removeClass('left').addClass('right');
        } else if (thisL - ulW - 20 < dropdown_left) {
          $ul.removeClass('right').addClass('left');
        } else {
          $ul.removeClass('left right');
        }

        $ul.stop(true, true).delay(0).fadeIn(200);

        var ul_bottom = $ul.get(0).getBoundingClientRect().bottom;

        if (dropdown_Bottom < ul_bottom) {
          var move_top = dropdown_Bottom - ul_bottom;
          $ul.css({
            top: move_top
          });
        }
      }
    }, function() {
      $(this).find('ul:first').stop(true, true).fadeOut(300).removeAttr('style');
    });

    $('.megamenu div').hover(function() {
      $(this).children('.pt-title-submenu').addClass('active');
    }, function() {
      $(this).children('.pt-title-submenu').removeClass('active');
    });

  }

  function onscroll_dropdown_hover() {
    var $dropdown_active = $('.dropdown.hover');

    if (!$dropdown_active.find('.dropdown-menu').not('.one-col').length) return;

    if ($dropdown_active.length)
      set_dropdown_maxH.call($dropdown_active);
  };
  $(window).on('scroll', function() {
    onscroll_dropdown_hover();
  });
})();

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    var result = key ? undefined : {},
        cookies = document.cookie ? document.cookie.split('; ') : [],
        i = 0,
        l = cookies.length;

    for (; i < l; i++) {
      var parts = cookies[i].split('='),
          name = decode(parts.shift()),
          cookie = parts.join('=');

      if (key === name) {
        result = read(cookie, value);
        break;
      }

      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

}));

function subscribeErrorHandler(){
  if($('.errors').length == 0) return false;
  $('[type="email"]').on('focus', function(){
    $(this).unbind().closest('form').find('.errors').length && $(this).closest('form').find('.errors').remove();
  })
}
subscribeErrorHandler();

/* Sections */
var hoverColors = {
  params: { 
    baseColor: 'data-c',
    activeColor: 'data-ac',
    bgBaseColor: 'data-bgc',
    bgActiveColor: 'data-abgc',
    borderBaseColor: 'data-borc',
    borderActiveColor: 'data-aborc',
  },
  init: function(){
    var attrName = this.params;
    var he = $('[data-hovercolors]');
    if(he.length == 0) return false;
    he.each(function(){
      hoverColors.getCurrentColors($(this), attrName.baseColor, attrName.bgBaseColor, attrName.borderBaseColor);
    });
  },
  initEvents: function(){
    var attrName = this.params;
    $('body').on({
      mouseenter: function(){
        hoverColors.getCurrentColors($(this), attrName.activeColor, attrName.bgActiveColor, attrName.borderActiveColor );
      },
      mouseleave: function(){
        hoverColors.getCurrentColors($(this), attrName.baseColor, attrName.bgBaseColor, attrName.borderBaseColor );
      }}, '[data-hovercolors]'
    );
  },
  getCurrentColors: function(_, attr1, attr2, attr3){
    hoverColors.setCurrentColors(_, attr1, attr2, attr3);
    
    var not = _.attr('data-hovercolors-not');
    
    var ac = _.find('['+ attr1 +']');
    if(ac.length > 0) {
      ac.each(function(){
        if($(this).hasClass(not)) return;
        var c = $(this).attr(attr1);
        $(this).css('color', c);
      });
    }
    
    ac = _.find('['+ attr2 +']');
    if(ac.length > 0) {
      ac.each(function(){
        if($(this).hasClass(not)) return;
        hoverColors.setCurrentBgColor($(this), attr2);
      });
    }

    ac = _.find('['+ attr3 +']');
    if(ac.length > 0) {
      ac.each(function(){
        if($(this).hasClass(not)) return;
        hoverColors.setCurrentBorderColor($(this), attr3);
      });
    }
  },
  setCurrentBgColor: function(_, attr){
    var a = _.attr(attr);
    _.css({"background": a});
  },
  setCurrentBorderColor: function(_, attr){
    var a = _.attr(attr);
    if (typeof a !== typeof undefined && a !== false) {
      _.css('border-color', a);
    }
  },
  setCurrentColors: function(_, attr1, attr2, attr3){
    var c = _.attr(attr1);
    _.css('color', c);

    hoverColors.setCurrentBgColor(_, attr2);
    hoverColors.setCurrentBorderColor(_, attr3);

    return false;
  }
}
hoverColors.initEvents();

// Countdown
function countDown(showZero) {
  if ($(".pt-countdown").length) {

    var showZero = showZero || false;

    $(".pt-countdown").each(function() {
      var $this = $(this),
          date = $this.data('date'),
          nextYear = false,
          tz = $('[name=timezone]');
      
      if(typeof moment === "function" && tz.length) nextYear = moment.tz($this.data('date'), tz.attr('content'));

      if (date = date.split('-')) {
        date = date.join('/');
      } else return;

      var timezone = nextYear ? nextYear.toDate() : date;

      $this.countdown(timezone, function(e) {
        var format = '<span class="countdown-row">';

        function addFormat(func, timeNum, showZero) {
          if(timeNum === 0 && !showZero) return;

          func(format);
        };

        addFormat(function() {
          format += '<span class="countdown-section">'
          + '<span class="countdown-amount">' + e.offset.totalDays + '</span>'
          + '<span class="countdown-period">' + set_day + '</span>'
          + '</span>';
        }, e.offset.totalDays, showZero);

        addFormat(function() {
          format += '<span class="countdown-section">'
          + '<span class="countdown-amount">' + e.offset.hours + '</span>'
          + '<span class="countdown-period">' + set_hour + '</span>'
          + '</span>';
        }, e.offset.hours, showZero);

        addFormat(function() {
          format += '<span class="countdown-section">'
          + '<span class="countdown-amount">' + e.offset.minutes + '</span>'
          + '<span class="countdown-period">' + set_minute + '</span>'
          + '</span>';
        }, e.offset.minutes, showZero);

        addFormat(function() {
          format += '<span class="countdown-section">'
          + '<span class="countdown-amount">' + e.offset.seconds + '</span>'
          + '<span class="countdown-period">' + set_second + '</span>'
          + '</span>';
        }, e.offset.seconds, showZero);

        format += '</span>';

        $(this).html(format);
      });
    });
  }
};

$(document).ready(function() {

  "use strict";

  countDown(true);

  initProductOptions();
});

/* products options */
function initProductOptions(){
  $('body').on('change', '.productitem-option1-combo-js select', function(e){
    var $this = $(this).find('option:selected');
    setNewData($this, true);
    var val = $this.attr("data-tag") + '-js';
    var _parent = $this.closest('.pt-option-block');
    val = _parent.optionsSetParams(val, '.productitem-option2-js');
    _parent.optionsSetParams(val, '.productitem-option3-js');
  })
  $('body').on('click', '.productitem-option1-js a', function(e){
    var $this = $(this);
    optionsHandler(e, $this);
    var val = $this.parent().attr("data-tag") + '-js';
    var _parent = $this.closest('.pt-option-block');
    val = _parent.optionsSetParams(val, '.productitem-option2-js');
    _parent.optionsSetParams(val, '.productitem-option3-js');
  })
  $('body').on('click', '.productitem-option2-js a', function(e){
    var $this = $(this)
    optionsHandler(e, $this);
    var val = $this.parent().attr("data-tag") + '-js';
    var _parent = $this.closest('.pt-option-block');
    _parent.optionsSetParams(val, '.productitem-option3-js');
  });
  $('body').on('click', '.productitem-option3-js a', function(e){
    optionsHandler(e, $(this));
  });
}
function optionsHandler(e, $this){
  e.preventDefault();
  if($this.parent().hasClass('active')) return false;
  setNewData($this);
}
$.fn.optionsSetParams = function(val, str){
  var _opt = this.find(str);
  if(_opt.length == 0) return false;
  _opt.show().find('li').each(function(){ $(this).hide().removeClass('active') });
  if(_opt.find('[data-current-option="'+val+'"]').length == 0) return false;
  _opt.find('[data-current-option="'+val+'"]').show().first().addClass('active');
  return _opt.find('.active').find('a').parent().attr("data-tag") + '-js';
}
function setNewData($this, combobox){
  if (combobox === undefined) {
    combobox = false;
  }
  var _parent = combobox ? $this : $this.parent();
  if(!combobox){
    _parent.parent().find(".active").removeClass('active');
    _parent.addClass('active');
  }

  var availability = Boolean(_parent.data('variant_availability'));
  var $pr_parent = $this.closest('.options-js');

  $pr_parent.find('input').val(_parent.attr('data-var_id'));
  
  var img_src = _parent.attr('data-img');
  if(img_src != ''){
    if($(window).width() > '1024' && $pr_parent.find('.pt-img-roll-over').length) {
      $pr_parent.find('.pt-img-roll-over img').attr('src', img_src).removeAttr('srcset data-src data-srcset').removeClass('lazyload');
    }
    else{
      $pr_parent.find('.pt-img img').attr('src', img_src).removeAttr('srcset data-src data-srcset').removeClass('lazyload');
    }
  }

  var $btn = $pr_parent.find('.pt-btn-addtocart');
  $btn.attr('href', '/cart/add.js?quantity=1&id='+_parent.attr('data-var_id'));
  
  if($pr_parent.find('.compare-js').length){
  	$pr_parent.find('.compare-js').attr('data-compareid', _parent.attr('data-var_id'));
    $(window).trigger( "compareevent" );
  }
  
  availability ? $btn.find('span').last().html(addtocart_text).parent().removeClass('disable') : $btn.find('span').last().html(unavailable_text).parent().addClass('disable');

  var labelsale = $pr_parent.find('.pt-label-sale');
  var mainprice = $pr_parent.find('.pt-price span:not(.old-price)');
  var oldprice = $pr_parent.find('.old-price');
  mainprice.html(Shopify.formatMoney(_parent.attr('data-price'), money_format));
  var compprice = String(_parent.attr('data-compprice'));
  oldprice.html(Shopify.formatMoney(compprice, money_format));
  if(!compprice) {
    !oldprice.hasClass('hide') && oldprice.addClass('hide');
    mainprice.hasClass('new-price') && mainprice.removeClass('new-price');
    labelsale.length && labelsale.hide();
  }
  else {
    var _mainprice = Number(_parent.attr('data-price'));
    compprice = Number(compprice);
    if(_mainprice >= compprice){
      !oldprice.hasClass('hide') && oldprice.addClass('hide');
      mainprice.hasClass('new-price') && mainprice.removeClass('new-price');
      labelsale.length && labelsale.hide();
    }
    else{
      oldprice.hasClass('hide') && oldprice.removeClass('hide');
      !mainprice.hasClass('new-price') && mainprice.addClass('new-price');
      var per = Math.round(100 - (_mainprice / compprice)*100)+'%';
      labelsale.length && labelsale.show().find('.thumb_percent').html(per);
    }
  }
  
  $('body').trigger('refreshCurrency');
}

(function($){
  var methods = {
    init: function(options){
      return this.each(function(){
        var obj = $(this),
            objOpen = obj.find('.pt-item.active'),
            objItemTitle = obj.find('.pt-item .pt-accordeon-title');

        objOpen.find('.pt-accordeon-content').slideToggle(100);

        objItemTitle.on('click', function(){
          $(this).next().slideToggle(200).parent().toggleClass('active');
        });
      });
    }
  };
  $.fn.accordeon = function(action){
    if(methods[action]){
      return methods[action].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if(typeof action === 'object' || !action){
      return methods.init.apply(this, arguments);
    } else {
      console.info('Action ' +action+ 'not found this plugin');
      return this;
    }
  };
  $('#pt-pageContent .pt-accordeon').accordeon();
})(jQuery);

//tabs
$.fn.ptTabs = function (options) {
  function ptTabs(tabs){
    var $tabs = $(tabs),
        $head = $tabs.find('.pt-tabs__head'),
        $head_ul = $head.find('> ul'),
        $head_li = $head_ul.find('> li'),
        $head_span = $head_li.find('> span'),
        $border = $head.find('.pt-tabs__border'),
        $body = $tabs.find('.pt-tabs__body'),
        $body_li = $body.find('> div'),
        anim_tab_duration = options.anim_tab_duration || 500,
        anim_scroll_duration = options.anim_scroll_duration || 500,
        breakpoint = 1025,
        scrollToOpenMobile = (options.scrollToOpenMobile !== undefined) ? options.scrollToOpenMobile : true,
        singleOpen = (options.singleOpen !== undefined) ? options.singleOpen : true,
        toggleOnDesktop = (options.toggleOnDesktop !== undefined) ? options.toggleOnDesktop : true,
        effect = (options.effect !== undefined) ? options.effect : 'slide',
        offsetTop = (options.offsetTop !== undefined) ? options.offsetTop : '',
        goToTab = options.goToTab,
        $btn_prev = $('<div>').addClass('tt-tabs__btn-prev disabled'),
        $btn_next = $('<div>').addClass('tt-tabs__btn-next'),
        btn_act = false,
        disableDesctop = options.disableDesctop || false;

    function _closeTab($li, desktop) {
      var anim_obj = {
        duration: anim_tab_duration,
        complete: function () {
          $(this).removeAttr('style');
        }
      };

      function _anim_func($animElem) {
        if(effect === 'toggle') {
          $animElem.hide().removeAttr('style');
        } else if(effect === 'slide') {
          $animElem.slideUp(anim_obj);
        } else {
          $animElem.slideUp(anim_obj);
        }
      };

      var $animElem;

      if(desktop || singleOpen) {
        $head_li.removeClass('active');
        $animElem = $body_li.filter('.active').removeClass('active').find('> div').stop();

        _anim_func($animElem);
      } else {
        var index = $head_li.index($li);

        $li.removeClass('active');
        $animElem = $body_li.eq(index).removeClass('active').find('> div').stop();

        _anim_func($animElem);
      }
    };

    function _openTab($li, desktop, beforeOpen, afterOpen, trigger) {
      var index = $head_li.index($li),
          $body_li_act = $body_li.eq(index),
          $animElem,
          anim_obj = {
            duration: anim_tab_duration,
            complete: function () {
              if(afterOpen) afterOpen($body_li_act);
            }
          };

      function _anim_func($animElem) {
        if(beforeOpen) beforeOpen($li.find('> span'));

        if(effect === 'toggle') {
          $animElem.show();
          if(afterOpen) afterOpen($body_li_act);
        } else if(effect === 'slide') {
          $animElem.slideDown(anim_obj);
        } else {
          $animElem.slideDown(anim_obj);
        }
      };

      $li.addClass('active');
      $animElem = $body_li_act.addClass('active').find('> div').stop();

      _anim_func($animElem);
    };

    function _replaceBorder($this, animate) {
      if($this.length) {
        var span_l = $this.get(0).getBoundingClientRect().left,
            head_l = $head.get(0).getBoundingClientRect().left,
            position = {
              left: span_l - head_l,
              width: $this.width()
            };
      } else {
        var position = {
          left: 0,
          width: 0
        };
      }

      if(animate) $border.stop().animate(position, anim_tab_duration);
      else $border.stop().css(position);
    };

    function _correctBtns($li, func) {
      var span_act_l = $li.find('> span').get(0).getBoundingClientRect().left,
          span_act_r = $li.find('> span').get(0).getBoundingClientRect().right,
          head_pos = {
            l: $head.get(0).getBoundingClientRect().left,
            r: $head.get(0).getBoundingClientRect().right
          };

      if(span_act_l < head_pos.l) {
        _replace_slider(Math.ceil(head_pos.l - span_act_l), head_pos, false, function () {
          func();
        });
      } else if(span_act_r > head_pos.r) {
        _replace_slider(Math.ceil(span_act_r - head_pos.r) * -1, head_pos, false, function () {
          func();
        });
      } else {
        func();
      }
    };

    $head.on('click', '> ul > li > span', function (e, trigger) {
      var $this = $(this),
          $li = $this.parent(),
          wind_w = window.innerWidth,
          desktop = wind_w > breakpoint,
          trigger = (trigger === 'trigger') ? true : false;

      if($li.hasClass('active')) {
        if(desktop && !toggleOnDesktop) return;

        _closeTab($li, desktop);

        _replaceBorder('', true);
      } else {
        _correctBtns($li, function () {
          _closeTab($li, desktop);

          _openTab($li, desktop,
                   function($li_act) {
            if(desktop) {
              var animate = !trigger;

              _replaceBorder($li_act, animate);
            }
          },
                   function ($body_li_act) {
            if(!desktop && !trigger && scrollToOpenMobile) {
              var tob_t = $body_li_act.offset().top;
              $('html, body').stop().animate({ scrollTop: tob_t }, {
                duration: anim_scroll_duration
              });
            }
          }
                  );
        });
      }
    });

    $body.on('click', '> div > span', function (e) {
      var $this = $(this),
          $li = $this.parent(),
          index = $body_li.index($li);

      $head_li.eq(index).find('> span').trigger('click');
    });

    function _toTab(tab, scrollTo, focus) {
      var wind_w = window.innerWidth,
          desktop = wind_w < breakpoint,
          header_h = 0,
          $sticky = $(offsetTop),
          $openTab = $head_li.filter('[data-tab="' + tab + '"]'),
          $scrollTo = $(scrollTo),
          toTab = {};

      if(desktop && $sticky.length) {
        header_h = $sticky.height();
      }

      if(!$openTab.hasClass('active')) {
        toTab = { scrollTop: $tabs.offset().top - header_h };
      }

      $('html, body').stop().animate(toTab, {
        duration: anim_scroll_duration,
        complete: function () {
          _correctBtns($openTab, function () {
            _closeTab($openTab, desktop);

            _openTab($openTab, desktop,
                     function($li_act) {
              _replaceBorder($li_act, true);
            },
                     function () {
              if ($scrollTo.length) {
                $('html, body').animate({ scrollTop: $scrollTo.offset().top - header_h }, {
                  duration: anim_scroll_duration,
                  complete: function () {
                    var $focus = $(focus);

                    if ($focus.length) $focus.focus();
                  }
                });
              }
            }
                    );
          })
        }
      });
    };

    if($.isArray(goToTab) && goToTab.length) {
      $(goToTab).each(function () {
        var elem = this.elem,
            tab = this.tab,
            scrollTo = this.scrollTo,
            focus = this.focus;

        $(elem).on('click', function (e) {
          _toTab(tab, scrollTo, focus);

          e.preventDefault();
          return false;
        });
      });
    }

    function _btn_disabled(head_pos) {
      var span_pos = {
        l: $head_li.first().find('> span').get(0).getBoundingClientRect().left,
        r: $head_li.last().find('> span').get(0).getBoundingClientRect().right
      };

      if(span_pos.l < head_pos.l) $btn_prev.removeClass('disabled');
      else $btn_prev.addClass('disabled');

      if(span_pos.r > head_pos.r) $btn_next.removeClass('disabled');
      else $btn_next.addClass('disabled');
    };

    function _replace_slider(difference, head_pos, resize, afterReplace) {
      var ul_pos = parseInt($head_ul.css('left'), 10),
          border_pos = parseInt($border.css('left'), 10),
          duration = (!resize) ? anim_tab_duration : 0,
          anim_pos = {
            'left': ul_pos + difference
          };

      if(resize) {
        $head_ul.css(anim_pos);
        _btn_disabled(head_pos);
      } else {
        $border.animate({ 'left': border_pos + difference }, anim_tab_duration);

        $head_ul.animate(anim_pos, {
          duration: duration,
          complete: function () {
            _btn_disabled(head_pos);
            if(afterReplace) afterReplace();
            btn_act = false;
          }
        });
      }
    };

    $tabs.on('click', '.pt-tabs__btn-prev, .pt-tabs__btn-next', function () {
      var $btn = $(this);

      if($btn.hasClass('disabled') || btn_act) return;

      btn_act = true;

      var head_pos = {
        l: $head.get(0).getBoundingClientRect().left,
        r: $head.get(0).getBoundingClientRect().right
      };

      if($btn.hasClass('tt-tabs__btn-next')) {
        $head_span.each(function (i) {
          var $this = $(this),
              this_r = $this.get(0).getBoundingClientRect().right;

          if(this_r > head_pos.r) {
            _replace_slider(Math.ceil(this_r - head_pos.r) * -1, head_pos);
            return false;
          }
        });
      } else if($btn.hasClass('tt-tabs__btn-prev')) {
        $($head_span.get().reverse()).each(function (i) {
          var $this = $(this),
              this_l = $this.get(0).getBoundingClientRect().left;

          if(this_l < head_pos.l) {
            _replace_slider(Math.ceil(head_pos.l - this_l), head_pos);
            return false;
          }
        });
      }
    });
    $(window).on('resize load', function () {
      var wind_w = window.innerWidth,
          desktop = wind_w > breakpoint,
          head_w = $head.innerWidth(),
          li_w = 0;

      $head_li.each(function () {
        li_w += $(this).innerWidth();
      });


      if(desktop && !disableDesctop === true){
        var $li_act = $head_li.filter('.active'),
            $span_act = $li_act.find('> span');

        if(!singleOpen && $span_act.length > 1) {
          var $save_active = $li_act.first();

          _closeTab('', desktop);
          _openTab($save_active, desktop);
        }

        if(li_w > head_w) {
          $head.addClass('slider').append($btn_prev).append($btn_next);

          $head_ul.css({ 'margin-right' : (li_w - $head.innerWidth()) * -1 });

          if($span_act.length) {

            var span_act_r = $span_act.get(0).getBoundingClientRect().right,
                span_last_r = $head_span.last().get(0).getBoundingClientRect().right,
                head_pos = {
                  l: $head.get(0).getBoundingClientRect().left,
                  r: $head.get(0).getBoundingClientRect().right
                };

            if(span_act_r > head_pos.r) {
              _replace_slider(Math.ceil(span_act_r - head_pos.r) * -1, head_pos, true);
            } else if(span_last_r < head_pos.r) {
              _replace_slider(head_pos.r - span_last_r, head_pos, true);
            }

            _replaceBorder($span_act, false);
          }

        } else {
          $head_ul.removeAttr('style');
          $btn_prev.remove();
          $btn_next.remove();
          $head.removeClass('slider');
          _replaceBorder($span_act, false);
        }

        $head.css({ 'visibility': 'visible' });
      } else {
        $border.removeAttr('style');
      }
    });

    $head_li.filter('[data-active="true"]').find('> span').trigger('click', ['trigger']);

    return $tabs;
  };

  var tabs = new ptTabs($(this).eq(0));

  return tabs;
};
// Tabs Gorizontal
if (blocks.ptTabsGorizontal.length) {
  blocks.ptTabsGorizontal.ptTabs({
    singleOpen: true,
    anim_tab_duration: 270,
    anim_scroll_duration: 500,
    toggleOnDesktop: false,
    scrollToOpenMobile: true,
    effect: 'slide',
    offsetTop: '.pt-header[data-sticky="true"]'
  });
};


/* Section */
$(document)
.on('shopify:section:load', eventHandler)
.ready(function() {
  $('[data-sectionname]').each(function(){ $(this).initSection() });
  lazyload();
  initSkrollr();
});

function eventHandler(e) {
  $('#' + e.target.id).find('[data-sectionname]').initSection();
  lazyload();
  initSkrollr();
}
function initSkrollr(){
  if($('[data-bottom-top]').length && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    skrollr.init();
  }
}

$.fn.initSection = function(){
  var _ = this;
  var n = _.data('sectionname');

  switch (n) {
      
    case ("header_section"): 
      _.find('.pt-top-panel').length && headerInfoBar();
      _.find('.js-header-slider').length && _.find('.js-header-slider').headerNewSlider();
      break;
    case ("index_sectionproducts"): _.find('.pt-carousel-products-js').initSlick(3, 2, 2); break;
    case ("index_horizontaltabs"): _.initTabs(); break;
    case ("index_sectionlookbookmasonry"): _.find('.pt-lookbook-init').initMasonryLookbook(); break;
    case ("index_sectionmasonry_products"): _.find('.pt-product-index-init').initMasonryLookbook(); break;
    case ("index_brands"): _.find('.pt-carousel-brands').initSlickBrands(6, 4, 3, 2, 1); break;
    case ("index_testimonials"): _.find('.pt-reviewsbox-listing').initSlickTest(2, 1); break;
    case ("index_revolution"): _.find('.slider-revolution').initRevolution(); break;
    case ("index_simplebanners2"): _.find('.js-init-carousel').initSlickBanners2(); break;
    case ("index_revslider"): _.find('.js-init-parallax').fnInitParallax(); break;
    default: break;
  }
}

$.fn.initTabs = function(){
  var _ = this;
  if(!_.find('[role="tabpanel"]').length) return false;
  var a = _.find('[role="tabpanel"]').first().find('.ajaxcontent');
  getTabcontent(a);
  
  if(_.find('.nav-link').length){
    _.on('mouseenter', function(){
      _.find('.nav-link').on('click', placeArrows).each(function(){
        var href = $(this).attr('href');
        getTabcontent($(href).find('.ajaxcontent'));
      })
    })
  }
}
function getTabcontent(a){
  if(!a.length || !a.hasClass('startajax')) return false;
  a.removeClass('startajax')
  var url = '/collections/all?view=collectiontabs&constraint=' + a.attr('data-content'),
      params = {
        type: "get",
        url: url,
        success: function(data){
          var p = a.parent();
          a.replaceWith(data);
          if(a.hasClass('slider')){
            p.find('.pt-carousel-products-js').initSlick(3, 2, 2);
            placeArrows();
            if($(".spr-badge").length > 0) {
              $.getScript(window.location.protocol + "//productreviews.shopifycdn.com/assets/v4/spr.js");
            }
          }
          lazyload();
          $('body').trigger('refreshCurrency');
          ptProductSmall();
          countDown(true);
        }
      }
  jQuery.ajax(params);
}

$.fn.fnInitParallax = function() {
  var jsInitParallax = this;
  if (jsInitParallax.length){
    initParallax();
  };
  $(window).resize(function(e) {
    var ttwindowWidth = window.innerWidth || $window.width();
    if(ttwindowWidth > 790){
      initParallax();
    };
  });
  function initParallax(){
    jsInitParallax.each(function(){
      var obj = $(this),
          orientation = $(this).data('orientation'),
          overflow = $(this).data('overflow'),
          scale = $(this).data('scale');

      new simpleParallax(obj, {
        overflow: overflow || false,
        scale: scale || 1.2,
        breakpoint: 790,
        orientation: orientation,
      });
    });
  };
}

function headerInfoBar() {
  var objTopPanel = $ptHeader.find('.pt-top-panel'),
      objTopPanelLink = objTopPanel.find(".js-toppanel-link-dropdown");
  //close block
  objTopPanel.each(function(){
    $(this).on('click', '.js-removeitem', function(){
      $(this).closest(objTopPanel).slideUp(200);
    });
  });
  //link dropdown
  function ptLinkDropdown(){
    var windW = window.innerWidth || $window.width();

    $(document).on('mouseenter mouseleave click', '.js-toppanel-link-dropdown', function(e){
      var $this = $(this),
          target = e.target,
          windW = window.innerWidth;

      if (e.type === 'mouseenter' && e.relatedTarget && windW > 1024) {
        ttOnHover();
      } else if (e.type === 'mouseleave' && e.relatedTarget && windW > 1024){
        ttOffHover();
      };
      if (e.type === 'click' && windW <= 1024){
        $this.toggleClass('is-active');
      }
      function ttOnHover(e){
        $this.addClass('is-active');
        return false;
      };
      function ttOffHover(e){
        $this.removeClass('is-active');
        return false
      };
    });
  };
  ptLinkDropdown();
  $(window).resize(function(e){
    checkOpenObject();
  });
  function checkOpenObject(){
    objTopPanel.find('.js-toppanel-link-dropdown').each(function(){
      if($(this).hasClass("is-active")){
        $(this).removeClass('is-active');
      };
    });
  };
  $(document).mouseup(function(e){
    if (! objTopPanel.is(e.target) &&  objTopPanel.has(e.target).length === 0){
      objTopPanelLink.removeClass('is-active');
    }
  });
};


$.fn.headerNewSlider = function() {
  this.slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: false,
  });
  this.addClass('slick-show-news');
}

$.fn.initSlick = function(md, sm, xs) {
  this.slick({
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    responsive:
    [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: md,
          slidesToScroll: md
        }
      },
      {
        breakpoint: 791,
        settings: {
          slidesToShow: sm,
          slidesToScroll: sm
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: xs,
          slidesToScroll: xs
        }
      }
    ]
  });
}

$.fn.initSlickTest = function(md, xs) {
  this.slick({
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: md,
    slidesToScroll: 1,
    responsive: 
    [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: xs
        }
      }
    ]
  });
}

$.fn.initSlickBrands = function(md, sm, sm2, xs, xs2) {
  this.slick({
    dots: false,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: md,
          slidesToScroll: md
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: sm,
          slidesToScroll: sm
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: sm2,
          slidesToScroll: sm2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: xs,
          slidesToScroll: xs
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: xs2,
          slidesToScroll: xs2
        }
      }
    ]
  });
};
$.fn.initSlickBanners2 = function() {
  this.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 791,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
}

$.fn.initMasonryLookbook = function() {
  if($('body').find('.isotope_included').length == 0)
  {
    this.replaceWith('<span class="text-center" style="display: inherit;">Save and reload page.</span>');
    return false;
  }

  var _ = this;

  var iso = _.isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    gutter: 0
  });
  // layout Isotope after each image loads
  iso.imagesLoaded().progress( function(index) {
    iso.addClass('pt-show').isotope('layout');
  });
}

//REVOLUTION SLIDER (function to reset the plug on the breakpoints)

$.fn.initRevolution = function(){

  if($('body').find('.revolution_included').length == 0)
  {
    this.replaceWith('<span class="text-center" style="display: inherit;">Save and reload page.</span>');
    return false;
  }
  
  function click_to_play_video() {
    var $this = $(this),
      $video = $this.find('li video');

    if (!$video.length) return;

    $video.on('play', function() {
      var $btn = $(this).parents('li').find('.video-play');

      $btn.addClass('pause');
      $(this).parents('.tp-caption.fullscreenvideo').addClass('click-video');
    });

    $video.on('pause ended', function() {
      var $btn = $(this).parents('li').find('.video-play');

      $btn.removeClass('pause');
    });

    $this.find('.video-play').on('click', function(e) {
      var $video = $(this).parents('li').find('video');

      $video.trigger('click');
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    $this.on('revolution.slide.onbeforeswap', function(event, data) {
      $(this).find('.tp-caption.fullscreenvideo').removeClass('click-video');
    });
  };

  function autoplay_video(elem) {
    var $get_sliders = $(this);

    $get_sliders.each(function() {
      var $slider = $(this);

      var set_event = function() {
        $slider.on('revolution.slide.onchange', function(event, data) {
          var $this = $(this),
            $active_slide = $this.find('li').eq(data.slideIndex - 1),
            $video = $active_slide.find('video'),
            autoplay = $active_slide.find('.tp-caption').attr('data-autoplay');

          if ($video.length && autoplay === 'true') {
            var video = $video.get(0);

            video.currentTime = 0;

            $slider.one('revolution.slide.onafterswap', function(event, data) {
              if (video.paused) {
                video.play();
              }
            });
          }
        });
      };

      if ($slider.hasClass('revslider-initialised')) {
        set_event();
      } else {
        $slider.one('revolution.slide.onloaded', function() {
          set_event();
        });
      }
    });
  };

  $.fn.resizeRevolution = function(options, new_rev_obj, bp_arr, revdelay) {
    if (!$(this).length || !$(options.slider).length || !options.breakpoints) return false;

    var wrapper = this,
      slider = options.slider,
      breakpoints = options.breakpoints,
      fullscreen_BP = options.fullscreen_BP || false,
      new_rev_obj = new_rev_obj || {},
      bp_arr = bp_arr || [],
      rev_obj = {
        dottedOverlay: "none",
        delay: revdelay,
        startwidth: 1920,
        hideThumbs: 200,
        hideTimerBar: "on",

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,

        navigationArrows: "none",

        touchenabled: "on",
        onHoverStop: "on",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,

        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

        keyboardNavigation: "off",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,

        spinner: "",
        h_align: "left",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",

        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        fullScreenOffsetContainer: ""
      };

    $.extend(rev_obj, new_rev_obj);

    var get_Slider = function($sliderWrapp) {
      return $sliderWrapp.find(slider);
    };

    var get_current_bp = function() {
      var wind_W = window.innerWidth;

      for (var i = 0; i < breakpoints.length; i++) {
        var bp = breakpoints[i];

        if (!breakpoints.length) return false;

        if (wind_W <= bp) {
          if (i === 0) {
            return bp;
          } else {
            if (bp > breakpoints[i - 1])
              return bp;
          }
        } else if (wind_W > bp && i === breakpoints.length - 1)
          return Infinity;
      }
      return false;
    };

    var $sliderWrappers = $(wrapper);

    $sliderWrappers.each(function() {
      var $sliderWrapp = $(this),
        $sliderInit = get_Slider($sliderWrapp),
          $sliderCopy = $sliderWrapp.clone(),
          bp = get_current_bp();

      if (!$sliderInit.length) return false;

      var start_Rev = function($sliderInit, bp) {
        var wind_W = window.innerWidth,
          rev_settings_obj = {},
          rev_screen_obj = {},
          set_rev_obj = {};

        if (fullscreen_BP) {
          var full_width = (wind_W >= fullscreen_BP) ? 'off' : 'on',
            full_screen = (wind_W >= fullscreen_BP) ? 'on' : 'off';

          rev_screen_obj = {
            fullWidth: full_width,
            fullScreen: full_screen
          };
        }

        if (bp_arr.length) {
          for (var i = 0; i < bp_arr.length; i++) {
            var this_obj = bp_arr[i];

            if (this_obj.bp && this_obj.bp.length === 2 && this_obj.bp[0] < this_obj.bp[1]) {
              var from = this_obj.bp[0],
                to = this_obj.bp[1];

              if (from <= bp && to >= bp) {
                for (var key in this_obj) {
                  if (key !== 'bp')
                    rev_settings_obj[key] = this_obj[key];
                }
              }
            }
          }
        }

        $.extend(set_rev_obj, rev_obj, rev_settings_obj, rev_screen_obj);

        $($sliderInit).show().revolution(set_rev_obj);

        $(options.functions).each(function() {
          this.call($sliderInit);
        });
      };

      start_Rev($sliderInit, bp);

      var restart_Rev = function(current_bp) {
        if (!$($sliderInit).hasClass('revslider-initialised')) return;
        bp = current_bp || 0;
        $sliderInit.revkill();
        $sliderWrapp.replaceWith($sliderCopy);
        $sliderWrapp = $sliderCopy;
        $sliderCopy = $sliderWrapp.clone();
        $sliderInit = get_Slider($sliderWrapp);
        start_Rev($sliderInit, bp);
      };

      function endResize(func) {
        var windWidth = window.innerWidth,
          interval;

        interval = setInterval(function() {
          var windWidthInterval = window.innerWidth;
          if (windWidth === windWidthInterval) {
            setTimeout(function() {
              func();
            }, 200);
          }
          clearInterval(interval);
        }, 100);
      };

      $(window).on('resize', function() {
        endResize(function() {
          var current_bp = get_current_bp();
          if (current_bp !== bp)
            restart_Rev(current_bp);
        })
      });
    });
  };

  var delay = this.data('speed'),
      fullscreen = this.attr('data-fullscreen') == 'false' ? false : 768,
      width = this.attr('data-width'),
      height = this.attr('data-height');

  if(this.hasClass('revolution-default')) {
    var respheight1 = width <= 970 ? (height || 1200) : 1000;
    var respheight2 = width <= 970 ? (height || 1200) : 1500;

    this.resizeRevolution(
      {
        slider: '.tp-banner',
        breakpoints: [414, 767, 1025],
        fullscreen_BP: fullscreen,
        functions: [
          click_to_play_video,
          autoplay_video
        ]
      },
      {
        fullScreenOffsetContainer: "header",
        navigationArrows: "true",
        startwidth: width || 1920,
        startheight: height || 800
      },
      [
        {
          bp: [0, 790],
          startheight: respheight1,
        },
        {
          bp: [0, 600],
          startheight: respheight1,
        },
        {
          bp: [0, 460],
          startheight: respheight2
        }
      ],
      delay
     );
  }
  else {
    this.resizeRevolution(
      {
        slider: '.tp-banner',
        breakpoints: [414, 767, 1025],
        fullscreen_BP: 768,
        functions: [
          click_to_play_video,
          autoplay_video
        ]
      },
      {
        fullScreenOffsetContainer: "header-static"
      }, 
      [
        {
          bp: [0, 768],
          startheight: 1300
        },
        {
          bp: [0, 1025],
          fullScreenOffsetContainer: "header"
        }
      ],
      delay
    );
  }
}

$('body').on(
  'click', '.pt-review, .pt-rating', function(e){
    if($(this).closest('.pt-review').length) {
      $('#tab_review').length && findAndViewReviews();
    }
    else{
      window.location = $(this).closest('.pt-rating').data('url') + '?tab_review';
    }
  }
)
$(document).ready(function() {
  var s = window.location.search;
  if(s.indexOf('tab_review') == -1 || $('#tab_review').length == 0) return false;
  setTimeout(findAndViewReviews, 2000);
});
function findAndViewReviews(){
  var y = $('#tab_review').offset().top;
  var d = $('.pt-stuck-nav').length && $('.pt-stuck-nav.disabled').length == 0 ? $('.pt-stuck-nav').height() : 0;
  $('html, body').animate({
    scrollTop: y-d
  }, 500);
  if($('#tab_review').hasClass('nav-link')){
    $('#tab_review').trigger('click');
  }
  else{
    !$('#tab_review').hasClass('active') && $('#tab_review').find('.pt-collapse-title').trigger('click');
  }
}

/* Search autocomplite */
$(function() {
  // Current Ajax request.
  var currentAjaxRequest = null;
  // Grabbing all search forms on the page, and adding a .search-results list to each.
  var searchForms = $('form[action="/search"]').each(function() {
    // Grabbing text input.
    var input = $(this).find('input[name="q"]');
    // Adding a list for showing search results.
    var offSet = input.position().top + input.innerHeight() + 1;
    $('<div class="search-results"></div>').appendTo($(this)).hide();
    // Listening to keyup and change on the text field within these search forms.
    input.attr('autocomplete', 'off').bind('keyup change', function() {
      // What's the search term?
      var term = $(this).val();
      // What's the search form?
      var form = $(this).closest('form');
      // What's the search URL?
      var searchURL = '/search?type=product&q=' + term;
      // What's the search results list?
      var resultsList = form.find('.search-results');
      // If that's a new term and it contains at least 3 characters.
      if (term.length > 3 && term != $(this).attr('data-old-term')) {
        // Saving old query.
        $(this).attr('data-old-term', term);
        // Killing any Ajax request that's currently being processed.
        if (currentAjaxRequest != null) currentAjaxRequest.abort();
        // Pulling results.
        currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
          // Reset results.
          resultsList.empty();
          // If we have no results.
          if(data.results_count == 0) {
            resultsList.hide();
          } else {
            var resultsList_ul = resultsList.append('<ul></ul>');
            resultsList_ul = resultsList_ul.find('ul');
            // If we have results.
            $.each(data.results, function(index, item) {
              if(index >= 6) return false;
              var link = $('<a></a>').attr('href', item.url);
              link.append('<div class="thumbnail"><img src="' + item.thumbnail + '" /></div>');
              link.append('<div class="pt-description"><div class="pt-title">' + item.title + '</div></div>');
              link.wrap('<li></li>');
              resultsList_ul.append(link.parent());
            });
            // The Ajax request will return at the most 10 results.
            // If there are more than 10, let's link to the search results page.
            if(data.results_count > 6) {
              resultsList.append('<div class="pt-view-all"><a href="' + searchURL + '">'+seeallresults+' (' + data.results_count + ')</a></div>');
            }
            resultsList.fadeIn(200);
          }
        });
      }
    });
  });
  // Clicking outside makes the results disappear.
  $('body').bind('click', function(){
    $('.search-results').hide();
  });
});

$('.pt-carousel-products-js').length || $('.pt-carousel-products').length && initProductsSlickResize();
function initProductsSlickResize(){
  $(window).resize(function(){
    $('.pt-carousel-products').length && $('.pt-carousel-products').slick('setPosition');
    $('.pt-carousel-products-js').length && $('.pt-carousel-products-js').slick('setPosition');
  })
}

$(document).ready(function() {
  if($(".menu_language_holder").length == 0) return false;
  setTimeout(wgDefault, 100);
});
function wgDefault(){
  if($(".wg-default").length == 0) return false;
  var css_link = $(".menu_language_holder").data("css");
  var wgDefault = $(".wg-default").detach().addClass("menu_language_holder");
  var $ul = $(".menu_language_holder");
  $ul.replaceWith(wgDefault);
  $('<link href="' + css_link + '" rel="stylesheet" type="text/css" media="all">').appendTo('body');
}

var tooltip = {
  html_i: '#pt-tooltip-popup',
  html_s: '<div id="pt-tooltip-popup"><span>',
  html_e: '</span><i></i></div>',
  tp_attr: '[data-tooltip]',
  tp_mod: false,
  init: function(){
    this.tp_mod = this.get_tp_mod();
    if(!this.tp_mod.length || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return false;
    this.handler();
  },
  get_tp_attr: function(){
    return this.tp_attr;
  },                     
  get_tp_mod: function(){
    return $(this.get_tp_attr());
  },
  get_w_width: function(){
    return window.innerWidth || $window.width();
  },
  get_html_obj: function(name){
    return this.html_s + name + this.html_e;
  },
  check_pr_page_swatches: function($obj){
    var swc = $obj.closest('.pt-swatches-container');
    var search = $obj.closest('.pt-search');
    var qv = $obj.closest('.pt-btn-quickview');
    var cc = $obj.closest('.pt-collapse-content');
    var wl = $obj.closest('.wlbutton-js');
    var co = $obj.closest('.compare-js');
    if(!swc.length && !search.length && !qv.length && !cc.length && !wl.length && !co.length) return false;
    return true;
  },
  handler: function(){
    var _ = this;
    $('body').on('mouseenter mouseleave', this.get_tp_attr(), function(e){
      var ww = _.get_w_width();
      if(ww <= 1024) return false;
      if (e.type === 'mouseenter') _.onHover($(this));
      if (e.type === 'mouseleave') _.offHover($(this));
    });
  },
  onHover: function($obj){
    var _ = this,
    	value = $obj.attr('data-tooltip'),
        $o = $(this.get_html_obj(value)),
        tposition = $obj.attr('data-tposition'),
        ftag = $obj.attr('data-findtag');
    
    if(value == "") return false;
    
    $body.append($o);

    var $objforsize = typeof ftag != 'undefined' ? $obj.find(ftag).first() : $obj,
        th = $o.innerHeight(),
        tw = $o.innerWidth(),
        oh = $objforsize.innerHeight(),
        ow = $objforsize.innerWidth(),
        v = $objforsize.offset().top,
        h = $objforsize.offset().left;

    tposition = typeof tposition != 'undefined' ? tposition : 'top';

    if(tposition == 'top'){
      v += - th - 20;
      h += parseInt((ow - tw)/2);
    }
    if(tposition == 'bottom'){
      v += oh + 24;
      h += parseInt((ow - tw)/2);
    }
    if(tposition == 'left'){
      v += parseInt((oh-th)/2);
      h += - tw - 24;
    }
    if(tposition == 'right'){
      v += parseInt((oh-th)/2);
      h += ow + 24;
    }

    this.showTooltip($o, h, v, tposition);
    
    if(!this.check_pr_page_swatches($obj)) return false;
    $obj.on('click.closeTooltip', function(){
      _.offHover($(this));
      $(this).unbind( "click.closeTooltip" );
    })
  },
  offHover: function($obj){
    $body.find(this.html_i).remove();
    
    if(!this.check_pr_page_swatches($obj)) return false;
    $obj.unbind( "click.closeTooltip" );
  },
  showTooltip: function($o, h, v, p){
    p = p || 'top';
    var a = {opacity: 1},
        k = p;
    if(k == 'bottom') k = 'top';
    if(k == 'right') k = 'left';

    a[k] = p == 'bottom' || p == 'right' ? '-=10px' : '+=10px';

    $o.css({'top': v, 'left' : h}).addClass('tooltip-' + p).animate(a, 200);
  }
}
$(document).ready(function() {
  tooltip.init();
});

var wl_handler = {
  action_r: 'wk-remove',
  action_a: 'wk-add',
  loader_t: 'Be patient',
  tooltip: '#pt-tooltip-popup',
  noevents: 'wkapp_load',
  init: function(){
    if(!$('.wlbutton-js').length) return false;

    var _ = this;

    $('body').on('click', '.wlbutton-js', function(e){
      e.preventDefault();
      if($(this).hasClass(_.noevents)) return false;

      if(_.getcustomerid() == ''){
        $('#ModalMessage').modal('show');
        return false;
      }

      var $this = $(this),
          data = {
            action: $this.attr('data-action'),
            text_a: $this.attr('data-add'),
            text_r: $this.attr('data-remove'),
            namespace: $this.attr('data-type'),
            key: $this.attr('data-productid'),
            value: $this.attr('data-producth'),
          };

      $this.addClass(_.noevents).attr('data-tooltip', _.loader_t).trigger('mouseenter');
      data.action == _.action_a ? _.add_handler($this, data) : _.remove_handler($this, data);
    });
  },
  getcustomerid: function(){
    return yanka_app.main_info.customerid;
  },
  getloadertext: function(){
    return yanka_app.loader_text;
  },
  getappurl: function(){
    return 'https://'+yanka_app.url;
  },
  add_handler: function($el, obj){
    var _ = this;

    $.ajax({
      type: "POST",
      url: _.getappurl()+'/api/add',
      data: $.extend({}, yanka_app.main_info, {
        namespace: obj.namespace,
        key: obj.key,
        value: obj.value
      }),
      cache: false,
      success: function(data) {
        console.log('done');

        $el.removeClass(_.noevents)
        .attr('data-action', _.action_r)
        .attr('data-tooltip', obj.text_r);

        if($el.hasClass('prpagebtn-js')){
          var s = $el.attr('data-prpage-rem');
          $el.find('span').last().text(s);
        }

        $el.is(':hover') && $el.trigger('mouseleave').trigger('mouseenter');
        
        if($('.pt-wishlist.pt-dropdown-obj').length){
          $('.pt-wishlist.pt-dropdown-obj').find('.pt-badge').each(function(){
            var i = Number($(this).text()) + 1;
            $(this).text(i).show();
          });
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        alert("error");
        $el.removeClass(_.noevents);
      }
    })
  },
  remove_handler: function($el, obj){
    var _ = this;

    $.ajax({
      type: "POST",
      url: _.getappurl()+'/api/delete',
      data: $.extend({}, yanka_app.main_info, {
        namespace: obj.namespace,
        key: obj.key,
        _method: 'DELETE'
      }),
      cache: false,
      success: function(data) {        
        console.log('done');

        if($el.closest('.wkpageinfo').length){
          $el.closest('.product-parent').parent().fadeOut(400, function() {
            $el.is(':hover') && $el.trigger('mouseleave');
            var $p = $(this).parent();
            $(this).remove();
            if(!$p.children().length){
              $p.closest('.wkpageinfo').parent().find('.wkpagenoinfo').removeClass('hide')
              .parent().find('.wkpageinfo').remove();
            }
          });
        }
        else{
          $el.removeClass(_.noevents)
          .attr('data-action', _.action_a)
          .attr('data-tooltip', obj.text_a);

          $el.is(':hover') && $el.trigger('mouseleave').trigger('mouseenter');

          if($el.hasClass('prpagebtn-js')){
            var s = $el.attr('data-prpage-add');
            $el.find('span').last().text(s);
          }
        }
        
        if($('.pt-wishlist.pt-dropdown-obj').length){
          $('.pt-wishlist.pt-dropdown-obj').find('.pt-badge').each(function(){
            var i = Math.max(0, parseInt($(this).text())-1);
            $(this).text(i);
            i == 0 && $(this).hide();
          });
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        alert("error");
        $el.removeClass(_.noevents);
      }
    })
  }
}
wl_handler.init();

var ct = {
  mainc: '.pt-compare-table-js',
  slider: $('#pt-compare-table').find('.compare-init-slider'),
  init: function(){
    if(!$(this.mainc).length) return false;
    $(window).resize(ct.resizeHandler);
  },
  handler: function(){
    var a = this.getSizes();
    this.setSizes(a);
    this.slider.slick('slickGoTo', 0);
    $('.pt-compare-table').removeAttr('style');
    a = false;
    setTimeout(function(){
      ct.replaceSliderArrows($('.pt-image-box-last').first().position().top);
    }, 200)
  },
  setSizes: function(a){
    $(this.mainc).each(function(){
      $(this).children().each(function(index){
        $(this).outerHeight(a[index], true);
      });
    })
  },
  getSizes: function(){
    var a = [];
    $(this.mainc).each(function(){
      $(this).children().each(function(index){
        a[index] = typeof a[index] != 'undefined' ? a[index] : 0;
        a[index] = Math.max(a[index], $(this).outerHeight(true));
      });
    })
    return a
  },
  resizeHandler: function(t){
    if(!$.isNumeric(t)) t = 200;
    $('.pt-compare-table').css({opacity: 0})
    $(ct.mainc).children().removeAttr('style');
    $(ct.mainc).find('.pt-btn-addtocart').removeAttr('style');
    setTimeout(function(){
      ct.handler();
    }, t);
  },
  replaceSliderArrows: function(h){
    var prev = $('.compare-init-slider').find('.slick-prev'),
        next = $('.compare-init-slider').find('.slick-next'),
        bh = prev.height(),
        c = parseInt((h-bh)/2);

    prev.addClass('showarr').css({top: c});
    next.addClass('showarr').css({top: c});
  },
  sliderinit: function(){
    this.slider.slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  },
  sliderunslick: function(){
    this.slider.slick('unslick');
  }
}
var compare = {
  search: '&view=getproduct',
  a_a: 'wk-add',
  a_d: 'wk-remove',
  space: 'comparedata',
  com_json: {},
  com_count: 0,
  com_limit: 0,
  init: function(){
    var _ = this;
    this.comparepage();

    if(!$('.compare-js').length) return false;

    this.selected();
    $(window).on( "compareevent", function(){
      var o = $('.compare-js');
      o.length && o.attr('data-action', _.a_a).attr('data-tooltip', o.attr('data-add'));
      _.setPageButtonText(o, 'data-prpage-add');
      compare.selected();
    });

    $('body').on('click', '.compare-js', function(e){
      e.preventDefault();
      var $this = $(this);
      $this.attr('data-action') == _.a_a ? compare.setdata($this) : compare.deletedata($this);
      _.setItemLengthInBadge();
    })
  },
  comparepage: function(){
    if(!$('.comparepage').length || !this.checkEmptyPage()) return false

    $('.comparepage').removeClass('hide');

    var _ = this,
        l = $.parseJSON(localStorage[compare.space]);

    this.com_limit = _.getjsonsize(l);

    $.each(l, function(index, value){
      _.getproduct(index, value);
    });
  },
  createcomparepage: function(l){
    var _ = this,
        p = $('.compare-init-slider'),
        b = $('.compareitemhtml').find('.pt-item');

    this.setOptionsTable(l, b);

    var count = Object.keys(l).length;
    $('.pt-col-item').attr('data-grid', count);

    $.each(l, function (index, value) {
      var o = b.clone();
      o.find('.pt-remove-item').attr('data-compareid', index);
      o.find('.pt-img').find('a').attr('href', value.url).find('img').attr('src', value.image);
      o.find('.pt-title').find('a').text(value.title).attr('href', value.url);

      if(value.price < value['compare price']){
        o.find('.pt-price').find('.new-price').html(value.price);
        o.find('.pt-price').find('.old-price').html(value['compare price']);
      }
      else{
        o.find('.pt-price').find('.new-price').html(value.price).removeClass('new-price');
        o.find('.pt-price').find('.old-price').remove();
      }

      if(!Boolean(value.available)){
        o.find('.co-btn-addtocart').closest("form").remove();
        o.find('.pt-label-location').children().first().remove();
      }

      o.find('form').find('input').val(index);

      $.each(value.data, function (index, value) {
        var o2 = o.find('[data-val="'+index+'"]');
        o2.length && o2.html(value);
      });

      $.each(value.options, function (index, value) {
        var o2 = o.find('[data-val="'+index+'"]');
        o2.length && o2.html(value);
      });

      p.append(o);
    });

    $('body').trigger('refreshCurrency');
    setTimeout(function(){
      $(window).trigger('resize');
      ct.sliderinit();
      $(window).trigger('resize');
    }, 500);
  },
  checkEmptyPage: function(){
    var d = localStorage[compare.space];
    if(d = d === undefined || d === "undefined"){
      $('.comparepageempty').removeClass('hide');
      $('.comparepage').remove();
      $('.compareitemhtml').remove();
      return false;
    }
    return true;
  },
  setOptionsTable: function(l, $obj){
    var t = $('.pt-value[data-val="empty"]');
    var tmp = $('.pt-col-title.pt-compare-table-js');
    var tm = $('.title-item[data-val="maintable"]');
    var a = [];

    if(!tm.length) return false;

    $.each(l, function (index, value) {
      $.each(value.options, function (index, value) {
        index != "Title" && !a.includes(index) && a.push(index);
      });
    });
    if(a.length == 0) return false;
    for(var i=0; i<a.length; i++){
      $obj.append(t.clone().attr('data-val', a[i]))
      tmp.append(tm.clone().text(a[i]));
    }
  },
  selected: function(){
    var d = localStorage[compare.space];
    if(d = d === undefined || d === "undefined") return false;

    var _ = this,
        l = $.parseJSON(localStorage[compare.space]);
    $.each(l, function (index, value) {
      var o = $('[data-compareid="'+index+'"]');
      o.length && o.attr('data-action', _.a_d).attr('data-tooltip', o.attr('data-remove'));
      _.setPageButtonText(o, 'data-prpage-rem');
    });
  },
  setPageButtonText: function(o, attr){
    if(o.hasClass('prpagebtn-js')){
      var s = o.attr(attr);
      o.find('span').last().text(s);
    }
  },
  getproduct: function(id, url){
    var _ = this,
        u = url+'?variant='+id+this.search;
    var params = {
      type: "get",
      url: u,
      success: function(data) {

        compare.com_json[id] = $.parseJSON(data);

        if(compare.com_json[id].hasOwnProperty('url')){
          compare.com_json[id]['url'] = url+'?variant='+id;
        }

        compare.checkloadwnd();
      },
      error: function(XMLHttpRequest, textStatus) {
        compare.deleteitem(id);
        compare.checkloadwnd();
        console.log('product not found');
      }
    };
    jQuery.ajax(params);
  },
  checkloadwnd:function(){
    compare.com_count += 1;
    if(compare.com_limit <= compare.com_count){
      compare.createcomparepage(compare.com_json);
    }
  },
  getjsonsize: function(value){
    return Object.keys(value).length;
  },
  setdata: function($obj){
    var _ = this,
        d = localStorage[compare.space],
        da = $obj.attr('href'),
        value = this.getid($obj);

    d = d === undefined || d === "undefined" ? false : d;

    if(d){
      d = $.parseJSON(d);
      d[value] = da;
      d = JSON.stringify(d);
    }
    else{
      var d = '{"'+value+'": "'+da+'"}';
    }

    localStorage[compare.space] = d;

    this.setPageButtonText($obj, 'data-prpage-rem');
    $obj.attr('data-action', _.a_d).attr('data-tooltip', $obj.attr('data-remove'));
    $obj.is(':hover') && $obj.trigger('mouseleave').trigger('mouseenter');
  },
  getid: function($obj){
    return $obj.attr('data-compareid');
  },
  deletedata: function($obj){
    var value = this.getid($obj),
        l = localStorage[compare.space];

    if(l === undefined || l === "undefined"){
      $obj.attr('data-action', this.a_a);
      return false;
    }
    l = $.parseJSON(l);

    this.deleteitem(value);
    var count = compare.getjsonsize(l);
    if(l.hasOwnProperty(value) && $('.comparepage').length){
      count -= 1;
      $obj.closest('.pt-item').fadeOut(function(){
        ct.sliderunslick();
        $('[data-compareid="'+value+'"]').each(function(){
          $(this).closest('.pt-item').remove();
        });
        $('.pt-col-item').attr('data-grid', count);
        ct.sliderinit();
        ct.resizeHandler(0);
        compare.checkEmptyPage();
      });
      return false;
    }

    this.setPageButtonText($obj, 'data-prpage-add');
    $obj.attr('data-action', this.a_a).attr('data-tooltip', $obj.attr('data-add'));
    $obj.is(':hover') && $obj.trigger('mouseleave').trigger('mouseenter');
  },
  deleteitem: function(value){
    var l = $.parseJSON(localStorage[compare.space])
    if(l.hasOwnProperty(value)){
      var count = compare.getjsonsize(l);
      if(count > 1){
        delete l[value];
        l = JSON.stringify(l);
        localStorage[compare.space] = l;
      }
      else{
        localStorage.removeItem(compare.space);
      }
    }
  },
  setItemLengthInBadge: function(){
    var l = localStorage[compare.space];
    if(l === undefined || l === "undefined"){
      $('.pt-compare').length && $('.pt-compare').find('.pt-badge').hide();
      return false;
    }
    l = $.parseJSON(l);
    l = Object.keys(l).length;
    $('.pt-compare').length && $('.pt-compare').find('.pt-badge').show().text(l);
  }
}
$( document ).ready(function(){
  compare.init();
  compare.setItemLengthInBadge();
  ct.init();
})


function initStickPrLeft(){
  var stickprcol = $('.stickprcol-js'),
      stickprcolheight = $('.stickprcolheight-js'),
      o = stickprcol.attr('data-o', stickprcol.offset().top);
  $('body').on('click', '.pt-collapse-title', function(){
    setTimeout(function(){
      setPosition();
    }, 200);
  })
  setTimeout(function(){
    setPosition();
  }, 500);
  $(window).resize(function(){
    stickprcol.css({top: 0});
    o = stickprcol.attr('data-o', stickprcol.offset().top);
    setTimeout(function(){
      setPosition();
    }, 100);
  }).scroll(function(){
    setPosition();
  })
  function setPosition(){
    typeof stickprcol.attr('css') !== typeof undefined && stickprcol.removeAttr('css');
    var h = stickprcol.children().length == 1 ? stickprcol.children().height() : stickprcol.height();
    if(h > $(window).height()) return false;
    if(h > stickprcolheight.height()) return false;
    
    if($(window).width() < 768) return false;
    var m = 68,
        o = stickprcol.attr('data-o'),
        p = stickprcol.position().top,
        w = $(window).scrollTop(),

        mh = stickprcolheight.height() - h - 10,

        ow = Math.max(0, w-o+m);
    ow = Math.min(mh, ow);

    stickprcol.css({top: ow});
    $('.zoomContainer').length && $('.zoomContainer').css({top: ow+m*2}); 
  }
}

function onerowActiontoInit(){
  if($('.pt-quantity').find('.pt-col-one').length){
   $('.pt-quantity').find('a').click(function(){ 
     $(this).hasClass('pt-col-one') ? onerowActiontoRight(true) : onerowActiontoBack();
   })
  }

  $(window).resize(function(){
    var b = $('.pt-product-listing').hasClass('pt-col-one');
    $(window).width() < 791 ? onerowActiontoBack() : onerowActiontoRight(b);
  })
  $('body').on('listingpageajax', function(){
    if(!$('.pt-product-listing').hasClass('pt-col-one')) return false;
    onerowActiontoRight(true);
  })
  if(!$('.pt-product-listing').hasClass('pt-col-one')) return false;
  onerowActiontoRight(true);
}
function onerowActiontoRight(isOneRow){
  isOneRow = false || isOneRow;
  if($(window).width() < 791 || !isOneRow) return false;
  $('.product-parent').each(function(){
    var o = $(this).find('.onerowactions');
    if(o.children().length) return true;
    var p = $(this).find('.pt-price').first().attr('data-par', 'backtottprice').wrap('<div class="backtottprice"/>').detach();
    $(this).find('.onerowactions').append(p);
    p = $(this).find('.pt-product-inside-hover').attr('data-par', 'backtorphov').wrap('<div class="backtorphov"/>').detach();
    $(this).find('.onerowactions').append(p);
  })
}
function onerowActiontoBack(){  
  $('.product-parent').each(function(){
    var o = $(this).find('.onerowactions');
    if(!o.children().length) return true;
    var p = o.find('.pt-price').first(),
        c = p.attr('data-par');
    $(this).find('.'+c).append(p.detach());
    $(this).find('.pt-price').first().unwrap();

    p = $(this).find('.pt-product-inside-hover');
    c = p.attr('data-par');
    $(this).find('.'+c).append(p.detach());
    $(this).find('.pt-product-inside-hover').unwrap();
  })
}

$(document).ready(function(){  
  $('.pt-col-one').length && onerowActiontoInit();
  $('.stickprcol-js').length && initStickPrLeft();

  var $body = $('body'),
      $fixedbg = $('#fixedbg');

  if(!$fixedbg.length){
    $body.append('<div id="fixedbg"></div>');
  };

  $(document).on('mouseenter mouseleave', '.pt-desctop-menu li.dropdown.pt-submenu', function(e){   
    if (typeof $('html').attr('id') === typeof undefined && $('html').attr('id') === false) return false;
    if ($('html').attr('id') == "pt-boxed") return false;
    
    var $this = $(this),
        windW = window.innerWidth,
        target = e.target;

    if (e.type === 'mouseenter' && windW > 1024) {
      ttOnHover();
    } else if (e.type === 'mouseleave' && windW > 1024) {
      ttOffHover();
    };
    function ttOnHover(e){
      if ($('.pt-stuck-nav').hasClass('stuck')){
        $('#fixedbg').stop().fadeIn(150);
      } else {
        $('#fixedbg').stop().fadeIn(150);
      };
      
      if($('.pt-menu-categories').length && $('.pt-menu-categories').hasClass('opened')){
        !$('.pt-menu-categories').parent().hasClass('categories-btn-noclick') && $('.pt-menu-categories').find('.pt-dropdown-menu').first().stop().fadeOut(150);
      }
      $('.pt-menu-categories').length && $('.pt-menu-categories').parent().hasClass('categories-btn-noclick') && $('.pt-menu-categories').parent().addClass('mainmenuishover');

      return false;
    };
    function ttOffHover(e){
      $('#fixedbg').stop().fadeOut(100);
      if($('.pt-menu-categories').length && $('.pt-menu-categories').hasClass('opened')){
        !$('.pt-menu-categories').parent().hasClass('categories-btn-noclick') && $('.pt-menu-categories').find('.pt-dropdown-menu').first().stop().fadeIn(100);
      }
      
      $('.pt-menu-categories').length && $('.pt-menu-categories').parent().hasClass('categories-btn-noclick') && $('.pt-menu-categories').parent().removeClass('mainmenuishover');
      
      return false;
    };
  });
  
  $('#pt-header').mouseleave(function(){
    setTimeout(function() {
      $('#pt-header').stop().removeAttr("style");
    }, 150);
  });
  
  $(window).resize(function() {
    $('#pt-header').stop().removeAttr("style");
    $('#fixedbg').hide();
  })
  $('body').on('showStuck hideStuck', function(){
    setTimeout(function(){
      if($('.pt-menu-categories').length && $('.pt-menu-categories').hasClass('opened')){
        !$('.pt-menu-categories').parent().hasClass('categories-btn-noclick') && $('.pt-menu-categories').find('.pt-dropdown-menu').first().stop().fadeIn();
      }

      $('.pt-menu-categories').length && $('.pt-menu-categories').parent().hasClass('categories-btn-noclick') && $('.pt-menu-categories').parent().removeClass('mainmenuishover');
    }, 160)
  })
})

$(document).ready(function(){
  setTimeout(function(){
    if($('.panel-menu').length && $('.weglot_switcher').length){
      $('.panel-menu').find('.weglot_switcher').find('a').on('click', function(){
        var id = $(this).parent().attr('id');
        $('.pt-desktop-header').find('#'+id).find('a').trigger('click');
        console.log(id);
      })
    }
  }, 100)
})