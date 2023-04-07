$(function(){
    init();
});

function inputChange()
{
    var input=$("#inputDate").val();

    input = input.split('-');
    console.log(input);
    
    setMonthAndDay(input[1],input[2]);
    $("#courseTable").children().remove()
    init();
}


function inputWord()
{
    var str=$("#inputWord").val();
    if(str=="")
    {
        alert("請輸入有效活動名稱")
        return
    }
    topic.push(str);
    $("#courseTable").children().remove()
    init();
}

function init()
{
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;

    let millisecsPerDay = 24*60*60*1000;

    const options = { month: 'long', day: 'numeric' };

    let vocasion1 = new Date(2023,01,28);
    let vocasion2 = new Date(2023,03,04);
    
    for(let x=0;x<topicCount;x++)
    {
        let trueDate = new Date((startDate.getTime() + 7*x*millisecsPerDay));
        console.log(convertTimeToString(trueDate.getTime()))
        console.log(convertTimeToString(vocasion2.getTime()))
        if(convertTimeToString(trueDate.getTime())==convertTimeToString(vocasion1.getTime())||convertTimeToString(trueDate.getTime())==convertTimeToString(vocasion2.getTime()))
        {
            $("#courseTable").append(
                "<tr>"+
                `<td style="background-color: gray">${x+1}</td>`+
                `<td style="background-color: gray">${trueDate.toLocaleDateString('ZH-TW',options)}</td>`+
                `<td style="background-color: gray">${topic[x]}</td>`+
                "</tr>"
            );
            continue;
        }
        else
        {
            if(x%2==0)
            {
                $("#courseTable").append(
                    "<tr>"+
                    `<td style="background-color: red">${x+1}</td>`+
                    `<td style="background-color: red">${trueDate.toLocaleDateString('ZH-TW',options)}</td>`+
                    `<td style="background-color: red">${topic[x]}</td>`+
                    "</tr>"
                );
            }
            else
            {
                $("#courseTable").append(
                    "<tr>"+
                    `<td style="background-color: #4545FF">${x+1}</td>`+
                    `<td style="background-color: #4545FF">${trueDate.toLocaleDateString('ZH-TW',options)}</td>`+
                    `<td style="background-color: #4545FF">${topic[x]}</td>`+
                    "</tr>"
                );
            }
            
        }
        
    }
    // for(let x=5;x<9;x++)
    // {
    //     $("#courseTable").append(
    //         "<tr>"+
    //         `<td>${x+1}</td>`+
    //         `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString('ZH-TW',options)}</td>`+
    //         `<td>${"測試"}</td>`+
    //         "</tr>"
    //     );
    // }
}

function convertTimeToString(time) 
{
    const date = new Date(time);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const dateString = `${year}-${month}-${day}`;
    return dateString;
  }