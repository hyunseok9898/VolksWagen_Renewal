/* 
  1) 메인메뉴 호버 시 서브메뉴 가시화
*/

let menuWrap = document.querySelector('nav ul.mainMenu'), //nav ul.mainMenu
    mainMenu = document.querySelectorAll('.mainMenu > li'), //nav ul.mainMenu li
    subMenu = document.querySelectorAll('.subMenu'), //nav ul.mainMenu li ul.subMenu
    headerBg = document.querySelector('.headerBg');

for(let a = 0; a < mainMenu.length; a++){
  defaultMenuClass();
  mainMenu[a].addEventListener('mouseover', function(){
    headerBg.classList.add('sub');
    menuWrap.classList.add('visible');
    subMenu[a].classList.add('visible');
  })
}
for(let a = 0; a < mainMenu.length; a++){
  mainMenu[a].addEventListener('mouseout', function(){
    headerBg.classList.remove('sub');
    menuWrap.classList.remove('visible');
    subMenu[a].classList.remove('visible'); 
  })
}

function defaultMenuClass(){
  menuWrap.classList.remove('visible');
  for(let num = 0; num < subMenu.length; num++){
    subMenu[num].classList.remove('visible');
  }
}
