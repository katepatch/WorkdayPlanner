var today = moment();
$("#currentDay").text(today.format("dddd, MMM DD, YY, h:mm a"));

var time = $().parent().attr("id");
var timeNow = moment().hours();

function trackTime () {
    $(".time-block").each(function(){
        
    })
}