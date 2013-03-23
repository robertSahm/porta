// $(function() {
// 	//if ($(".header h1 a:contains('jamaica')").length);
// 			$(".blog_post:contains('no comments')").addClass('displayNone');
// });


// ISOTOPE JOUNX
// var container = $(".blogWrapper");

// $(window).load(function(){

// 	$(container).isotope({
// 	  	// options
// 	  	itemSelector : '.blog_post',
// 	  	  containerStyle: {
// 	  	  position: 'relative',
// 	  	  overflow: 'display'
// 	  	},
// 	  animationOptions: {
// 	     duration: 750,
// 	     queue: false
// 	   },
// 	   animationEngine : 'css',
// 	    masonry: { 
// 	    	//gutterWidth: 20,
// 	    	//columnWidth: container.width() / 5 
// 	    },
// 			resizable: true,
// 	  	walayoutMode: 'straightDown'
// 	});
// 	return false;
// });

// // NAV FILTERS
// $(function() {
// 	$("a.clickMix").click(function() {
// 		$('.column3').isotope({ filter: '.tagMix' 
// 		});
// 		return false;
// 	});
// 	$("a.clickPhotoVideo").click(function() {
// 		$('.column3').isotope({ filter: '.tagPhoto' 
// 		});
// 		return false;
// 	});
// 	$('a.clickHome').click(function(){
//   	$('.column3').isotope({ filter: '*' 
// 		});
// 		return false;
// 	});
// });

// ADD CLASSES TO SPECIFIC TYPES OF BLOG POSTS
// $(function() {
// 	 if ($(".filed_in:contains('mix')").length > 0) {
// 	 	$('.blog_post').addClass('tagMix');
// 	 	return false;
// 	 };
// });

// $(function() {
// 	 if ($(".filed_in:contains('photo')").length > 0) {
// 	 	$('.blog_post').addClass('tagPhoto');
// 	 };
// });

// $(function() {
// 	 if ($(".filed_in:contains('video')").length > 0) {
// 	 	$('.blog_post').addClass('tagVideo');
// 	 };
// });

// $(function() {
// 	$('.sc-artwork-list').addClass('three columns');
// 	$('.sc-info').addClass('eight columns');
// 	$('.sc-controls').addClass('two columns');
// });



// $('.sc-waveform-container').load(function() {
//   $('.sc-player').fadeIn(500);
// });


$(function() {
	$('.sc-player').addClass('twelve columns row');
	$('ol.sc-artwork-list').addClass('three mobile-zero columns');
	$('.sc-controls').addClass('one mobile-one columns');
	$('.sc-scrubber').addClass('eight mobile-four columns');
});

$(function() {
	$('.sc-player').hide(0);
	$('iframe').hide(0);

	$(function() {
		$('iframe').delay(1000).fadeIn(1700);
	});

	$(document).bind('onPlayerInit.scPlayer', function(event){
		$('.sc-player').delay(400).fadeIn(1500);
		$('.sc-player').show(0);
	});
});

$(function() {
	if ($("aside.filed_in:contains('photo')").parent().parent().parent().addClass('tagPhoto'));
	if ($("aside.filed_in:contains('video')").parent().parent().parent().addClass('tagVideo'));
	if   ($("aside.filed_in:contains('mix')").parent().parent().parent().addClass('tagMix'));
});

$(function() {
	$('a.clickHome').click( function() {
		//$(this).css("color", "red")
	});
});

// $(function() {
// 	$('.sc-controls').addClass('twelve columns');
// });

// $(function() {
// 	$('a.datesClick').click( function() {
// 		$('.colEvents').fadeToggle(300), 
// 		$('#blog_posts').fadeToggle(300)
// 		return false;
// 	});
// });

$(function() {
	$("#fittext1").fitText(.71, { minFontSize: '17px', maxFontSize: '35px' });
	$("#fittext2").fitText(.71, { minFontSize: '17px', maxFontSize: '35px' });
	$("#fittext3").fitText(.71, { minFontSize: '10px', maxFontSize: '35px' });
	$("#fittext4").fitText(.71, { minFontSize: '10px', maxFontSize: '35px' });
	$("#fittext5").fitText(.71, { minFontSize: '17px', maxFontSize: '35px' });
	$("#fittext6").fitText(.71, { minFontSize: '17px', maxFontSize: '35px' });
	$("#fittext7").fitText(.71, { minFontSize: '17px', maxFontSize: '35px' });
});




// $(function() {
// 	$('a.sc-play').click( function() {
// 		$(this).hide(0);
// 		$('a.sc-pause').fadeToggle(500);
// 	});

// 	$('a.sc-pause').click( function() {
// 		$(this).hide(0);
// 		$('a.sc-play').fadeToggle(500);
// 	});
// });

// $(document).bind('onPlayerPlay.scPlayer', function(event){
//   $('a.sc-play').fadeOut(0);
//   $('a.sc-pause').fadeIn(0);
// });

// $(document).bind('onPlayerPause.scPlayer', function(event){
//   $('a.sc-pause').fadeOut(0);
//   $('a.sc-play').fadeIn(0);
// });

// $(function() {
// // sc-player remote control simulates the click on the play/pause button
// 	$(document).on('click','a.sc-remote-link', function(event) {
// 	  var $link = $(this),
// 	      $pause = $('.playing a.sc-pause');
	
// 	  if ($pause.length) {
// 	    $pause.click();
// 	  }else{
// 	    $('a.sc-play:first').click();
// 	  }
// 	  return false;
// 	});

// 	// update the remote buttons class, when changing player state
// 	var toggleLink = function(event) {
// 	  $('a.sc-remote-link').toggleClass('playing', event.type === 'scPlayer:onMediaPlay');
// 	};

// 	$(document)
//   	.bind('scPlayer:onMediaPlay', toggleLink)
//   	.bind('scPlayer:onMediaEnd', toggleLink)
//   	.bind('scPlayer:onMediaPause', toggleLink);

// });




//E X T R A  S H A I Z


// $(function() {
// 	$('.blog_post').find('.tagged a').css('color', "green");
// 	$('.blog_post').addClass('addedClassByatch');
// });


// if(jQuery('.tagged').attr('class') =="") {
//        alert($('#id1').attr('class'));
//   }


// $(function() {
//   $('.tagged(jamaica)')
// });


// $(function() {
// 	$('.tagged').find('a').do(function() {
// 		alert('working?');
// 	});
// });

// $(function() {
// 	$('a').click(function(){
//   	if ($('.tagged').text().indexOf('jamaica') !== -1){
//     ('.blog_post').addClass("funkyAssClass");
//   	}
// 	});
// });

// $(function() {
// 	$('a[href^="/blog/tagged/7/jamaica"]').click(function() {
// 	alert('holla, bitches');

// 	});
// });

// $(function() {
// 	$('.blog_post').find('a[href^="/blog/tagged/7/jamaica"]').each(function() {
// 		$('.blog_post').addClass('tagJamaica');
// 	});
// });

// var jamaicaTag = ('a[href^="/blog/tagged/7/jamaica"]');

// $(function() {
// 	if (
// 		$('.blog_post').find(jamaicaTag).text(function() {
// 			$('.blog_post').addClass('tagJamaica');
// 		})
// 	);
// });

// $(function() {
// 	if(
// 		$("#blog_posts > .blog_post:contains('music')").length > 0) {
// 	    $('.blog_post').addClass('tagJamaica');
// 		}
// });









