
var num = gA('.my-card'),
even = num / 2,
odd = (num + 1) / 2;

for(let i = 0 ; i < num.length;i++){
if(!num[0].classList.contains('active')){
num[3].classList.add('next');
 num[5].classList.add('next');
 num[4].classList.remove('next');
 num[4].classList.add('active');
 }
}
$('.my-card').click(function() {
  $slide = $('.active').width();

  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 100) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 102) { // right
    $('.active').next().trigger('click');
  }
});