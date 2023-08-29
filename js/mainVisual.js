let mediaViewWidth = window.matchMedia('(max-width: 768px)'),
    mainVideo = document.querySelector('.mainVisual video');

/**
 * updateVideoSource
 * 1) 윈도우 창 너비가 768px이면 모바일 비디오 
 * 1) 윈도우 창 너비가 768px가 아니면 데스크탑 비디오 
*/
function updateVideoSource() {
  if (mediaViewWidth.matches) {
    mainVideo.setAttribute('src', "img/mainVisual/main_video-m.mp4"); //1)
  } else {
    mainVideo.setAttribute('src', "img/mainVisual/main_video.mp4"); //2)
  }
}


//페이지 로드 시 mainVideo src 초기값 실행
updateVideoSource();


window.addEventListener('resize', function() {
  updateVideoSource();
});