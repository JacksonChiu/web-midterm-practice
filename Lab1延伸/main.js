// window.onload=function(){
//     alert("hi");
// };
var temp=0

let imgageURL_Array=[
    "https://media.gq.com.tw/photos/602f8ec62426392e8b93b7da/master/w_1600%2Cc_limit/IMG_5278.JPG",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/391516/4a15cb3a501a0c4e.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/355834/b8ce15624e2ddb11.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/368221/5774f4ee0163fc26.jpg"
];

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var NumofList = $("li").length;
        var randomChildNum = Math.floor(Math.random()*NumofList);
        
        

        if(temp !== randomChildNum)
        {
            console.log(temp);
            console.log(randomChildNum);
        }
        else
        {
            randomChildNum=(randomChildNum+1)%4;  
        }
        //change img
        $("h1").text($("li").eq(randomChildNum).text());
        $("img").attr("src",imgageURL_Array[randomChildNum]);
        temp = randomChildNum;
    });
});