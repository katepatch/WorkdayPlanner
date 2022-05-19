# WorkdayPlanner

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
GIVEN I am using a daily planner to create a schedule
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## adding timeblocks to HTML

I added time-blocks from 9am to 5pm for the workday schedule
created rows with colomns for each of the 8 working hours

## javascript

i started with adding the time function of retrieving the current date and time when looking at the page.
created a time variable so i could track what time it is to see if it syncs up with the page.
created a function to track the time and see if it was either past, present, or future with the hours on the time block.
