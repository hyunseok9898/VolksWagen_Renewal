var rankSwiper = new Swiper(".rank-swiper", {
  direction: "vertical",
  effect : 'slide',
  slidesPerView : 3,
  slideToClickedSlide: true,
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
  // console.log(itemImg);
  bigRanking.innerHTML = itemRanking.textContent;
  bigTitle.innerHTML = itemTitle.textContent;
  bigColor.innerHTML = itemColor.textContent;
  bigPrice.innerHTML = itemPrice.textContent;
  // bigImg.style.backgroundImage = itemImg.style.backgroundImage;
  //   // itemImg의 backgroundImage 값을 가져와서 bigImg에 설정
  //   bigImg.style.backgroundImage = itemImg.style.backgroundImage;
  bigImg.style.backgroundImage = `url(${itemImg.getAttribute('data-img')})`;
  // console.log(bigImg);
  
  // bigCar_textBox에 애니메이션 적용
  let bigCarTextBox = document.querySelector('.rank_bigCar .bigCar_textBox');

  bigCarTextBox.style.setProperty('--b', '');
  setTimeout(() => {
    bigCarTextBox.style.setProperty('--b', 'slideFromBottom 0.3s ease forwards');
  }, 10);

  // bigCar_textBox에 투명도 및 전환 효과 적용
  let bigCarImg = document.querySelector('.rank_bigCar .bigCar_img');
  bigCarImg.style.opacity = 0; // 일단 투명하게 설정
  bigCarImg.style.transition = 'none'; // 전환 효과 해제

  // 10ms 후에 효과 적용하여 부드럽게 나타나게 함
  setTimeout(function() {
    bigCarImg.style.transition = 'opacity 0.3s ease'; // 전환 효과 다시 설정
    bigCarImg.style.opacity = 1; // 나타나게 함
  }, 10);;


});
}