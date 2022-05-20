$(document).ready(function() {


var today = moment();
$("#currentDay").text(today.format("dddd, MMM DD, YY, h:mm a"));

var time = $(".time-block").parent().attr("id"); //pretty sure this needs more input


function trackTime () {
    $(".time-block").each(function(){
        var timeNow = moment().hours();
        
        var hourRow = parseInt($(this).attr('id').substring(0, 1));
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
$(".saveBtn").click(function(){

}) //looked up jquery for the syntax.  need to figure out what to put in this function?

localStorage.setItem('9AM', 'textarea');

})

// note to self.  i need to figure out how the time-block knows that if the time in
// the planner is past, present, or future.  so i have 8 hour id's from 9am-5pm. will have to combine
// with var timeNow somehow.
//pretty sure i need to use split for the "hours" class