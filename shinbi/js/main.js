
$(document).ready(function(){
	$('#menu').mmenu();
	// Loader
	//$("body").imagesLoaded().always(function(instance){
	//	$(".loader").delay(300).fadeOut(500);
	//});
	
	
	
	// To top
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 120){
			$(".to-top").addClass("visible");
		}
		else{
			$(".to-top").removeClass("visible");
		}
	})
	$(".to-top").on("click", function(){
		$("html, body").animate({
			scrollTop: 0
		}, 800);
	});
	
	
	var coll = document.getElementsByClassName("collapsible");
	var i;
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
		  content.style.display = "none";
		} else {
		  content.style.display = "block";
		}
	  });
	} 
	
	var timelap;
	$('.item-pro').hover(function () {
			var urls = $(this).attr("data-imgs").split(",");
			var elem = $(this);
			var counter=0;
			$('.btn-pro', this).stop().fadeIn('fast');
			timelap = setInterval(function(){
				if(urls[counter] != undefined){
					$('img', elem).attr("src", urls[counter]);   
					counter++;
				}else{
					counter = 0;
				}
			},1000);
		}, function () {
			clearInterval(timelap);
			$('img',this).attr("src",$(this).attr("data-image-default"));
			$('.btn-pro').hide();
	});
	
	
	$('.tab-scoll a[href^="#"]').on( "click", function() {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 130
			}, 1000);
		}
	});
	
	
	
	/*$('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
    });*/
	
});
jQuery(function($){
    var menubar = $('.header').position();
	$(window).scroll(function (event) {
		if ($(this).scrollTop() > (menubar.top) + 100) {
			$('.header').addClass('sticky');
		} else {
			$('.header').removeClass('sticky');
		}
	});
});

jQuery(function($){
    var menubar1 = $('.header-m').position();
	$(window).scroll(function (event) {
		if ($(this).scrollTop() > (menubar1.top) + 76) {
			$('.header-m').addClass('sticky');
			$('.frm-search-m').hide();
			
		} else {
			$('.header-m').removeClass('sticky');
			$('.frm-search-m').fadeIn();
		}
	});
});

jQuery(function($){
	$(tocList).empty();
		var prevH2Item = null;                  
		var prevH2List = null;
		var index = 0;                  
		$(".content-detail h2,.content-detail h3").each(function() {                                   
		//insert an anchor to jump to, from the TOC link.            
			var anchor = "<a id='" + index + "'></a>";                 
			$(this).before(anchor);
			var li     = "<li><a href='#" + index + "'>" + $(this).text() + "</a></li>"; 
			if( $(this).is("h2") ){                                     
				prevH2List = $("<ul></ul>");                
				prevH2Item = $(li);                                     
				prevH2Item.append(prevH2List);       
				prevH2Item.appendTo("#tocList");                        
			} else {                                                    
				prevH2List.append(li);                                  
			}                                                           
			index++;                                                    
		});
		
		if(index==0)
		{
			$("#btntoc").hide();
			$(".content-toc").hide();
			
		}
});
