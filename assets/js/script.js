
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timeId = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var slotAreaEl = document.querySelector(".container")
var savedTasks = JSON.parse(localStorage.getItem("savedTasks")) || {"9am": "", "10am": "", "11am": "", "12pm": "", "1pm": "",
"2pm": "", "3pm": "", "4pm": "", "5pm": ""}

// var time = moment() gives you current time. no format required.
var currentTime = (moment().format("HH:mm a"));


var currentDay = document.getElementById('currentDay');
currentDay.innerHTML = moment().format("MMM Do YY");  

var scheduler = function (i) {
    //create save button
    var saveBtn = document.createElement("button");
    saveBtn.className =  'btn_' + workHours[i];
    $(saveBtn).addClass("col-1 saveBtn");
    saveBtn.innerHTML ="<span class = 'oi oi-pin span_" + workHours[i] + "'></span>";

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
    });
    //console.log(`span_${workHours[i]}`);



    var auditTask = function() {
        const colors = document.getElementsByClassName("color");
        let currentHour = parseInt(moment().format('H'));
        //let currentHour = 13;
        //console.log(colors);
        
        Array.from(colors).forEach(color => {
        let
            colorIdString = color.id,colorHour;
            //console.log(colorIdString);
        if (colorIdString) {
            colorHour = parseInt(colorIdString);
            //console.log(colorIdString);
        }

        if(colorHour) {
            $(textArea).removeClass("present past future");
            console.log(colorHour);
            console.log(currentHour);
            // Compares row id to current hour and sets color accordingly
            if (currentHour === colorHour) {
                $(textArea).addClass("present");
            } else if (currentHour > colorHour && currentHour !== colorHour) {
                $(textArea).addClass("past");
            } else if (currentHour < colorHour && currentHour !== colorHour) {
                $(textArea).addClass("future");
            } 
        }
        });

        // if (moment(currentTime).isAfter('09:00 am')) {
        //     $(textArea).addClass("past");
        // }
    
        // if (moment(time).isBefore('09:00 am')) {
        //     $(textArea).addClass("future");
        // }
    
        // else {
        //     console.log();
        //     $(textArea).addClass("present");
        // }
    };


    auditTask();
}






//rcreate 9 containers for 9 hours of the work day
for (var i = 0; i < workHours.length; i++) {

    //add time div and append the index
    var timeArea = document.createElement("article");
    var time = workHours[i];
    $(timeArea).addClass("col-1 timeArea");
    $(timeArea).append(time)

    //add editable text box created elsewhere
    var textArea = document.createElement("textArea");
    
    textArea.id = timeId[i];
    //textArea.className =  "task";
    textArea.className =  'task_' + workHours[i];
    $(textArea).addClass("col-8");
    textArea.classList.add("color");
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
