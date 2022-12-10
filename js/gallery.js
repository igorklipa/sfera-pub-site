  $(document).ready(function() {

    /* Basic Gallery */
    $('.swipebox').swipebox();

    /* Video */
    $('.swipebox-video').swipebox();

    /* Dynamic Gallery */
    $('#gallery').on('click', function(e) {
      e.preventDefault();
      $.swipebox([{
          href: 'img/DSC03404.jpg',
          title: 'My Caption'
        },
        {
          href: 'img/DSC03404.jpg',
          title: 'My Second Caption'
        }
      ]);
    });

    /* Smooth scroll */
    $('.scroll').on('click', function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 15
      }, 750); // Go
      return false;
    });
  });