$(document).ready(function(){
  let endPoint = $('#sec02').offset().top + $('#sec02').outerHeight();

  /* sec02 이미지 변경 */
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#wrapper',
      start: 'top top',
      end:'+='+(endPoint),
      scrub: 0.5,
      pin: true,
    }
  });
  
  /* 선택자 변수 선언 */
  let leftBox = '.coverBox .left_box .cover_bg',
      rightBox = '.coverBox .right_box .cover_bg',
      textBox = '.cont_box.text_box';
  /* 중복 구간 변수 선언 */
  let commonOptions = { ease: 'none', duration: 0.3 },
      commonOptions2 = { ease: 'none', duration: 0.1 };

  // 초기 애니메이션 실행
  runInitialAnimation();
  
  /** 
   * runInitialAnimation
   * 1) 모바일: 윈도우 창 너비가 768 미만일 때
   * 2) 데스크탑: 768 초과
  */
  function runInitialAnimation(){
    //1)
    if(window.innerWidth < 768){
      timeline.fromTo(`${textBox} .text_1`, { opacity: 1, ease: 'none' }, { opacity: 0, ...commonOptions }, 0.5)
      .fromTo(`${textBox} .text_2`, { opacity: 0, ease: 'none' }, { opacity: 1 }, 0.5)
      .fromTo(`${textBox} .text_2`, { opacity: 1, ease: 'none' }, { opacity: 0 }, 1.5)
      .fromTo(`${textBox} .text_3`, { opacity: 0, ease: 'none' }, { opacity: 1 }, 1.5)
      .fromTo(`${textBox} .text_3`, { opacity: 1, ease: 'none' }, { opacity: 0 }, 2.0)
      .fromTo(`${textBox} .text_4`, { opacity: 0, ease: 'none' }, { opacity: 1 }, 2.0);
    } else{
      //1번 콘텐츠 시작
      timeline.fromTo(`${leftBox}.cover_bg_t, ${leftBox}.cover_bg_b`, //완쪽 커버 top, bottom
        { width: '100%', height: '0%' }, 
        { width: '100%', height: '0%', ...commonOptions }, 0.5
      )
      .fromTo(`${leftBox}.cover_bg_r, ${leftBox}.cover_bg_l`, //왼쪽 커버 right, left
        {width: '50%', height: '100%'}, 
        {width: '0%',  ...commonOptions}, 0.5
      )
      .fromTo(`${rightBox}.cover_bg_t, ${rightBox}.cover_bg_b`, //오른쪽 커버 top, bottom
        { width: '100%', height: '0%' }, 
        { height: '50%', ...commonOptions }, 0.5
      )
      .fromTo(`${rightBox}.cover_bg_r, ${rightBox}.cover_bg_l`, //오른쪽 커버 right, left
        { width: '0%', height: '100%' }, 
        { width: '50%', ...commonOptions }, 0.5
      )

      //2번 콘텐츠 시작
      .fromTo(`${textBox} .text_1`, { opacity: 1, commonOptions2 }, { opacity: 0, ...commonOptions2 }, 0.5)
      .fromTo(`${textBox} .text_2`, { opacity: 0, commonOptions2 }, { opacity: 1, ...commonOptions2 }, 0.8)

      .to('.motion_img .img_1', { opacity: 0, ease: 'none', duration: 0 }, 1)
      .fromTo(`${leftBox}.cover_bg_t, ${leftBox}.cover_bg_b`, //완쪽 커버 top, bottom
      { width: '100%', height: '0%' }, 
      { height: '50%', ...commonOptions }, 1.5
    )
    .fromTo(`${leftBox}.cover_bg_r, ${leftBox}.cover_bg_l`, //왼쪽 커버 right, left
      {width: '0%', height: '100%'}, 
      {width: '50%',  ...commonOptions}, 1.5
    )
      .fromTo(`${rightBox}.cover_bg_t, ${rightBox}.cover_bg_b`, //오른쪽 커버 top, bottom
        { width: '100%', height: '50%' }, 
        { height: '0%', ease: 'none' }, 1.5
      )
      .fromTo(`${rightBox}.cover_bg_r, ${rightBox}.cover_bg_l`, //오른쪽 커버 right, left
        { width: '0%', height: '100%' }, 
        { width: '0%', height: '100%', ease: 'none' }, 1.5
      )
  

      //3번 콘텐츠 시작
      .fromTo(`${textBox} .text_2`, { opacity: 1, commonOptions2 }, { opacity: 0, ...commonOptions2 }, 1.5)
      .fromTo(`${textBox} .text_3`, { opacity: 0, commonOptions2 }, { opacity: 1, ...commonOptions2 }, 1.8)
      .to('.motion_img .img_2', { opacity: 0, ease: 'none', duration: 0 }, 2)
      .fromTo(`${leftBox}.cover_bg_t, ${leftBox}.cover_bg_b`, //완쪽 커버 top, bottom
      { width: '100%', height: '0%' }, 
      { height: '0%', ...commonOptions }, 2.5
    )
    .fromTo(`${leftBox}.cover_bg_r, ${leftBox}.cover_bg_l`, //왼쪽 커버 right, left
      {width: '50%', height: '100%'}, 
      {width: '0%',  ...commonOptions}, 2.5
    )
      .fromTo(`${rightBox}.cover_bg_t, ${rightBox}.cover_bg_b`, //오른쪽 커버 top, bottom
        { width: '100%', height: '0%' }, 
        { height: '50%', ease: 'none' }, 2.5
      )
      .fromTo(`${rightBox}.cover_bg_r, ${rightBox}.cover_bg_l`, //오른쪽 커버 right, left
        { width: '0%', height: '100%' }, 
        { width: '50%', height: '100%', ease: 'none' }, 2.5
      )
   
      
      //4번 콘텐츠 시작
      .fromTo(`${textBox} .text_3`, { opacity: 1, commonOptions2 }, { opacity: 0, ...commonOptions2 }, 2.5)
      .fromTo(`${textBox} .text_4`, { opacity: 0, commonOptions2 }, { opacity: 1, ...commonOptions2 }, 2.8);
    }
  }


  $(window).on('resize', function() {
    runInitialAnimation();
  });
});