const swiper = new Swiper('.swiper', {
  initialSlide:1,
  centeredSlides: true,
  loop:true,
  loopedSlides:2,
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
    }
  }
});

let artworkGrid = document.querySelector('.artwork-grid');
let msnry = new Masonry( artworkGrid, {
  // options...
  columnWidth:'.artwork-grid-sizer',
  itemSelector: '.artwork-grid-item',
});

console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$('.search-input-btn,.search-cancel-btn').click(()=>{
  if($('.bg-logo').parent()[0].localName != 'div'){
    $('.bg-logo').parent()[0].classList.toggle('hidden')
  }else{
    $('.bg-logo')[0].classList.toggle('hidden')
  }
  $('.search-cancel-btn')[0].classList.toggle('hidden')
  $('.search-input-1')[0].classList.toggle('hidden')
  $('.search-input-btn')[0].classList.toggle('hidden')
  $('.search-post-btn-1')[0].classList.toggle('hidden')
  $('.menu-btn')[0].classList.toggle('hidden')
  $('.nav-sm-item-wrapper ')[0].classList.toggle('w-full')
})

$('.menu-btn').click(()=>{
  $('.nav-sm')[0].classList.toggle('hidden')
})