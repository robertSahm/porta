//Old tweet functions

// jQuery(function($){
//   $("#ticker").tweet({
//     username: "PortaRock",
//     page: 1,
//     avatar_size: 30,
//     count: 5,
//     loading_text: "loading ..."
//   }).bind("loaded", function() {
//     var ul = $(this).find(".tweet_list");
//     var ticker = function() {
//       setTimeout(function() {
//         var top = ul.position().top;
//         var h = ul.height();
//         var incr = (h / ul.children().length);
//         var newTop = top - incr;
//         if (h + newTop <= 0) newTop = 0;
//         ul.animate( {top: newTop}, 500 );
//         ticker();
//       }, 5000);
//     };
//     ticker();
//   });
// });


