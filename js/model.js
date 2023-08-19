// 배경 스와이퍼
let bgSwiper = new Swiper(".bgSwiper", {
  controller: {
    by: "container",
  },
  loop: true,
  // preloadImages: false,
});

// 타이틀 스와이퍼
let titleSwiper = new Swiper(".titleSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 16,
  controller: {
    control: bgSwiper,
  }, breakpoints: {
    768: {
      slidesPerView: 5,  //브라우저가 768보다 클 때
    },
  }
});

// 자동차 스와이퍼
let carSwiper = new Swiper('.swiper-container',{
  slidesPerView: 2,
  spaceBetween:200,
  centeredSlides: true,
  controller: {
    control: bgSwiper,
  }, breakpoints: {
    520:{
      slidesPerView : 1.5,
      spaceBetween:10
    },
    768: {
      slidesPerView:2,
      spaceBetween:50, 
    }, 
  },    
  speed: 1000, // 전환 속도 (밀리초)
  effect: 'slide',

});

// 각 스와이퍼의 슬라이드 개수
let bgSlideCount = 6;
// titleSwiper의 각 슬라이드에 클릭 이벤트 리스너 추가
let titleSlide = document.querySelectorAll('.titleSwiper .swiper-slide');
// 자동차 바퀴 애니메이션을 위해 바퀴 가져옴
let carWheel = document.querySelectorAll('.car_swiper .swiper-container .swiper-wrapper > .swiper-slide > .circle');
// 바퀴 애니메이션에서 활성화된 슬라이드 인덱스의 크기가 전에 누른거보다 크면
// 바퀴가 반대로 돌아가야함
let prevActiveSlideIndex  = 0;

// titleSwiper 누르면 다른 스와이퍼들도 같이 움직임
for(let i = 0 ; i < titleSlide.length; i++){
  titleSlide[i].addEventListener('click',function(){
    // titleSwiper의 현재 활성화된 슬라이드의 인덱스 가져오기
    let activeSlideIndex = titleSwiper.activeIndex;
    // 바퀴 애니메이션을 위해 추가
    carWheel[2*i].style.setProperty('--a', '');
    carWheel[(2*i)+1].style.setProperty('--a','');
    if(activeSlideIndex > prevActiveSlideIndex){
      setTimeout(() => {
        carWheel[2*i].style.setProperty('--a', 'rota 1s linear');
        carWheel[(2*i)+1].style.setProperty('--a', 'rota 1s linear');
      }, 5)

    }else{
      setTimeout(() => {
        carWheel[2*i].style.setProperty('--a', 'rota-back 1s linear');
        carWheel[(2*i)+1].style.setProperty('--a', 'rota-back 1s linear');
      }, 5)
    }
    
    // 이전 활성화된 슬라이드의 인덱스 갱신
    prevActiveSlideIndex = activeSlideIndex;

    // 랜덤으로 배경 보여지게 하기
    let randomIndex = Math.floor(Math.random() * bgSlideCount);
    // 클릭한 슬라이드의 인덱스에 맞게 bgSwiper와 carSwiper 이동
    carSwiper.slideTo(i);
    bgSwiper.slideTo(randomIndex);

  });
}

// 화면 크기가 768 미만일때만 버튼눌렀을때 클래스추가
let moreBtn = document.querySelector('.model .more_btn');
window.addEventListener('resize', function(){
  if(window.outerWidth < 768){
    moreBtn.addEventListener('click',function(){
      moreBtn.classList.add('click');
    });
  }
});
