var mapContainer = document.getElementById("map"), //지도 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), //지도 중심좌표
      level: 1, //지도의 확대 레벨
    };
var imageSrc = "img/sub2/marker.svg", //마커 이미지 주소
    imageSize = new kakao.maps.Size(36, 40), //마커 이미지 크기
    imageOption = { offset: new kakao.maps.Point(18, 40) }; //마커 좌표와 일치시킬 이미지 좌표를 설정
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption); //마커의 이미지 정보를 가진 마커이미지 생성
var map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성
var ps = new kakao.maps.services.Places(); //장소 검색 객체 생성
var customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  xAnchor: 0.5,
  yAnchor: 1,
  zIndex: 3
});
customOverlay.setMap(map); //커스텀 오버레이를 지도에 표시

var placesListLi = document.querySelectorAll("#placesList li"); //검색 결과 리스트
var modal = document.getElementById("myModal"); //모달

/********** 모달 창 열기 **********/
function openmodal(place){
  var modalContent = createMarkerContent(place);
  var modalContentElement = document.getElementById("modal_content");
  modalContentElement.innerHTML = modalContent; //2) 모달 창 내부에 내용 채우기
  modal.style.display = "block"; //1)모달 창 열기
}

/********** 모달 창 닫기 **********/
function hideModal(){
  modal.style.display = "none"; //1) 모달 창 닫기
}

/********** 모달 창 닫기 버튼 클릭 시, 모달 창 닫힘 **********/
function closeModalBtn(){
  var closeBtn = document.getElementsByClassName("modalCloseBtn")[0];
  closeBtn.onclick = function (){
    hideModal();
  }; 
}

/********** 표시되어 있던 커스텀 오버레이 미표시 **********/
function handleMouseOver(){
  customOverlay.setMap(map); //1) 표시되어 있던 커스텀 오버레이 미표시
  var place = this.placeData; //해당 li의 place 정보를 가져옴
  var marker = createMarker(place);
}
/********** 커스텀 오버레이 미표시 **********/
function handleMouseOut(){
  customOverlay.setMap(null); //1) 커스텀 오버레이 미표시
}


/********** modalContent 재사용 함수(li, marker 중복) **********/
function createMarkerContent(place){
  var modalContent =
    '<div class="textWrap">' +
    "<h4>" + place.place_name + "</h4>" +
    '<div class="desc">' +
    "<p><span>" + "주소</span>" + place.address_name + "</p>" +
    "<p><span>" + "전화번호</span>" + place.phone + "</p>" +
    '<p><span>장소 상세</span><a class="place_link" href="' + place.place_url + '" target="_blank">' + place.place_url + "</a></p>" +
    "</div>" +
    "</div>";
  return modalContent;
}


/********** 키워드로 장소를 검색(기본 검색 결과: 서울) **********/
ps.keywordSearch("서울특별시 폭스바겐 서비스 센터", placesSearchCB); 
// keyword: 검색할 키워드 
// callback: 검색 결과를 받을 콜백함수


/********** 장소 검색하기 **********/
function placesSearchCB(data, status){
  if(status === kakao.maps.services.Status.OK){ //1) 장소 검색 결과가 성공적으로 반환되었을 때
    var bounds = new kakao.maps.LatLngBounds(); //2) 'LatLngBounds' 객체 생성. 
        //2-1) 지도 화면에 표시하려는 영역을 의미
        //2-2) 최소한의 위도(latitude)와 경도(longitude) 값으로 구성되어 지도의 특정 부분을 나타내는데 사용
    var placesList = document.getElementById("placesList");
    placesList.innerHTML = ""; //3) 검색 결과 지우기(초기화)
    
    for(var i = 0; i < data.length; i++){
      var place = data[i];
      displayMarker(place); //4) 검색 결과 장소를 마커로 표시
      bounds.extend(new kakao.maps.LatLng(place.y, place.x)); //5) 마커의 위치를 포함하는 범위 extend(확장)
          //5-1) 'LatLngBounds' 객체 영역 확장 가능
          //5-2) 'extend' 메서드 사용 시, 현재 영역에 새로운 좌표 추가 + 전체 영역 갱신
      var li = document.createElement("li"),
          para = document.createElement("p"),
          liCount = document.querySelectorAll("#placesList li").length; //6) 장소 검색 결과 개수
      para.textContent = place.place_name; //7) li 요소의 텍스트 내용을 장소 명으로 채우기
      li.placeData = place; //8) 사용자 지정 속성(placeData)을 추가 + place 객체를 할당(place 정보 저장)
      placesList.appendChild(li);
      li.appendChild(para);
      liCount++; //9-1) 목록 개수 업데이트

      li.addEventListener("mouseover", function() {
        customOverlay.setMap(map); // 커스텀 오버레이를 지도에 표시
      });    
      li.addEventListener("mouseout", function() {
        customOverlay.setMap(null); //커스텀 오버레이를 지도에서 숨김
      }); 
      li.addEventListener("click", (function (place){
        return function (){
          openmodal(place); //모달 창 열기
          closeModalBtn(); //모달 창 닫기 버튼 클릭 시, 모달 창 닫힘
        };
      })(place));
    }
    document.getElementById("place_count").innerHTML = liCount + "개"; //9) place_count의 innerHTML에 장소 검색 결과 개수(liCount)을 넣기
    map.setBounds(bounds); //10) 지도가 해당 영역으로 이동
        //10-1) 해당 영역을 확대/축소하여 모든 경계 상자 내의 마커 또는 요소가 지도에 보이도록 함
        //10-2) 사용자가 모든 마커를 한눈에 볼 수 있도록 하는 데 유용

    addDetailDivOnSmallScreen(place); //업데이트된 장소 목록을 기준으로 addDetailDivOnSmallScreen 호출
  }
}


/********** 지도에 마커 표시하기 **********/
function displayMarker(place){
  var marker = createMarker(place);
  addDetailDivOnSmallScreen(place); //이 부분을 추가하면 createMarkerContent 함수에서 place를 사용할 수 있음
}
/********** 마커 생성 **********/
function createMarker(place){
  //1) 마커 생성
  var position = new kakao.maps.LatLng(place.y, place.x);
  var marker = new kakao.maps.Marker({
    map: map,
    position: position,
    image: markerImage,
  });

  //2)  마커에 표시할 커스텀 오버레이 생성
  //2-1) 커스텀 오버레이: 사용자의 자유로운 컨텐츠 구성 + 이벤트 제어가 가능해 별도 이벤트 메소드를 제공하지 않음 
  var customOverlay = new kakao.maps.CustomOverlay({
    content: '<div class="customWrap"><div class="customOverlay"><p>' + place.place_name + "</p></div></div>",
    position: position,
  })
  
  kakao.maps.event.addListener(marker, 'mouseover', function() {
    customOverlay.setMap(map); //커스텀 오버레이를 지도에 표시
  });
  kakao.maps.event.addListener(marker, 'mouseout', function() {
    customOverlay.setMap(null); //커스텀 오버레이를 지도에서 숨김
  });
  kakao.maps.event.addListener(marker, "click", function (){    
    customOverlay.setMap(null);
    openmodal(place); //모달 창 열기
    closeModalBtn(); //모달 창 닫기 버튼 클릭 시, 모달 창 닫힘
  });
}


/********** 선택한 지역에 따른 폭스바겐 서비스센터 검색 **********/
function searchByLocation() {
  hideModal(); //1) 검색을 시작하기 전에 모달 창 숨기기
  var selectedLocation = document.getElementById("netsido").value; //2) 선택한 지역 값은 #netsido의 value에서 가져오기
  ps.keywordSearch(selectedLocation + " 폭스바겐 서비스 센터", placesSearchCB); //3) 선택한 위치로 키워드 검색 수행
}

/********** 윈도우 창 크기가 768 미만일 때 실행 **********/
function addDetailDivOnSmallScreen(place) {
  var placesListLi = document.querySelectorAll("#placesList li");

  /* 모바일 맵 생성하기 */
  placesListLi.forEach(function (item) {
    var existingDetailDiv = item.querySelector(".detail"),
        placeData = item.placeData; //해당 li 요소의 place 정보 가져오기

    if (window.innerWidth < 768) {
      if (!existingDetailDiv) { //모바일 화면에서 detail이 없을 때
        var detailDiv = document.createElement("div"); //1) 새로운 div.detail 생성
            mapContainer = document.createElement("div"); //3) 맵을 표시할 공간 생성
        detailDiv.className = "detail"; //1-1) detailDiv의 클래스 설정
        mapContainer.id = "map_container"; //3-1) mapContainer의 id 설정

        item.appendChild(detailDiv); //4) li에 detailDiv 추가
        detailDiv.appendChild(mapContainer); //5) detailDiv에 mapContainer 추가
        detailDiv.innerHTML += createMarkerContent(placeData); //6) createMarkerContent 함수를 통해 생성한 내용 추가

        /* li를 클릭했을 때 */
        item.addEventListener("click", function () {
          var mapContainer = item.querySelector('#map_container');
          var mapOption = {
            center: new kakao.maps.LatLng(placeData.y, placeData.x),
            level: 1
          };
          var staticMap = new kakao.maps.StaticMap(mapContainer, mapOption); //3-4) 맵 생성
          
          if (this.classList.contains('open')) {
            this.classList.remove('open');
          } else {
            closeAllLi();
            this.classList.add('open');
          }
        });
      }
    } else if (existingDetailDiv) { //2) 모바일 화면 아니면서 detail이 이미 있는 경우
      item.removeChild(existingDetailDiv); //2-1) 해당 li의 detailDiv 삭제
    }
  });
}
function closeAllLi(){
  var placesListLi = document.querySelectorAll("#placesList li");
  for(let a = 0; a < placesListLi.length; a++){
    placesListLi[a].classList.remove('open'); //모든 li의 detail 높이 초기화
  } 
}

//초기 로딩 및 윈도우 크기 변경 시에도 실행되도록 이벤트 리스너 등록
window.addEventListener("load", addDetailDivOnSmallScreen); //로딩 시 실행
window.addEventListener("resize", function(){ //창 크기 변경 시 실행
  addDetailDivOnSmallScreen();
});