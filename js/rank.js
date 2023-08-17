var rankSwiper = new Swiper(".rank-swiper", {
    direction: "vertical",
    effect : 'slide',
    slidesPerView : 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

window.addEventListener('DOMContentLoaded', () => {
  rankSwiper.slideNext();
});

// 슬라이드를 클릭 시 bigCar 부분이 바뀜
let rankSlide = document.querySelectorAll('.rank-swiper .swiper-wrapper .swiper-slide'),
    bigRanking = document.querySelector('.rank_ranking'),
    bigTitle = document.querySelector('.rank_title'),
    bigColor = document.querySelector('.rank_color'),
    bigPrice = document.querySelector('.rank_price'),
    bigImg = document.querySelector('.bigCar_img');

for ( let i = 0 ; i < rankSlide.length; i++){
  rankSlide[i].addEventListener('click',function(){
    let itemRanking = rankSlide[i].querySelector('.rank_item .item_ranking'),
        itemTitle = rankSlide[i].querySelector('.rank_item .item_title'),
        itemColor = rankSlide[i].querySelector('.rank_item .item_color'),
        itemPrice = rankSlide[i].querySelector('.rank_item .item_price'),
        itemImg = rankSlide[i].querySelector('.rank_item .item_imgBox');
    console.log(itemImg);
    bigRanking.innerHTML = itemRanking.textContent;
    bigTitle.innerHTML = itemTitle.textContent;
    bigColor.innerHTML = itemColor.textContent;
    bigPrice.innerHTML = itemPrice.textContent;
    // bigImg.style.backgroundImage = itemImg.style.backgroundImage;
    //   // itemImg의 backgroundImage 값을 가져와서 bigImg에 설정
    //   bigImg.style.backgroundImage = itemImg.style.backgroundImage;
    bigImg.style.backgroundImage = `url(${itemImg.getAttribute('data-img')})`;
    console.log(bigImg);
  });
}