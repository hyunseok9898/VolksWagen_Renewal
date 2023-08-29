const breakpoints = {
  mobile: 768, //모바일 최대 창 너비
  desktop: 769, //데스크탑 최소 창 너비
};
const elements = {
  orderOfUseLi: document.querySelectorAll('.orderOfUse li'),
  chargingMethodHeading: document.querySelector('.chargingMethod .heading'),
  cmContentsImg: document.querySelectorAll('.cmContentsWrap li'),
};


/**
 * updateAnimations
 * 1) 배열을 반복하면서, 
 * 2) 스크롤 위치에 따라 요소의 클래스를 추가 또는 제거하여 
 * 목표) 애니메이션 효과를 활성화하거나 비활성화하기 
 * 
 * target: 애니메이션을 적용할 대상 요소
 * threshold: 어떤 값이나 한계점을 나타낸다. 일반적으로 특정 조건이나 상황을 판별하는 데 사용한다. updateAnimations 함수에서는 애니메이션을 활성화할 '스크롤 위치'의 임계값으로 사용한다.
*/
function updateAnimations(scrollY, isMobile) {
  console.log(window.scrollY);
  const animations = [
    { target: elements.orderOfUseLi[0], threshold: isMobile ? 0 : 0 }, // isMobile일 때 20, 그 외에는 20
    { target: elements.orderOfUseLi[1], threshold: isMobile ? 220 : 10 }, // isMobile일 때 20, 그 외에는 20
    { target: elements.orderOfUseLi[2], threshold: isMobile ? 480 : 20 }, // isMobile일 때 20, 그 외에는 20
    { target: elements.chargingMethodHeading, threshold: isMobile ? 1000 : 520 }, // isMobile일 때 500, 그 외에는 500
    { target: elements.cmContentsImg[0], threshold: isMobile ? 1150 : 550 }, // isMobile일 때 550, 그 외에는 550
    { target: elements.cmContentsImg[1], threshold: isMobile ? 1900 : 1000 }, // isMobile일 때 1000, 그 외에는 1000
    { target: elements.cmContentsImg[2], threshold: isMobile ? 2500 : 1400 }, // isMobile일 때 1500, 그 외에는 1500
  ];

  animations.forEach(({ target, threshold }, index) => { //1)
    if (!target) return; //element가 존재하지 않는 경우, 뒤의 코드를 실행하지 않고 함수를 종료

    /**
     * [변수] shouldAnimate
     * :스크롤 위치에 따라 애니메이션 활성화 여부를 결정
     * 1) isMobile이 참일 경우, scrollY가 threshold보다 클 때 애니메이션을 활성화
     * 2) index * 100: 요소의 인덱스에 따라 추가적인 오프셋을 만들어내며, 요소 간의 간격을 조정
    */
    const shouldAnimate = isMobile ? scrollY > threshold : scrollY > threshold + (index * 100);
    target.classList.toggle('animation', shouldAnimate); //2) shouldAnimate 값에 따라 요소의 클래스를 (참이면)추가, (거짓이면)제거
  });
}


/**
 * handleScroll
 * 1) 스크롤 이벤트가 발생할 때마다 호출되어 스크롤 위치, 모바일 여부를 확인해 updateAnimations 호출
 * 2) isMobile: window.innerWidth가 768 이하일 때 true
*/
function handleScroll() {
  const scrollY = window.scrollY;
  const isMobile = window.innerWidth <= breakpoints.mobile; //2)

  updateAnimations(scrollY, isMobile);
}

window.addEventListener('scroll', handleScroll); //1)
window.addEventListener('resize', handleScroll); //1)