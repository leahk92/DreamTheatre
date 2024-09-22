$(function () {
   // let slides = $('.slide');
   // let indicators = $('.indicators li');
   let slides = $(".slide"),
      indicators = $(".indicators li"),
      activeSlideIndex = 0;

   slides.eq(activeSlideIndex).addClass("active");
   indicators.eq(activeSlideIndex).addClass("active");

   indicators.click(function () {
      let index = $(this).index();
      activeSlideIndex = index;
      updateSlide();
   });

   function updateSlide() {
      slides.removeClass("active");
      indicators.removeClass("active");
      slides.eq(activeSlideIndex).addClass("active");
      indicators.eq(activeSlideIndex).addClass("active");
   }
});
