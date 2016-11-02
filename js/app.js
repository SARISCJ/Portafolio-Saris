jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//open/close primary navigation
	$('.box-primary-nav-trigger').on('click', function(){
		$('.box-menu-icon').toggleClass('is-clicked'); 
		$('.box-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});

$( document ).ready(function() {
	var $aboutTitle = $(".about-myself h1");
  var $developmentWrapper = $(".development-wrapper");
  var developmentIsVisible = false;


  $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

	    if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
	      $(".about-myself h1").addClass("aboutTitleVisible");
	    } 
    
  /*###### SKILLS SECTION ######*/

    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $(".skills-bar-container li").each( function(){

        var $barContainer = $(this).find(".bar-container");
        var dataPercent = parseInt($barContainer.data("percent"));
        var elem = $(this).find(".progressbar");
        var percent = $(this).find(".percent");
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); // -- End window scroll --
});