var today = moment();
$("#currentDay").text(today.format("dddd, MMM DD, YY, h:mm a"));

var time = $().parent().attr("id"); //pretty sure this needs more input
var timeNow = moment().hours();

function trackTime () {
    $(".time-block").each(function(){
        timeNow
        var hourRow = parseInt($(this).attr('id').split("hours"));
        console.log(hourRow, timeNow)

        if (hourRow === timeNow) {
            $(".time-block").addClass("present");
            $(".time-block").removeClass("past");
            $(".time-block").removeClass("future");
        }
        else if (hourRow < timeNow) {
            $(".time-block").addClass("past");
            $(".time-block").removeClass("present");
            $(".time-block").removeClass("future");
        }
        else if (hourRow > timeNow) {
            $(".time-block").addClass("future");
            $(".time-block").removeClass("past");
            &(".time-block").removeClass("present");
        }
    })

trackTime();
}
// note to self.  i need to figure out how the time-block knows that if the time in
// the planner is past, present, or future.  so i have 8 hour id's from 9am-5pm. will have to combine
// with var timeNow somehow.
//pretty sure i need to use split for the "hours" class