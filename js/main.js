$(document).ready(function() {
    
  // authorization-popup open
$(".authorization-form__enter").on("click", function () {
  $(".authorization").toggleClass("blur-active");
  $(".authorization-popup").toggleClass("authorization-popup--active");

});

  // authorization-popup open close
$(".authorization-popup__box-link, .authorization-popup__box-btn").on("click", function () {
  $(".authorization").removeClass("blur-active");
  $(".authorization-popup").removeClass("authorization-popup--active");
});


});

