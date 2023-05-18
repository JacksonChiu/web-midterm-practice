let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");
thisButton.addEventListener("click", checkdate);
var str1;

function loadServerData(){
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest=new XMLHttpRequest();
    }else{ 
        alert("No XMLHttpRequest!");
        return;
    }

    xmlHttpRequest.open("GET",str1+".txt",true);
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange=function(){
        if(xmlHttpRequest.readyState==4 && xmlHttpRequest.status==200){
            showData.innerHTML = xmlHttpRequest.responseText;
            //thisButton.style.visibility = "hidden";
        }
    }
}

function checkdate(){
    //console.log($("#DateNum").val());
    var truedate = $("#DateNum").val();
    //console.log(truedate);
    var str=truedate.split("-");
    //console.log(str);
    str1 = str.join("");
    console.log(str1);
    loadServerData();
}