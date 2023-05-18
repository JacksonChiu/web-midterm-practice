let cityData=[
    {name:"",lat:"",lon:""},
    {name:"台北",lat:25.0856513,lon:121.421409},
    {name:"台中",lat:24.1852333,lon:120.4946381},
    {name:"高雄",lat:22.7000444,lon:120.0508691},
    {name:"元智",lat:24.9703173,lon:121.2608673},
];

$(function(){
    for(let x=0;x<cityData.length;x++){
        $("#citySelect")
        .append(`<option value='${x}'>${cityData[x].name}</option>`);
    }
    $("#citySelect").on("change",loadServerData);
    $("#getLocationBtn").on("click", getLocation);
});

function loadServerData(){
    $("#result").empty();
    if(this.value==0) return;
    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    //let weatherMapAPIKey="ece04d0449d3fe204f5251e1740499fe";
    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    .done(function(data) {
        $("#result")
        .append(`<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}</p>`);
        $("#result")
        .append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
    })
    .fail(function(){ console.log("Error");})
    .always(function(){ console.log("Always");});
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("瀏覽器不支援地理定位功能。");
    }
}

function showPosition(position) {
    $("#result").empty();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("緯度：" + latitude);
    console.log("經度：" + longitude);

    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    //let weatherMapAPIKey="ece04d0449d3fe204f5251e1740499fe";
    $.getJSON(weatherAPI_URL,{
        lat:position.coords.latitude,
        lon:position.coords.longitude,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    .done(function(data) {
        $("#result").append(`<p>緯度：${position.coords.latitude}</p><p>經度：${position.coords.longitude}</p>`);
        $("#result").append(`<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}</p>`);
        $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
        
    })
    .fail(function(){ console.log("Error");})
    .always(function(){ console.log("Always");});
}