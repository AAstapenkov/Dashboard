$(document).ready(function(){
    $('.header__burger, .is active').click(function(event) {
      $('.header__burger, .menu__tablet').toggleClass('active');
    });
});