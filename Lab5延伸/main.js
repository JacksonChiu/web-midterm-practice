let player;//YouTubePlayer
let currentPlay=0;//記錄目前撥到第幾首歌

//YouTubeAPIReady
function onYouTubeIframeAPIReady()
{
    player=new YT.Player("player",{
        height:"350",
        width:"600",
        videoId: playList[currentPlay],
        playerVars:{
            autoplay:0,//是否自動撥放
            controls:0,//是否顯示控制項
            showinfo:0,// 隱藏影片標題
            rel: 0,
            start:playTime[currentPlay][0],//開始秒數
            end:playTime[currentPlay][1],//結束秒數
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}

//YouTubePlayerReady

function onPlayerReady(event)
{
    // $("#tossbotton").on("click",function(){
    //     console.log("hi")
    //     if(document.getElementById("var1").innerHTML=="Heads")
    //     {
    //         player.loadVideoById({
    //             videoId:playList[1],
    //             startSeconds:playTime[1][0],
    //             endSeconds:playTime[1][1],
    //             suggestedQuality:"large"
    //         });
    //     }
    //     else
    //     {
    //         player.loadVideoById({
    //             videoId:playList[2],
    //             startSeconds:playTime[2][0],
    //             endSeconds:playTime[2][1],
    //             suggestedQuality:"large"
    //         });
    //     }
    //     $("h2").text(player.getVideoData().title);
    //     player.playVideo();
    // });
}

//PlayerStateChange
function onPlayerStateChange(event)
{
    // if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
    //     if(currentPlay<playList.length-1){
    //         currentPlay++;
    //         player.loadVideoById({
    //             videoId:playList[currentPlay],
    //             startSeconds:playTime[currentPlay][0],
    //             endSeconds:playTime[currentPlay][1],
    //             suggestedQuality:"large"
    //         });
    //     }else{
    //         currentPlay=0;
    //         player.cueVideoById({
    //             videoId:playList[currentPlay],
    //             startSeconds:playTime[currentPlay][0],
    //             endSeconds:playTime[currentPlay][1],
    //             suggestedQuality:"large"
    //         });
    //         $("h2").text("");
    //     }
    // }
    // if(event.data==1){ 
    //     $("h2").text(player.getVideoData().title);
    // }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }