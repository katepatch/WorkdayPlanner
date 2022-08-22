# WorkdayPlanner

## User Story

AS AN employee with a busy schedule</br>
I WANT to add important events to a daily planner</br>
SO THAT I can manage my time effectively

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule</br>
WHEN I open the planner</br>
THEN the current day is displayed at the top of the calendar</br>
WHEN I scroll down</br>
THEN I am presented with time blocks for standard business hours</br>
WHEN I view the time blocks for that day</br>
THEN each time block is color-coded to indicate whether it is in the past, present, or future</br>
WHEN I click into a time block</br>
THEN I can enter an event</br>
WHEN I click the save button for that time block</br>
THEN the text for that event is saved in local storage</br>
WHEN I refresh the page</br>
THEN the saved events persist

## HTML

I added time-blocks from 9am to 5pm for the workday schedule
created rows with colomns for each of the 8 working hours
after working with tutor updated each id from "timeAM/PM to hour-"time"
in the text area i added to the class with "description" and set it to localstorage so user can type in and save.  once the page is refreshed the info stays there

## javascript

i started with adding the time function of retrieving the current date and time when looking at the page.
created a time variable so i could track what time it is to see if it syncs up with the page.
created a function to track the time and see if it was either past, present, or future with the hours on the time block.
I was working with my tutor and the js link stopped working.  Created a second java script code and will link it and update it to main js
added save button to save for each hour so that it won't break code all over the place
added document ready function for the whole js
for some reason there appeared to be a linking problem between my html and my original javascript file so i created a new one and copy pasted most of the code from the original.  i deleted the file and renamed the script2 to just script.js

link to github repo: <https://github.com/katepatch/WorkdayPlanner>

link to deployed website: <https://katepatch.github.io/WorkdayPlanner/>

![screenshot](/screenshot-workplanner.png)
