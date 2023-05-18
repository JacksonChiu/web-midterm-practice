$(function(){
    $("button").on("click",loadServerData);
});

var str;
function loadServerData(){
    $("#showData").empty();
    str = $("#textword").val();
    console.log(str);
    $.getJSON("https://api.chucknorris.io/jokes/search?query="+str)
    .done(function(data) {
        console.log(data);
        for(var i=0;i<data.total;i++)
        {
            console.log(data.result[i].value);
            $("#showData").append(data.result[i].value);
            $("#showData").append("<hr>");
        }
        if(data.total==0)
        {
            $("#showData").append("We can't find select joke QAQ ~");
        }
        console.log("Success");
        
    })
    .fail(function(){
        $("#showData").append("We can't find select joke QAQ ~");
        console.log("Error");
    })
    .always(function(){
        console.log("Always");
    });
}