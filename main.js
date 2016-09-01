$(document).ready(function(){

  // Animate Triangles

  // $('.triangle_up').hover(function() {
  //   $(this).animate({
  //     height: '+=10px'
  //   }, 100);
  // }, function() {
  //   $(this).animate({
  //     height: '-=10px'
  //   }, 100);
  // });
  //
  // $('.triangle_down').hover(function() {
  //   $(this).animate({
  //     height: '+=10px'
  //   }, 100);
  // }, function() {
  //   $(this).animate({
  //     height: '-=10px'
  //   }, 100);
  // });


  // Animate Words in Triangle

  //Return to the top text
  // $(".fa-angle-double-up").hover(function(){
  //   $(this).text(" Return to the top");
  // },function(){
  //   $(this).html("");
  // });


  // $(".triangle_up").hover(function(){
  //   $(this).children().css("font-size","2vw","right","+=.5vw");
  // }, function(){
  //   $(this).children().css("font-size","1.5vw","right","-=.5vw");
  // });
  //
  // $(".triangle_down").hover(function(){
  //   $(this).children().css("font-size","2vw");
  // }, function(){
  //   $(this).children().css("font-size","1.5vw");
  // });

  $(".tri_about").hover(function(){
    $(this).css("font-size","2vw","right","3vw");
  }, function(){
    $(this).css("font-size","1.5vw","right","2vw");
  });


});
