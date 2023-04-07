// window.onload=function(){
//     alert("hi");
// };

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var NumofList = $("li").length;
        var randomChildNum = Math.floor(Math.random()*NumofList);
        $("h1").text($("li").eq(randomChildNum).text());
    });
});