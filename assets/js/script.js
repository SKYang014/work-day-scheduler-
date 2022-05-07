var saveBtn = "save";
var tasks = [];
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var slotAreaEl = document.querySelector(".container")

// function appendText() {
//     var txt1 = "<div id= hour[i]>txt1</div>";        // Create text with HTML
//     var txt2 = $("<div></div>").text("txt2.");  // Create text with jQuery
//     var txt3 = document.createElement("btn");
//     txt3.innerHTML = "txt3.";         // Create text with DOM
//     $(".container").append(txt1, txt2, txt3);
    // $(".container").append(txt1);   // Append new elements
    // $("div").append(txt2);
    // $("p").after(txt3);
//}

function edit_content(){
    document.querySelectorAll('.task_' + workHours[i]).forEach(function(ele){
        ele.contentEditable = 'true';
    })
}

var scheduler = function () {
    var slot = document.createElement("div");
    slot.className = 'slot_'+ workHours[i];
    $(slot).append(timeArea, textArea, saveBtn);
    $(slotAreaEl).append(slot);
}

//rcreate 9 containers for 9 hours of the work day
for (var i = 0; i < workHours.length; i++) {

    //add time div and append the index
    var timeArea = document.createElement("article");
    var time = workHours[i];
    $(timeArea).append(time)

    //add editable text box created elsewhere
    var textArea = document.createElement("article");
    //textArea.className =  "task";
    textArea.className =  'task_' + workHours[i];
    var text = "editable tasks here";
    $(textArea).append(text);
    

    //add save button, have it look for nearest and 
    //find the ID of the container div to save to local storage
    // var saveBtn = document.createElement("btn");


    scheduler();
    edit_content();
}
//create an editable textbox
//document.getElementsByClassName('task').contentEditable = 'true';
    //$(".task").get(0).contentEditable = "true";
//

