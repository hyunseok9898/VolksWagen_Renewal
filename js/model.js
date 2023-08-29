// 배경 스와이퍼
let bgSwiper = new Swiper(".bgSwiper", {
  controller: {
    by: "container",
  },
  loop: true,
  // preloadImages: false,
  speed: 1000, // 전환 속도 (밀리초)
});

// 타이틀 스와이퍼
let titleSwiper = new Swiper(".titleSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 16,
  controller: {
    control: bgSwiper
  }, breakpoints: {
    768: {
      slidesPerView: 3,  //브라우저가 768보다 클 때
    },1100:{
      slidesPerView: 5, 
    }
  }
});

// 자동차 스와이퍼
let carSwiper = new Swiper('.swiper-container',{
  slidesPerView: 2,
  spaceBetween:200,
  centeredSlides: true,
  controller: {
    control: titleSwiper
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
// let bgSlideCount = 6;
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
    // 랜덤으로 배경 보여지게 하기
    // let randomIndex = Math.floor(Math.random() * bgSlideCount);
    // 클릭한 슬라이드의 인덱스에 맞게 bgSwiper와 carSwiper 이동
    carSwiper.slideTo(i);
    bgSwiper.slideTo(i);

  });
}

let resizing = false; // 리사이즈 중인지 여부를 판단하는 변수

// 화면 크기가 768 미만일때만 버튼눌렀을때 클래스추가
let moreBtn = document.querySelector('.model .more_btn');
window.addEventListener('resize', function(){
  // 리사이징 중이라면 애니메이션 실행하지 않음
  if (!resizing) {
    carWheel[2 * prevActiveSlideIndex].classList.add('stop');
    carWheel[(2 * prevActiveSlideIndex) + 1].classList.add('stop');
  }
  if(window.outerWidth < 768){
    moreBtn.addEventListener('click',function(e){
      e.preventDefault();
      moreBtn.classList.add('click');
    });
    //반응형일때 model section 에서의 carSwiper 의 y축 위치를 알아내서
    //bgSwiper 높이에 적용
  }
  // else{
  //   if(moreBtn.classList.contains('click')){
  //     moreBtn.classList.remove('click');
  //   }
  // }
});
// 화면 크기가 768 미만일 때 carSwiper 이미지의 y축 위치를 확인하여 bgSwiper의 이미지 높이 조정
// window.addEventListener('resize', function () {
//   if (window.outerWidth < 768) {
//     let carImages = document.querySelectorAll('.car_swiper .swiper-container .swiper-wrapper > .swiper-slide > img');
//     let carImageYPosition = 0;
//     if (carImages.length > 0) {
//       // 첫 번째 이미지의 y축 위치를 가져옴
//       let carImageRect = carImages[0].getBoundingClientRect();
//       carImageYPosition = carImageRect.top;
//     }
//     let bgImages = document.querySelector('.bgSwiper');
//     bgImages.style.height = `calc(100vh - ${carImageYPosition})`;
//   } else {
//     // 화면 크기가 768 이상일 때 bgSwiper 이미지의 높이를 초기화
//     let bgImages = document.querySelector('.bgSwiper');
//     bgImages.style.height='';
//   }
// });
// 스와이퍼 슬라이드 이동 시 바퀴 애니메이션 적용
// carSwiper의 슬라이드 이동 이벤트에 바퀴 애니메이션 추가
carSwiper.on('slideChange', function () {
  // 현재 활성화된 슬라이드의 인덱스 가져오기
  let activeSlideIndex = carSwiper.activeIndex;

  carWheel[2 * activeSlideIndex].classList.remove('stop');
  carWheel[(2 * activeSlideIndex) + 1].classList.remove('stop');

  // 애니메이션 초기화를 위해 이전 애니메이션 클래스 제거
  carWheel[2 * prevActiveSlideIndex].classList.remove('rota');
  carWheel[(2 * prevActiveSlideIndex) + 1].classList.remove('rota');
  carWheel[2 * prevActiveSlideIndex].classList.remove('rota_back');
  carWheel[(2 * prevActiveSlideIndex) + 1].classList.remove('rota_back');

   // 바퀴 애니메이션을 추가
   if (activeSlideIndex > prevActiveSlideIndex) {
    console.log(activeSlideIndex, prevActiveSlideIndex);
    
    setTimeout(() => {
      carWheel[2 * activeSlideIndex].classList.add('rota');
      carWheel[(2 * activeSlideIndex) + 1].classList.add('rota');
    }, 5);

  } else {
    console.log(activeSlideIndex, prevActiveSlideIndex);
    setTimeout(() => {
      carWheel[2 * activeSlideIndex].classList.add('rota_back');
      carWheel[(2 * activeSlideIndex) + 1].classList.add('rota_back');
    }, 5);
  }

  // 이전 활성화된 슬라이드의 인덱스 갱신
  prevActiveSlideIndex = activeSlideIndex;

  // 랜덤으로 배경 보여지게 하기
  // let randomIndex = Math.floor(Math.random() * bgSlideCount);
  // bgSwiper.slideTo(randomIndex);
});

// titleSwiper 슬라이드 변경 시에 발생하는 이벤트 리스너
titleSwiper.on('slideChange', function () {
  let activeSlideIndex = titleSwiper.activeIndex;
  
  // 랜덤으로 배경 보여지게 하기
  // let randomIndex = Math.floor(Math.random() * bgSlideCount);
  // bgSwiper.slideTo(activeSlideIndex);

  // // 클릭한 슬라이드의 인덱스에 맞게 carSwiper 이동
  // carSwiper.slideTo(activeSlideIndex);
  bgSwiper.slideTo(activeSlideIndex);
  setTimeout(function () {
    carSwiper.slideTo(activeSlideIndex);
  }, 100); // 100밀리초(.1초) 후에 전환 실행
});

