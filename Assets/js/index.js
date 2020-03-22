$(function(){
  var previousScroll = 0;
  $(window).scroll(function () {

		var currentScroll = $(this).scrollTop();
    //console.log(currentScroll + " : " + previousScroll);
		if (currentScroll < 100) {
      console.log("TEST");
		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
			if (currentScroll > previousScroll) {
				$('#div-global').addClass('is-hidden');
			} else {
				$('#div-global').removeClass('is-hidden');
			}
			previousScroll = currentScroll;
		}
	});
})
