// $(function() {
// 	//if ($(".header h1 a:contains('jamaica')").length);
// 			$(".blog_post:contains('no comments')").addClass('displayNone');
// });

var container = $(".column3");

$(window).load(function(){
	$(container).isotope({
	  	// options
	  	itemSelector : '.blog_post',
	  	// containerStyle: {
	  	// 	position: 'relative',
	  	// 	//overflow: 'auto'
	  	// },
	  	animationOptions: {
	      duration: 750,
	      easing: 'easeOut',
	      queue: false
	    },
	    masonry: { 
	    	gutterWidth: 20,
	    	columnWidth: container.width() / 5 
	    },
			resizable: false
	  	//layoutMode: 'masonry'
	});
	return false;
});

$(window).load(function(){
	$(function() {
		$(".isotope-item").css("right", "30");
	});
});

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
// var $container = $("#blog_posts");

// var size = function () {
//     console.log('wee!');
//     $container.isotope({
//         masonry: {
//             columnWidth: $container.width() / 3
//         }
//     });
// }

// $container.imagesLoaded(function () {
//     $container.isotope({
//         itemSelector: ".blog_post",
//         animationEngine: "jquery",
//         //.blog_postsortBy: "random",
//         resizable: true,
//         masonry: {
//             columnWidth: $container.width() / 3
//         }
//     });

//     size();
// });

// $(window).smartresize(size);
// $(size); // this is an issue, because the images haven't yet loaded!


$(function() {
	//if ($(".header h1 a:contains('music')").length);
			$(".blog_post:contains('mix')").addClass('tagMix');
});

$(function() {
	//if ($(".header h1 a:contains('music')").length);
			$(".blog_post:contains('tweet')").addClass('tagTweet');
});

$(function() {
	//if ($(".header h1 a:contains('jamaica')").length);
			$(".blog_post:contains('photo')").addClass('tagPhoto');
});

$(function() {
	//if ($(".header h1 a:contains('jamaica')").length);
			$(".blog_post:contains('video')").addClass('tagVideo');
});





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









