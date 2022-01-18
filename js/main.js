$(document).ready(function(){
  $('.slider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: false,
    slideWidth: 1920
  });

  $( window ).scroll(function(){
    var height= $(document).scrollTop();
    console.log(height);
    if(height > 500) {
      $(".scroll").show();
    } else {
      $(".scroll").hide();
    }
  });

  $('.marquee').marquee({
	speed: 50,
	gap: 50,
	delayBeforeStart: 0,
	direction: 'right',
	duplicated: true,
  });

});
