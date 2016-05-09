$(document).ready(function() {

  $('body').addClass('home');

  $( "#header" ).load( "inc/header.html", function() {
    $('.umNamid, .applyFor').on('click', function(){
      $('body').removeClass();
      $('body').addClass('about');
      $(this).addClass('.leidarkerfi-regular-color');
      $('.leidarkerfi').css('background-color', '#344762');


    });

      $(".search").hide();
      $(".leita").click(function(e) {
          e.preventDefault();
          $(".search").slideToggle("slow");
      });


    // STAÐREYNDIR


    $('.umNamid').click(function() {

      $.ajax({url: "pages/about.html", success: function(result) {
        $('#content').html(result);

        $('#desktop').mouseParallax({ moveFactor: 2 });
        $('#mobile').mouseParallax({ moveFactor: 4 });
        $('#lap-top').mouseParallax({ moveFactor: 9 });
        $('#ipad').mouseParallax({ moveFactor: 5 });
        $('.screen-wrapper');

        var $animation_elements = $('.animation-element');
        var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');


// STAÐREYNDIR END



    //PARALLAX



    //PARALLAX END





    var tabs = $("#tabs");

    $("#tabs").hide();

    tabs.find("a").on("click", function(event){
      event.preventDefault();
      tabs.find(".current").removeClass("current");
      $(this).addClass("current");
      $(this.hash).show().siblings().hide();
    }).first().click();

    $(function() {
      $( "#accordion" ).accordion();
    });

  }});


});

    $('.applyFor').click(function() {

    $.ajax({url: "pages/apply.html", success: function(result) {
            $('#content').html(result);

            //jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
  if(animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50)+"%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'transform': 'scale('+scale+')'});
      next_fs.css({'left': left, 'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    },
    duration: 800,
    complete: function(){
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function(){
  return false;
});
        }});
    });


    $('.site-logo').click(function() {

          $.ajax({url: "pages/home.html", success: function(result) {
            $('#content').html(result);
              var windowHeight = $(window).height();
              $('.videoContainer').height(windowHeight);
          }});
        });

});

    $('#content').load('pages/home.html',function() {
        var windowHeight = $(window).height();
        $('.videoContainer').height(windowHeight);



        /* --------------------------
        Birta/fela mobile nav
        --------------------------- */

        $(".fa-bars").click(function(){
          $(".mobile-nav").slideToggle("slow");
        });



       var scroll_start = 0;
      var startchange = $('.arrow');
      var offset = startchange.offset();

        $(document).scroll(function() {
          if($('body').hasClass('home')) {
          scroll_start = $(this).scrollTop();
            console.log('scrolling');
          if(scroll_start > offset.top) {
            $('.leidarkerfi').css('background-color', '#344762');
        } else {
              $('.leidarkerfi').css('background-color', 'transparent');
       }
       }
      });


        $('.smoothScroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 67
    }, 500);
    return false;
});



    });

    $('#footer').load('inc/footer.html');



});





function initMap() {
  var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#44628B'},
          {visibility: 'simplified'},
          {gamma: 0.5},
          {weight: 1.5}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#DCE8F6'}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';




  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    scrollwheel: false,
    center: {lat: 64.141131, lng: -21.945531},  // Reykjavík.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  marker = new google.maps.Marker({
    icon: "images/mapmarker.png",
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {lat: 64.141244, lng: -21.924552}
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}






