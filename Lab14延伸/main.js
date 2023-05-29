$(function(){
    $("#add").on("click", addHandler);
    createTable();
    
});


function addHandler(){
    console.log($("#information").val());
    let url="https://cb1acr3swazzlchuve.azurewebsites.net/to-do/";
    $.post(url,{
        task:$("#information").val()
    })
    .done(function(msg) {
        console.log(msg);
    })
    .fail(function(msg) {
        console.log("Fail!");
    });
    $("#tablebody").empty();
    createTable();
}

function createTable(){
    let url="https://cb1acr3swazzlchuve.azurewebsites.net/to-do";
    $.getJSON(url)
    .done(function(msg){
        for(let i=0;i<msg.length;i++)
        {
            
            $("#tablebody").append(`<tr><td>${msg[i].id}</td><td><input id="taskname${msg[i].id}" value="${msg[i].task}"></td><td><button id="update${msg[i].id}">Update${msg[i].id}</button></td><td><button id="delete${msg[i].id}">Delete${msg[i].id}</td></tr>`);
            
            $(`#update${msg[i].id}`).on("click", function() {
                updateHandler(`${msg[i].id}`);
                console.log("update"+`${msg[i].id}`);
            });

            $(`#delete${msg[i].id}`).on("click", function() {
                deleteHandler(`${msg[i].id}`);
                console.log("delete"+`${msg[i].id}`);
            });
            
        }
        
        console.log(msg);
    })
    .fail(function(msg){
        console.log("Fail!");
    });

    
}

function updateHandler(index) {
    let taskValue = $(`#taskname${index}`).val();
    let url = `https://cb1acr3swazzlchuve.azurewebsites.net/to-do/${index}`;
    
    $.ajax({
        url: url,
        type: 'PUT',
        data: `task=${taskValue}`,
        success: function(data) {
            
            $("#tablebody").empty();
            createTable();
        }
    });
    
}

function deleteHandler(index) {
    let taskValue = $(`#taskname${index}`).val();
    let url=`https://cb1acr3swazzlchuve.azurewebsites.net/to-do/${index}`;

    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(data) {
            console.log(data);
            $("#tablebody").empty();
            createTable();
        }
    });
}

