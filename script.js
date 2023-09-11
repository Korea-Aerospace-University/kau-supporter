jwplayer().off('time')
jwplayer().onTime(function (callback) {
    seek_position.current = callback.position;
});


const url = new URL(window.location.href)
const lecId = url.searchParams.get("id")

function videoSpeedClick(){
    jwplayer_speed(document.querySelector('#playBackRate').value)
}

function tabCloseClick(){
    // document.querySelector(".bookmark").style.display = "none"
    $(".bookmark").hide()
}

function tabOpenClick(){
    // document.querySelector(".bookmark").style.display = "block"
    $(".bookmark").show()
}

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

        $(".bookmark").append(`
        <div class="mark">
        <button class="bookmark_remove" onclick="bookmarkRemoveClick(${currentBookmark[lecId].length - 1})">
        <img src="/mod/vod/pix/layer/viewer-close.png" />
        </button> <br>
        <div onclick="onTimeLineClick(${currentTime});" value=${currentTime}>
        <span class="memo">${memo}</span> <br>
        <span class="time">${parseInt(currentTime/3600)} : ${parseInt(currentTime/60%60).toString().padStart(2, "0")} :  ${parseInt(currentTime%60).toString().padStart(2, "0")}</span>
        </div></div>`)
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

console.log($(".bookmark .mark:nth-of-type(1)"))
