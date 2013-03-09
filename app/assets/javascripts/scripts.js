// $(function() {
// 	//if ($(".header h1 a:contains('jamaica')").length);
// 			$(".blog_post:contains('no comments')").addClass('displayNone');
// });


// ISOTOPE JOUNX
var container = $(".blogWrapper");

$(window).load(function(){

	$(container).isotope({
	  	// options
	  	itemSelector : '.blog_post',
	  	  containerStyle: {
	  	  position: 'relative',
	  	  overflow: 'display'
	  	},
	  animationOptions: {
	     duration: 750,
	     queue: false
	   },
	   animationEngine : 'css',
	    masonry: { 
	    	//gutterWidth: 20,
	    	//columnWidth: container.width() / 5 
	    },
			resizable: true,
	  	walayoutMode: 'straightDown'
	});
	return false;
});

// NAV FILTERS
$(function() {
	$("a.clickMix").click(function() {
		$('.column3').isotope({ filter: '.tagMix' 
		});
		return false;
	});
	$("a.clickPhotoVideo").click(function() {
		$('.column3').isotope({ filter: '.tagPhoto' 
		});
		return false;
	});
	$('a.clickHome').click(function(){
  	$('.column3').isotope({ filter: '*' 
		});
		return false;
	});
});

// ADD CLASSES TO SPECIFIC TYPES OF BLOG POSTS
$(function() {
	$(".blog_post:contains('mix')").addClass('tagMix');
});

$(function() {
	$(".blog_post:contains('tweet')").addClass('tagTweet');
});

$(function() {
	$(".blog_post:contains('photo')").addClass('tagPhoto');
});

$(function() {
	$(".blog_post:contains('video')").addClass('tagVideo');
});


$(function() {
	$(".blog_post:contains('video')").addClass('tagVideo');
});

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









