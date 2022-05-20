$(document).ready(function() {

    var today = moment();
$("#currentDay").text(today.format("dddd, MMM DD, YY, h:mm a"));




function trackTime () {
    $(".time-block").each(function(){
        var timeNow = moment().hours();
        
        var hourRow = parseInt($(this).attr('id').split("-")[1]);
        console.log(hourRow, timeNow)

        
        if (hourRow < timeNow) {
            $(this).addClass("past");
           
        }
        else if (hourRow === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
            
            
        }
        else  {
            $(this).removeClass("past");
            $(this).removeClass("present");            
            $(this).addClass("future");
            
        }
    })

}
trackTime();
setInterval (trackTime, 20000);
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
})