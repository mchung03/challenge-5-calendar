// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function() {
    $("#currentDay").text(dayjs().format('dddd, MMM DD, YYYY'))
  }, 1000)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  if(dayjs().hour() > 9) {
    $('#hour-9').addClass('past')
  } else if (dayjs().hour() === 9) {
    $('#hour-9').addClass('present')
  } else {
    $('#hour-9').addClass('future')
  }
  if(dayjs().hour() > 10) {
    $('#hour-10').addClass('past')
  } else if (dayjs().hour() === 10) {
    $('#hour-10').addClass('present')
  } else {
    $('#hour-10').addClass('future')
  }
  if(dayjs().hour() > 11) {
    $('#hour-11').addClass('past')
  } else if (dayjs().hour() === 11) {
    $('#hour-11').addClass('present')
  } else {
    $('#hour-11').addClass('future')
  }
  if(dayjs().hour() > 12) {
    $('#hour-12').addClass('past')
  } else if (dayjs().hour() === 12) {
    $('#hour-12').addClass('present')
  } else {
    $('#hour-12').addClass('future')
  }
  if(dayjs().hour() > 13) {
    $('#hour-13').addClass('past')
  } else if (dayjs().hour() === 13) {
    $('#hour-13').addClass('present')
  } else {
    $('#hour-13').addClass('future')
  }
  if(dayjs().hour() > 14) {
    $('#hour-14').addClass('past')
  } else if (dayjs().hour() === 14) {
    $('#hour-14').addClass('present')
  } else {
    $('#hour-14').addClass('future')
  }
  if(dayjs().hour() > 15) {
    $('#hour-15').addClass('past')
  } else if (dayjs().hour() === 15) {
    $('#hour-15').addClass('present')
  } else {
    $('#hour-15').addClass('future')
  }
  if(dayjs().hour() > 16) {
    $('#hour-16').addClass('past')
  } else if (dayjs().hour() === 16) {
    $('#hour-16').addClass('present')
  } else {
    $('#hour-16').addClass('future')
  }
  if(dayjs().hour() > 17) {
    $('#hour-17').addClass('past')
  } else if (dayjs().hour() === 17) {
    $('#hour-17').addClass('present')
  } else {
    $('#hour-17').addClass('future')
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
