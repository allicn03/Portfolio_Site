// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
// Google maps
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.4398443, lng: -79.8912811},
    zoom: 8
  });
}

$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  //onclick eventListener
  $('#button').on('click', function() {
    var comment = $('.message-box').val();
    if ($('.message-box').val() === "") {
      $(".message-box").css("border", "2px solid red");
    }
    else {
      $('#visible-comment').html(comment);
      $('.message-box').hide();
    }
    return false;
  });

  $(".message-box").on('keyup', function(){
    var charCount = $(".message-box").val().length;
    $("#char-count").html(charCount);
    if(charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");// need it to be black
     };
  });
  //work section
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
    <div class='col-md-3'>\
      <a href='#' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
      </a>\
    </div>\
    ");
    var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };// end work for loop

  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });
});//end document ready function
