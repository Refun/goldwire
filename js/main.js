$(function() {
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(1050).fadeOut('slow'); // will fade out the white DIV that covers the website.
            
        })
   });


$(document).ready(function() {

   $('.btn-toggle').click(function() {
  $(this).find('.btn').toggleClass('active');
  if ($(this).find('.btn-primary').size() > 0) {
    $(this).find('.btn').toggleClass('btn-primary');
  }
  $(this).find('.btn').toggleClass('btn-default');
  });

  
  $('.ui.dropdown')
  .dropdown();
  $('.ui.checkbox').checkbox({debug: true});
  

  
// $('.option1').button('toggle')
// $('.no').preventDefault();
  
    });

