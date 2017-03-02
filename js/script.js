//Slick Slider—News
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


//Counters
/*$('.count-1').each(function () {
  var $this = $(this);
  jQuery({ Counter: 293 }).animate({ Counter: $this.text() }, {
    duration: 1000000000000000,
    easing: 'linear',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});*/
$('.count-2').each(function () {
  var $this = $(this);
  jQuery({ Counter: 9280 }).animate({ Counter: $this.text() }, {
    duration:2000000000000000,
    easing: 'linear',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
$('.count-3').each(function () {
  var $this = $(this);
  jQuery({ Counter: 4800 }).animate({ Counter: $this.text() }, {
    duration: 1000000000000000,
    easing: 'linear',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
$('.count-4').each(function () {
  var $this = $(this);
  jQuery({ Counter: 4799 }).animate({ Counter: $this.text() }, {
    duration: 1000000000000000,
    easing: 'linear',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});