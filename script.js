<<<<<<< HEAD
<<<<<<< HEAD
jwplayer().off('time')
jwplayer().onTime(function (callback) {
    seek_position.current = callback.position;
});


const url = new URL(window.location.href)
const lecId = url.searchParams.get("id")

function videoSpeedClick(){
    jwplayer_speed(document.querySelector('#playBackRate').value)
}

=======
jwplayer().off('time') 
// jwplayer의 time 이벤트 (리스너)를 제거
// time: 재생 중인 미디어의 현재 재생시간이 변경될 때 발생하는 이벤트

// 이벤트란? HTML 요소, 브라우저, 사용자 상호작용 등 다양한 상황에서 발생할 수 있는 동작이나 사건 (버튼 클릭, 키보드 입력, 마우스 움직임 등)
// 이벤트 리스너란? 특정 이벤트가 발생했을 때 실행되는 함수

// 비디오의 현재 재생 위치가 변경될 때 실행할 콜백 함수 정의 (초 단위로 현재 위치 계산)
// 콜백 함수를 인자로 전달 (익명 함수의 형태로 전달)
=======
jwplayer().off('time')
>>>>>>> 58acc03 (북마크 3개 시 이스터에그 추가)
jwplayer().onTime(function (callback) {
    seek_position.current = callback.position;
});


const url = new URL(window.location.href)
const lecId = url.searchParams.get("id")

function videoSpeedClick(){
    jwplayer_speed(document.querySelector('#playBackRate').value)
}

<<<<<<< HEAD
// 북마크 탭을 닫는 함수
>>>>>>> dbc217c (북마크 3개 시 이스터에그 추가)
=======
>>>>>>> 58acc03 (북마크 3개 시 이스터에그 추가)
function tabCloseClick(){
    // document.querySelector(".bookmark").style.display = "none"
    $(".bookmark").hide()
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
// 북마크 탭을 여는 함수
>>>>>>> dbc217c (북마크 3개 시 이스터에그 추가)
=======
>>>>>>> 58acc03 (북마크 3개 시 이스터에그 추가)
function tabOpenClick(){
    // document.querySelector(".bookmark").style.display = "block"
    $(".bookmark").show()
}

<<<<<<< HEAD
<<<<<<< HEAD
function bookmarkRemoveClick(idx){
    console.log($(".bookmark .mark"))
    $(".bookmark .mark")[idx].style.display = "none"
    let currentBookmark = JSON.parse(localStorage.getItem(`bookmark`))
    removedBookmark = currentBookmark[lecId].splice(idx, 1)
    localStorage.setItem(`bookmark`, JSON.stringify(currentBookmark));
}


function bookmarkClick(){
    let currentBookmark = JSON.parse(localStorage.getItem(`bookmark`))

    videoTag.pause()
    let memo = prompt("Bookmark를 알아보기 위한 메모를 적어두세요!", "memo")
    videoTag.play()

    if(memo === "") alert("memo는 꼭 적으셔야 합니다!")
    else if(memo !=  null){
        const currentTime = videoTag.currentTime
        currentBookmark[lecId].push({"time" : currentTime, "memo" : memo})
        localStorage.setItem(`bookmark`, JSON.stringify(currentBookmark));
=======
// 북마크 삭제 함수
function bookmarkRemoveClick(idx){ // idx는 삭제할 북마크의 인덱스
=======
function bookmarkRemoveClick(idx){
>>>>>>> 58acc03 (북마크 3개 시 이스터에그 추가)
    console.log($(".bookmark .mark"))
    $(".bookmark .mark")[idx].style.display = "none"
    let currentBookmark = JSON.parse(localStorage.getItem(`bookmark`))
    removedBookmark = currentBookmark[lecId].splice(idx, 1)
    localStorage.setItem(`bookmark`, JSON.stringify(currentBookmark));
}


function bookmarkClick(){
    let currentBookmark = JSON.parse(localStorage.getItem(`bookmark`))

    videoTag.pause()
    let memo = prompt("Bookmark를 알아보기 위한 메모를 적어두세요!", "memo")
    videoTag.play()

    if(memo === "") alert("memo는 꼭 적으셔야 합니다!")
    else if(memo !=  null){
        const currentTime = videoTag.currentTime
        currentBookmark[lecId].push({"time" : currentTime, "memo" : memo})
        localStorage.setItem(`bookmark`, JSON.stringify(currentBookmark));
<<<<<<< HEAD
        // 수정된 북마크(JavaScript 객체)를 다시 JSON 문자열로 변환 후 로컬 스토리지에 저장
>>>>>>> dbc217c (북마크 3개 시 이스터에그 추가)
=======
>>>>>>> 58acc03 (북마크 3개 시 이스터에그 추가)

        $(".bookmark").append(`
        <div class="mark">
        <button class="bookmark_remove" onclick="bookmarkRemoveClick(${currentBookmark[lecId].length - 1})">
        <img src="/mod/vod/pix/layer/viewer-close.png" />
        </button> <br>
        <div onclick="onTimeLineClick(${currentTime});" value=${currentTime}>
        <span class="memo">${memo}</span> <br>
        <span class="time">${parseInt(currentTime/3600)} : ${parseInt(currentTime/60%60).toString().padStart(2, "0")} :  ${parseInt(currentTime%60).toString().padStart(2, "0")}</span>
        </div></div>`)
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // jQuery를 이용하여 새로운 북마크를 화면에 추가
>>>>>>> dbc217c (북마크 3개 시 이스터에그 추가)
=======
>>>>>>> 58acc03 (북마크 3개 시 이스터에그 추가)
    }
}

function onTimeLineClick(e){
    videoTag.currentTime = e
}

$("#vod_header .vod_help").hide()
// $().insertAfter($("#vod_header .vod_close"))

$("#vod_header .vod_close").after(`
<div class="triangle" onclick="tabOpenClick()"></div>
`)

$("#vod_viewer").append(`
    <div class="bookmark">
    <button class="bookmark_close" onclick="tabCloseClick()">
    <img src="/mod/vod/pix/layer/viewer-close.png" />
    </button>
    <div>
`)

let currentBookmark = JSON.parse(localStorage.getItem(`bookmark`))
if(currentBookmark == null) currentBookmark = {}
if(currentBookmark[lecId] == undefined) currentBookmark[lecId] = []
localStorage.setItem(`bookmark`, JSON.stringify(currentBookmark));

<<<<<<< HEAD
<<<<<<< HEAD
=======
if(currentBookmark[lecId].length == 3) console.log("이스터에그를 찾으셨습니다!! -박상신-")

>>>>>>> dbc217c (북마크 3개 시 이스터에그 추가)
=======
if(currentBookmark[lecId].length == 3) console.log("이스터에그를 찾으셨습니다!! -박상신-")

>>>>>>> 1b750f8 (북마크 3개 시 이스터에크 추가)
currentBookmark[lecId].map((obj, idx)=>{
    $(".bookmark").append(`
    <div class="mark">
    <button class="bookmark_remove" onclick="bookmarkRemoveClick(${idx})">
    <img src="/mod/vod/pix/layer/viewer-close.png" />
    </button> <br>
    <div onclick="onTimeLineClick(${obj.time});" value=${obj.time}>
    <span class="memo">${obj.memo}</span> <br>
    <span class="time">${parseInt(obj.time/3600)} : ${parseInt(obj.time/60%60).toString().padStart(2, "0")} :  ${parseInt(obj.time%60).toString().padStart(2, "0")}</span>
    </div></div>`)
})

$("#vod_footer").append(`
    <div class="playBack-container">
    <button onclick="bookmarkClick()">Bookmark</button>
    <span>재생 속도 : </span>
    <input type="text" id="playBackRate" value="1">
    <button onclick="videoSpeedClick()">Apply</button>
    </div>
`)

<<<<<<< HEAD
console.log($(".bookmark .mark:nth-of-type(1)"))
=======
console.log($(".bookmark .mark:nth-of-type(1)"))
>>>>>>> dbc217c (북마크 3개 시 이스터에그 추가)
