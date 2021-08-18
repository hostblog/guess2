_HWIO.events={},_HWIO.addEvent=function(e,t,s,n){this.events[e]||(this.events[e]={callback:[]}),"function"==typeof t&&this.events[e].callback.push({func:t,args:s}),n&&this.events[e]&&this.events[e].fired&&(s=s||{},this.events[e].args&&(s=_HWIO.assign(this.events[e].args,s)),this.fireEvent(e,s,1))},_HWIO.fireEvent=function(e,s,n){var r=this;this.events[e]?(_HWIO.events[e].args||(_HWIO.events[e].args={}),this.events[e].callback.forEach(function(e){var t;n&&e.executed||(e.executed=1,t={},(s||e.args)&&(t=_HWIO.assign({},s||{},e.args||{})),e.func.bind(r)(t))}),void 0!==this.events[e]&&(this.events[e].fired=1)):this.events[e]={fired:1,callback:[]}},_HWIO.hasEvent=function(e){return void 0!==this.events[e]},_HWIO.removeEvent=function(e){this.events[e]&&delete this.events[e]},_HWIO.isFireEvent=function(e){return!(!this.events[e]||!this.events[e].fired)},_HWIO.observer={data:{},init:function(){var r=this;"undefined"!=typeof MutationObserver?(this.observer=new MutationObserver(function(e){e.forEach(function(e){var t,s=jQuery(e.target).attr("id");if(!s&&(t=jQuery(e.target).attr("class")))for(var n in t=t.split(/[\s]+/g))if(r.data["done_observe_"+t[n]]){s=t[n];break}s&&r.data["done_observe_"+s]&&(r.data["done_observe_"+s].done||(_HWIO.fireEvent("observe_"+s,{mutation:e}),console.log("\ttrigger success",s)))})}),console.log("observer.init")):console.log("%c not support Observer","color:red")},track:function(e,t,s,n){function r(){return"string"==typeof e?jQuery(e).get(0):e}var i=this;this.observer||this.init(),"string"!=typeof e||n||(n=e),t=t||{childList:!0,attributes:!0},"string"==typeof n?n=n.replace(/^(\.|\#)/g,""):(n=("hw"+Math.random()).replace(".",""),r()&&r().classList.add(n)),_HWIO.waitForExist(function(){var e=r();e&&i.observer.observe(e,t),console.log("set observe",n,e?"success":"error")},r,1e3,10,"wait_observe_"+n),this.data["done_observe_"+n]={done:0,callback:function(e){void 0!==e&&(i.data["done_observe_"+n].done=e)}},_HWIO.addEvent("observe_"+n,function(e){s(e,i.data["done_observe_"+n].callback)},t)},is_support:function(){return"undefined"!=typeof MutationObserver}};

/*window.hpp_on_scroll=function(){}*/
!function(o){var n;jQuery(window).height();jQuery(window).scroll(function(){n&&window.clearTimeout(n),n=window.setTimeout(function(){o.hpp_on_scroll&&o.hpp_on_scroll()},500)})}(window);

//video
function hpp_fixVideoSource($) {
    if(typeof mejs=='undefined') return;
    mejs.i18n.language('vi');

    $('video source[data-src],audio source[data-src]').each(function(){
        $(this).attr('src', $(this).data('src'));
        $(this).removeAttr('data-src');

        //if error, disable it: $('video, audio')
        $(this).mediaelementplayer({
            // Do not forget to put a final slash (/)
            pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
            // this will allow the CDN to use Flash without restrictions (by default, this is set as `sameDomain`)
            shimScriptAccess: 'always'
        });
    });
    //$('.mejs-container.wp-video-shortcode').css('height','');
    setTimeout(function(){
        $('.mejs-container video').each(function(){
            $(this).closest('.mejs-container').height($(this).height());
        });
    },500)
}

function hpp_delay_video($) {    
    if(!$('.start-video').length) return;
    _HWIO._addjs('https://www.youtube.com/iframe_api');
    $('.start-video').on('click', function(){
        var id = 'v'+Math.random().toString(36).substring(7), video_wrapper = $(this).closest('.yt-video-place'), h=video_wrapper.width()*3/5,
            vid=document.createElement('div'), playNxt=$('#hpp_mPlayNxt');
        video_wrapper.height(h);
        $(this).closest('.video-fit.video').removeClass('lazy-vd');    //flatsome ux_video.php
        //_HWIO.detectMob()? 'height:150px':'height:300px'
        if(playNxt.length==0) {
            playNxt=$('<div id="hpp_mPlayNxt"></div>');
            playNxt.html('<div class="cover"></div><div class="yt-video-place embed-responsive">'+video_wrapper.html()+'</div>');
            playNxt.find('.start-video').click(function(){
                playNxt.data('pl').playVideo();playNxt.hide();video_wrapper[0].scrollIntoView();
            });
            playNxt.hide().appendTo('body');
        }
        else playNxt.find('img:eq(0)').attr('src', video_wrapper.find('img:eq(0)').attr('src'));
        
        video_wrapper.empty().append(vid);
        var player=function(){
            if(typeof YT=='object') {
                var _player=new YT.Player(vid, {
                  height: h+'px',
                  width: '100%',
                  videoId: video_wrapper.data('yt-url').replace(/\?.+/g, '').replace('https://www.youtube.com/embed/',''),
                  controls:1,
                  events: {
                    onReady: function (event) {
                        //_player.setPlaybackRate(2);
                        event.target.playVideo();
                        playNxt.data('pl', event.target);
                        var pl=event.target;setTimeout(function(){pl.playVideo();},1000)    //if safari, try a least 1s
                        setTimeout(function(){
                            //hit(event.data==YT.PlayerState.PLAYING);
                            if([YT.PlayerState.PLAYING,YT.PlayerState.BUFFERING].indexOf(window.ytevt.data)===-1) {
                                playNxt.show();
                            }
                        },2000);
                    },
                    onStateChange: function(event){
                        window.ytevt=event;//_player.stopVideo();   //test
                    }
                  }
                });
            }
            else video_wrapper.html('<iframe id="'+id+'" allowfullscreen frameborder="0" width="100%" style="height:'+(h)+'px !important" src="' + video_wrapper.data('yt-url') + '"></iframe>');
        };
        if(typeof YT=='object') player();else _HWIO.waitForExist(player, 'YT');
    });   
    
}
function hpp_run_lazy($) {
    //html tag ie: script
    var fix_attr = function(){
        this.setAttribute('src', this.getAttribute('data-src'));this.removeAttribute('data-src');
    };
    //img, div bg
    $(".h-lazy").addClass('lazy').removeClass('h-lazy');
    //$('.lazy').each(function(){lazySizes.loader.unveil(this);$(this).show();setTimeout(function(){$('.lazyloading').addClass('lazyloaded').removeClass('lazyloading')},3000);});   //no
    $('iframe[data-src]:not(.lazy)').each(fix_attr);
    
    $('script[data-src]').each(fix_attr);
    
}

_HWIO.readyjs(function($){
    if(typeof $=='undefined') $=jQuery;
    hpp_run_lazy($);

    hpp_fixVideoSource($);
    hpp_delay_video($);
    /*next-js*/
/*flatsome*/

//reinit slider $('.slider').flickity('destroy');
$('.slider').each(function(){
	if(!$(this).flickity) return;
	var opt=$(this).data('flickity-options');
	if(opt) $(this).flickity('destroy');$(this).flickity(opt||{});	
});
//jQuery('.slick-track.flex-control-nav li:nth-child(1) img').click();
$('[data-animate]').removeAttr('data-animate');
setTimeout(function(){$('.banner-layers').css('display','block');},1000);   //ux_banner

//$('#custom-css').html( $('#custom-css').html().replace('lazy-background-image','background-image') );

//flatsome ux-countdown.js | Flatsome.behaviors['ux-countdown'].attach(document)
_HWIO.waitForExist(function(){
$("[data-countdown]").each(function(){var t=$(this),s=$(this).data("countdown"),n=$(this).data("text-hour"),a=$(this).data("text-min"),e=$(this).data("text-week"),r=jQuery(this).data("text-day"),o=jQuery(this).data("text-sec"),u=jQuery(this).data("text-min-p"),d=jQuery(this).data("text-hour-p"),i=jQuery(this).data("text-week-p"),p=jQuery(this).data("text-day-p"),h=jQuery(this).data("text-sec-p"),y=jQuery(this).data("text-plural"),g=n+y,j=r+y,Q=e+y,c=a,x=o;d&&(g=d),u&&(c=u),i&&(Q=i),p&&(j=p),h&&(x=h),t.countdown(s).on("update.countdown",function(t){var s="<span>%-H<strong>%!H:"+n+","+g+";</strong></span><span>%-M<strong>%!M:"+a+","+c+";</strong></span><span>%-S<strong>%!S:"+o+","+x+";</strong></span>";0<t.offset.days&&(s="<span>%-d<strong>%!d:"+r+","+j+";</strong></span>"+s),0<t.offset.weeks&&(s="<span>%-w<strong>%!w:"+e+","+Q+";</strong></span>"+s),jQuery(this).html(t.strftime(s))}).on("finish.countdown",function(t){var s="<span>%-H<strong>%!H:"+n+","+g+";</strong></span><span>%-M<strong>%!M:"+a+","+c+";</strong></span><span>%-S<strong>%!S:"+o+","+x+";</strong></span>";jQuery(this).html(t.strftime(s))})});
},function(){return $().countdown;});
//woocommerce
$('.woocommerce-product-gallery').css({'overflow':'', 'max-height':''});
function initContactForm() {
    if(initContactForm.init || typeof wpcf7=='undefined' || typeof wpcf7.supportHtml5=='undefined') return;
    //adjust by you
    if($( 'div.wpcf7' ).length) initContactForm.init=1;else return;
    console.log('init form');
    $( 'div.wpcf7 > form' ).each( function() {
        var $form = $( this );
        wpcf7.initForm( $form );
        if ( wpcf7.cached ) {
            wpcf7.refill( $form );
        }
    } );
}
/*
jQuery( document ).ajaxSend( function( event, jqxhr, settings )
{
    if(settings.url.indexOf('wp-json/contact-form-7')!==-1) jqxhr.abort(); // aborts the ajax request
} );
*/
});

/*end-js*/
//lazyload event
document.addEventListener('lazyloaded', function(e){
	//fix google map
    if(e.target.tagName.toLowerCase()=='iframe' && e.target.getAttribute('src') && e.target.getAttribute('src').indexOf('www.google.com/maps/embed')!==-1){
        e.target.setAttribute('src',e.target.getAttribute('src')+'&__tm'+Math.random());
    }
});