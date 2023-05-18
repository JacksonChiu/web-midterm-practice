$(function(){
    $("#mybutton").on("click",getLocation);
});

function getLocation(){
    if(navigator.geolocation==undefined){
        alert("Fail to get location");
        return;
    }
    let settings ={
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(result, error, settings);
}

function result(position){
    let thisCoords=position.coords;
    console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
    $('#ifrm').attr('src', "https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q="+thisCoords.latitude+","+thisCoords.longitude+"&z=16&output=embed&t=")
    //window.location.href=`https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}

function error(err){
    alert(err);
}