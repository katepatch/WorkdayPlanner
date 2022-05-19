var today = moment();
$("#currentDay").text(today.format("dddd, MMM DD, YY, h:mm a"));

var time = $().parent().attr("id"); //pretty sure this needs more input
var timeNow = moment().hours();

function trackTime () {
    $(".time-block").each(function(){
        var hourRow = parseInt($(this).attr('id').split("hours"));
    })
}
// note to self.  i need to figure out how the time-block knows that if the time in
// the planner is past, present, or future.  so i have 8 hour id's from 9am-5pm. will have to combine
// with var timeNow somehow.
//pretty sure i need to use split for the "hours" class