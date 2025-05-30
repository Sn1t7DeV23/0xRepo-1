$(function() {


  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();
  
  // Fixed Header 
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {
  
    if(scrollOffset >= introH) {
      header.addClass("fixed");
    
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var elementId = $this.data('scroll');
    var blockOffset = $(elementId).offset().top;
    
    
    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html,body").animate({
      scrollTop: blockOffset
    },500);

    
  })

  

  // Menu nav toggle 
  $("#toggle").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

    
  });


  // Collapse
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      elementId = $this.data('collapse');

    $this.toggleClass("active");
    
    
  });

  
  // Slider 

  $("[data-slider]").slick({
    infinite: true,
    slidesToShow: 1,
    slideToScroll: 1
  });




  
});

