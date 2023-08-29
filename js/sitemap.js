let hamburgerBtn = document.querySelector('.header .trigger'),
    closeBtn = document.querySelector('.sitemap .closeBtn'),
    sitemap = document.querySelector('.sitemap'),
    header = document.querySelector('.header'),
    main = document.querySelector('.main'),
    footer = document.querySelector('.footer');
let sitemapMenu = document.querySelectorAll('.sitemap .category > li .depth1'),
    categoryMenu = document.querySelectorAll('.sitemap .category > li h3 a');

let prevScrollPosition = 0; //이전 스크롤 위치를 저장할 변수

hamburgerBtn.addEventListener('click', change2Sitemap)
closeBtn.addEventListener('click', change2Sitemap)

/** 
 * change2Sitemap
 * :header .trigger와 sitemap .closeBtn의 클릭이벤트
*/
function change2Sitemap(){
  let notClose = !header.classList.contains('close');

  // 헤더에 'close' 클래스가 없으면 현재 스크롤 위치를 변수에 저장하고, 거짓이면 0
  prevScrollPosition = notClose ? window.scrollY : prevScrollPosition;
  

  // 헤더에 'close' 클래스가 없으면 배열 안의 요소들에게 'close' 클래스 추가
  [header, main, footer].forEach(Element => {
    Element.classList.toggle('close', notClose);
  })
  sitemap.classList.toggle('visible', notClose);


  //헤더에 'close' 클래스가 있으면
  if(!notClose){
    window.scrollTo(0, prevScrollPosition);// 저장된 이전 스크롤 위치로 자동 스크롤

    if(!sitemap.classList.contains('visible')){//sitemap을 닫았을 때 
      document.querySelectorAll('.sitemap .category > li > ul > li.clickable.open')
        .forEach(element => element.classList.remove('open')); //열려있던 모든 토글 메뉴 닫기
    }
  }
}


/** 
 * clickDepth1
 * 1) depth1[idx]의 li.clickable 요소를 변수로 선언
 * 2) li.clickable[idx]의 depth2를 변수로 선언
 * 3) 변수 clickableDepth1를 클릭할 때
 * 4) 클릭한 요소에 open 클래스가 없으면 클래스 추가
 * 5) 클릭한 요소에 open 클래스가 있다면 클래스 삭제
*/
clickDepth1();
function clickDepth1(){
  for(let b = 0; b < sitemapMenu.length; b++){
    let clickableDepth1 = sitemapMenu[b].querySelectorAll('.clickable'); //1)

    for(let bb = 0; bb < clickableDepth1.length; bb++){
      //let depth2Menu = clickableDepth1[bb].querySelector('.depth2'); 2)

      clickableDepth1[bb].addEventListener('click', function(e){ //3)
        e.preventDefault();
        if(!this.classList.contains('open')){ //4)
          closeAllDepth1(); //0)
          this.classList.add('open'); //4)
        }else{
          this.classList.remove('open'); //5)
        }
      })
    }

    /** 
      * closeAllDepth1
      * 0) 초기화. 모두 닫기
    */
    function closeAllDepth1(){
      for(let num = 0; num < clickableDepth1.length; num++){
          clickableDepth1[num].classList.remove('open');
      }
    }
  }
}


for(let c = 0; c < categoryMenu.length; c++){
  let categoryParent = categoryMenu[c].parentNode.parentNode
      categoryParentAll = document.querySelectorAll('.sitemap .category > li');
  
  categoryMenu[c].addEventListener('click', function(e){
    e.preventDefault();
    if(!categoryParent.classList.contains('open')){
      for(let cc = 0; cc < categoryParentAll.length; cc++){
        categoryParentAll[cc].classList.remove('open');
      }

      categoryParent.classList.add('open');
    }else{
      categoryParent.classList.remove('open');
    }
  })
}


// .sitemap에 visible 클래스가 추가될 때 스크롤을 맨 위로 조정하는 함수
function scrollToTopOnVisible() {
  if (sitemap.classList.contains('visible')) {
    window.scrollTo({ top: 0, behavior: 'auto' }); // 맨 위로 스크롤 (부드럽게X)
  }
}
// .sitemap의 클래스 변경을 감시하고 스크롤 조정 함수 호출
const observer = new MutationObserver(scrollToTopOnVisible);

// .sitemap의 클래스 변경을 감지하기 위한 설정
const config = { attributes: true, attributeFilter: ['class'] };

// 감시를 시작하고 설정을 적용
observer.observe(sitemap, config);