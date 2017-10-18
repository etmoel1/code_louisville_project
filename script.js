jQuery(document).ready(function($){
  $("li.content").hide();
  $("ul.toggle-menu").delegate("li.toggle", "click", function() { 
  $(this).next().toggle("fast").siblings(".content").hide("fast");
    });
});

var $background = $('<div id="background"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$background.append($image);

////A caption to overlay
//$background.append($caption);

//Add overlay
$("body").append($background);

//Capture the click event on a link to an image
$("#images a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $background.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$background.click(function(){
  //Hide the overlay
  $background.hide();
});


$(function(){
  $('#button').click(function() {
    alert($('test').val());
  });
});


