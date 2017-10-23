$(document).ready(function($){
  $("li.content").hide();
  $("ul.toggle-menu").delegate("li.toggle", "click", function() { 
  $(this).next().toggle("fast").siblings(".content").hide("fast");
    });
});

//jquery lightbox for pictures

var $background = $('<div id="background"></div>');
var $image = $("<img>");

$background.append($image);

$("body").append($background);

$("#images a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $background.show();
});

$background.click(function(){
  $background.hide();
});


//alert saying email feature not set up yet


$(function(){
  $('#button').click(function() {
    alert("Sorry, but this feature has not been set up yet");
  });
});

//$(document).keypress(function(e) {
//    if(e.which == 13) {
//        alert('You pressed enter!');
//    }
//});


