
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var slotAreaEl = document.querySelector(".container")

var savedTasks = JSON.parse(localStorage.getItem("savedTasks")) || {"9am": "", "10am": "", "11am": "", "12pm": "", "1pm": "",
"2pm": "", "3pm": "", "4pm": "", "5pm": ""}

var scheduler = function (i) {
    //create save button
    var saveBtn = document.createElement("button");
    saveBtn.className =  'btn_' + workHours[i];
    saveBtn.innerHTML ="<span class = 'span_" + workHours[i] + "'>save</span>";



    //creates div to hold all elements
    var slot = document.createElement("div");
    //names the div appropriately
    slot.className = 'slot_'+ workHours[i];

    //ties all 3 elements to the associated div
    $(slot).append(timeArea, textArea, saveBtn);
    $(slotAreaEl).append(slot);

    //btn cilck listener
    $(`.span_${workHours[i]}`).on( "click", function() {
        console.log(5);
        var taskTask = $('.task_' + workHours[i]).val();
        savedTasks [workHours[i]] = taskTask
        console.log(JSON.stringify(savedTasks));
        localStorage.setItem("savedTasks", JSON.stringify(savedTasks));

        
        //once this logs, save it with the associated i, 
        //save it to local storage
    });
    console.log(`span_${workHours[i]}`);

}

//rcreate 9 containers for 9 hours of the work day
for (var i = 0; i < workHours.length; i++) {

    //add time div and append the index
    var timeArea = document.createElement("article");
    var time = workHours[i];
    $(timeArea).append(time)

    //add editable text box created elsewhere
    var textArea = document.createElement("textarea");
    textArea.id = "task";
    //textArea.className =  "task";
    textArea.className =  'task_' + workHours[i];
    var text = savedTasks[workHours[i]];
    $(textArea).append(text);
    
    //$( "btn" ).addClass( "btn_"+ workHours[i] );
    
    //add save button, have it look for nearest and 
    //find the ID of the container div to save to local storage
    // var saveBtn = document.createElement("btn");


    scheduler(i);

    //edit_content();
    
    //saveBtn.className =  'btn_' + workHours[i];
    //document.querySelector(btn).className = "btn"
}


