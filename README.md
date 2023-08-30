![soft](https://capsule-render.vercel.app/api?type=soft&color=131E5C&text=현지예%20폭스바겐%20리뉴얼&fontSize=40&fontAlignY=55&fontColor=ffffff&height=80&animation=twinkling)

# [팀 프로젝트] 폭스바겐 웹사이트 리뉴얼 | 현지예

## ⭐ 프로젝트 소개
 ### 폭스바겐 리뉴얼
  - 폭스바겐코리아 웹사이트 리뉴얼 팀 프로젝트입니다.
  - 동적인 콘텐츠 부족과 일관성 없는 폰트 사용 등의 원인으로 사용자 편의성이 떨어지는 문제를 개선하고 폭스바겐 브랜드의 아이덴티티를 잘 드러내는 웹사이트로 바꾸어 보고자 퍼블리싱 대상으로 선정했습니다.

## 🙌 팀 구성원
| 홍현석 | 송지은 | 천예은 |
| :-----: | :-----: | :-----: |
| [@hyunseok9898](https://github.com/hyunseok9898) | [@JieunSSong](https://github.com/JieunSSong) | [@cheonYen](https://github.com/cheonYen) |

## 🗓 개발 기간
2023-08-01 ~ 2023-08-31

## 🛠 기술 스택
 - 개발 환경 : <img src="https://img.shields.io/badge/Windows10-0078D6?style=flat-square&logo=Windows10&logoColor=white"> <img src="https://img.shields.io/badge/macOS-000000?style=flat-square&logo=macOS&logoColor=white">
 - 사용 프로그램 : <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"> <img src="https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=flat-square&logo=AdobePhotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/Adobe Illustrator-FF9A00?style=flat-square&logo=AdobeIllustrator&logoColor=white"/> <img src="https://img.shields.io/badge/Adobe After Effects-9999FF?style=flat-square&logo=AdobeAfterEffects&logoColor=white"/> 
 - 소통 : <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white"/>
 - 사용된 기술 : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white"> <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white"/> <img src="https://img.shields.io/badge/Kakaomap API-FFCD00?style=flat-square&logo=Kakao&logoColor=black"/>

## 📝 주요 기능
1. 스크롤 이벤트 GSAP(The GreenSock Animation Platform)
    : 타임라인 기반의 애니메이션 자바스크립트 라이브러리인 GSAP를 사용하여 스크롤 애니메이션을 구현하였습니다.      
    * GSAP는 CSS의 keyframe과 animation 속성보다 더 정밀한 컨트롤을 할 수 있으며 가볍고 사용 방법이 쉽다는 가장 큰 장점이 있습니다. 
    
2. Swiper 슬라이드 플러그인
    : Swiper 플러그인을 활용하여
   
3. 폭스바겐 모델 리스트
    : 
4. 지역별 폭스바겐 서비스센터 찾기
    : 카카오맵 API를 활용하여 지역별 폭스바겐 서비스센터를 목록화하고 

## 페이지 구성
 ### 메인 페이지
  |섹션1 : 폭스바겐 모델 랭킹|
  |:---|
  |<img src="https://github.com/hyunseok9898/VolksWagen_Renewal/assets/139948936/ddda6809-f966-4c6d-97be-730e9cd66b54">|
  |Swiper 플러그인을 활용하여 랭킹 리스트를 슬라이드로 제작하였습니다. Up/Down 화살표 버튼 클릭 혹은 리스트 영역에서 마우스 드래그 시 슬라이드가 움직이며, 클릭한 리스트의 데이터를 가져와 왼쪽 영역에 표출될 수 있도록 구현하였습니다.|

  |섹션2 : 폭스바겐 모델 리스트|
  |:---|
  |<img src="https://github.com/hyunseok9898/VolksWagen_Renewal/assets/139948936/1ecbece1-3d33-4c2f-878b-f50954d529dc">|
  |3개의 개별 Swiper 슬라이더를 서로 연동하여 동일하게 동작될 수 있도록 스와이퍼를 제어하는 controller 파라미터를 활용해 모델명 슬라이드를 동작하면 자동차 모델과 배경이 함께 슬라이드되며 모델 슬라이드를 동작시켜도 모델명과 배경이 함께 슬라이드됩니다.|
  
  |섹션3 : 스크롤 애니메이션|
  |:---|
  |<img src="https://github.com/hyunseok9898/VolksWagen_Renewal/assets/139948936/040b8b1b-e89c-4fd9-804c-0942869c3c0e">|
  |GSAP 라이브러리를 활용하였습니다.|

   
 ### 서브 페이지 1 (전기차 충전)
  |섹션1 : 전기차 충전 방법|
  |:---|
  |<img src="https://github.com/hyunseok9898/VolksWagen_Renewal/assets/139948936/ba5f32fe-2c4a-4740-98c1-b7c08f65654b">|
  |JavaScript 스크롤 이벤트를 주어 특정 스크롤 값이 될 때 css - animation 속성이 적용되어 있는 클래스 'animation'을 추가하여 스크롤 애니메이션이 실행되도록 구현하였습니다.|
  
 ### 서브 페이지 2 (서비스센터 찾기)
  |데스크탑 버전|
  |:---|
  |<img src="https://github.com/hyunseok9898/VolksWagen_Renewal/assets/139948936/0a5884ce-0eee-4a7c-b87c-ad19326d718f">|
  |Kakaomap API 중 [키워드 검색 결과를 목록으로 표출하는 샘플](https://apis.map.kakao.com/web/sample/keywordList/)을 기반으로, select option 요소를 클릭하면 클릭한 옵션의 데이터 속성을 가져와 키워드 검색을 실시합니다. 검색된 결과 값은 'placesSearchCB'라는 콜백 함수로 받아와 'placesList' 요소의 자식 요소로 나열될 수 있도록 하였습니다. |
  
  |모바일 버전||
  |:---|---|
  |<img src="https://github.com/hyunseok9898/VolksWagen_Renewal/assets/139948936/6dd99a30-befa-4fff-90f0-158cf9b0dd58">|데스크탑에 있던 맵 요소를 삭제하고 서비스센터 목록에 토글 이벤트를 적용시켜서 사용자가 클릭 시, 지도와 상세 정보가 뜰 수 있도록 구성하였습니다. |
  
## 🚀 산출물
  - [프레젠테이션](https://docs.google.com/presentation/d/1A2UQdl01bdENRuTawteHNlcBqzPovYjvjcIu0ruZ3n4/edit?usp=sharing) 
  - [기획 - 브레인스토밍](https://www.figma.com/file/HDqJF9avXx68oub7UMVTXl/%ED%98%84%EC%A7%80%EC%98%88-%ED%8C%80%ED%94%8C-%ED%94%BC%EA%B7%B8%EC%9E%BC?type=whiteboard&node-id=0%3A1&t=zai64WWkzv1o3Arc-1) 
  - [와이어프레임 및 디자인 시안, 스타일 가이드](https://www.figma.com/file/0UdjtJ6ZKe9AiyBdA9k84T/%ED%98%84%EC%A7%80%EC%98%88-%ED%8C%80%ED%94%8C-%ED%94%BC%EA%B7%B8%EB%A7%88?type=design&node-id=0%3A1&mode=design&t=ycdW7EhUHFPQ2mb1-1)
