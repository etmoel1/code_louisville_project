
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


// Background image parallax effect.

 $('#welcome').parallax({imageSrc: 'img/pastabackground.jpg'});




// Infinite loop

 
$(window).on("load",function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 2000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2000;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});