// 배경 스와이퍼
let bgSwiper = new Swiper(".bgSwiper", {
  // controller: {
  //   by: "container",
  // },
  loop: true,
  speed: 1000,
});
// 타이틀 스와이퍼
let titleSwiper = new Swiper(".titleSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 16,
  // controller: {
  //   control: bgSwiper
  // }, 
  breakpoints: {
    768: {
      slidesPerView: 3,
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
  }, 
  breakpoints: {
    520:{
      slidesPerView : 1.5,
      spaceBetween:10
    },
    768: {
      slidesPerView:2,
      spaceBetween:50, 
    }, 
  },    
  speed: 1000,
  effect: 'slide',
});

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
    // 클릭한 슬라이드의 인덱스에 맞게 bgSwiper와 carSwiper 이동
    carSwiper.slideTo(i);
    bgSwiper.slideTo(i);
  });
}

// let resizing = false; // 리사이즈 중인지 여부를 판단하는 변수

// // 화면 크기가 768 미만일때만 버튼눌렀을때 클래스추가
// let moreBtn = document.querySelector('.model .more_btn');
// window.addEventListener('resize', function(){
//   // 리사이징 중이라면 애니메이션 실행하지 않음
//   if (!resizing) {
//     carWheel[2 * prevActiveSlideIndex].classList.add('stop');
//     carWheel[(2 * prevActiveSlideIndex) + 1].classList.add('stop');
//   }
//   if(window.outerWidth < 768){
//     moreBtn.addEventListener('click',function(e){
//       e.preventDefault();
//       moreBtn.classList.add('click');
//     });
//     //반응형일때 model section 에서의 carSwiper 의 y축 위치를 알아내서
//     //bgSwiper 높이에 적용
//   }
// });
// 화면 크기가 768 미만일때만 버튼눌렀을때 클래스추가
let moreBtn = document.querySelector('.model .more_btn');
let resizing = false; // 리사이징 상태를 나타내는 변수

window.addEventListener('resize', function() {
  resizing = true; // 리사이징 중임을 표시
  // 리사이징 중이라면 애니메이션 실행하지 않음
  carWheel[2 * prevActiveSlideIndex].classList.add('stop');
  carWheel[(2 * prevActiveSlideIndex) + 1].classList.add('stop');
  
  if (window.outerWidth < 768) {
    moreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      moreBtn.classList.add('click');
    });
    // 반응형일때 model section 에서의 carSwiper 의 y축 위치를 알아내서
    // bgSwiper 높이에 적용
  }

  // 리사이징 상태를 0.5초 후에 리셋
  setTimeout(function() {
    resizing = false;
  }, 500);
});

// 문서 전체를 클릭 이벤트로 감지
document.addEventListener('click', function(e) {
  // moreBtn을 클릭한 것이 아니라면 click 클래스 제거
  if (!moreBtn.contains(e.target)) {
    moreBtn.classList.remove('click');
  }
});



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

    setTimeout(() => {
      carWheel[2 * activeSlideIndex].classList.add('rota');
      carWheel[(2 * activeSlideIndex) + 1].classList.add('rota');
    }, 5);

  } else {
    setTimeout(() => {
      carWheel[2 * activeSlideIndex].classList.add('rota_back');
      carWheel[(2 * activeSlideIndex) + 1].classList.add('rota_back');
    }, 5);
  }

  // 이전 활성화된 슬라이드의 인덱스 갱신
  prevActiveSlideIndex = activeSlideIndex;
});

// titleSwiper 슬라이드 변경 시에 발생하는 이벤트 리스너
titleSwiper.on('slideChange', function () {
  let activeSlideIndex = titleSwiper.activeIndex;

  // // 클릭한 슬라이드의 인덱스에 맞게 carSwiper 이동
  bgSwiper.slideTo(activeSlideIndex);
  setTimeout(function () {
    carSwiper.slideTo(activeSlideIndex);
  }, 100); // 100밀리초(.1초) 후에 전환 실행
});

