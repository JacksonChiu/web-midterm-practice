var videolist = [1,2,3,4,5]
var changept = 0
$(function(){
    
    $("#myVideo").attr("src",videolist[changept]+".mp4");
    $("#playBtn").on("click",function(){
        $("#ChannelDisplay").text(videolist[changept]);
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#SpeedDisplay").text($("#myVideo")[0].playbackRate.toFixed(2));
        $("#MuteDisplay").text($("#myVideo")[0].muted);
        $("#progressBar")[0].max =$("#myVideo")[0].duration;
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            
            $("#playBtn").text("Pause");
        }else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
        console.log($("#myVideo")[0].muted);
    });
    $("#fullBtn").on("click",function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn").on("click", downVolume);
    $("#higherVolumeBtn").on("click", upVolume);
    $("#myVideo").on("timeupdate",updateProgress);//影片一直再跑 一直updateprogress
    $("#progressBar").on("change",changeProgress);

    $("#button4").on("click", downVolume);
    $("#button3").on("click", upVolume);
    $("#button1").on("click", gofast);
    $("#button2").on("click", reverse);
    $("#button7").on("click", mute);
    $("#button5").on("click", changeright);
    $("#button6").on("click", changeleft);
});

function changeleft(){
    
    changept-=1;
    $("#myVideo").attr("src",videolist[changept]+".mp4");
    $("#myVideo")[0].play();
    ChannelDisplay.innerHTML = videolist[changept];
}

function changeright(){
    
    changept+=1;
    $("#myVideo").attr("src",videolist[changept]+".mp4");
    $("#myVideo")[0].play();
    ChannelDisplay.innerHTML = videolist[changept];
}

function gofast(){
    $("#myVideo")[0].playbackRate++;////////////////////////////////快轉功能
    SpeedDisplay.innerHTML = $("#myVideo")[0].playbackRate.toFixed(2);
}

function reverse(){
    $("#myVideo")[0].playbackRate--;////////////////////////////////快轉功能
    SpeedDisplay.innerHTML = $("#myVideo")[0].playbackRate.toFixed(2);
}

function mute(){
    if($("#myVideo")[0].muted==true)
    {
        $("#myVideo")[0].muted=false;
        MuteDisplay.innerHTML=$("#myVideo")[0].muted;
    }
    else
    {
        $("#myVideo")[0].muted=true;
        MuteDisplay.innerHTML=$("#myVideo")[0].muted;
    }
}

function downVolume() {
    var myVideo=$("#myVideo")[0];
    if(myVideo.volume==0) {
    } else if(myVideo.volume<0.1) {
        myVideo.volume=0;
    } else{
        myVideo.volume = myVideo.volume - 0.1;
    }
    volumeDisplay.innerHTML = myVideo.volume.toFixed(2);
}

function upVolume() {
    var myVideo=$("#myVideo")[0];
    if(myVideo.volume==1) {    
    } else if(myVideo.volume>0.9) {
        myVideo.volume=1;
    } else{
        myVideo.volume=myVideo.volume+0.1;
    }
    volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
}

function updateProgress(){
    $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
    $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
    $("#progressBar")[0].value =$("#myVideo")[0].currentTime;
}

function changeProgress(){
    $("#myVideo")[0].currentTime=$("#progressBar")[0].value;
}
