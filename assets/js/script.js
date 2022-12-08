// variables connected to the HTML
var timeBlock = $(".time-block");
var container = $(".container");
var saveButton = $(".saveBtn");
var description = $(".description")

//getting date and hour from dayjs
var todayDate = dayjs().format("MMMM DD, YYYY");
var todayTime = parseInt(dayjs().format("HH"));
console.log(todayTime);

var hourText;

function init() {
  // display current date
  $("#currentDay").text("Today is " + todayDate);

  // retrieve events that were written in the schedule from the local storage
  timeBlock.each(function (i) {
    $(this).children("textarea").val(localStorage.getItem($(this).attr("id")));
  })

  timeBlock.each(function (i) {
    // split the id to get the hour number to compare with the current hour
    hourText = parseInt($(this).attr("id").split("-")[1]);
    console.log(i, hourText);

    // compare id hour number to current hour to color code past, present, and future
    if (todayTime < hourText) {
      $(this).removeClass("present").addClass("future");
    }
    else if (todayTime > hourText) {
      $(this).removeClass("present").addClass("past");
      return;
    }
  }
  )
}

saveButton.on('click', function () {
  timeBlock.each(function (i) {
    localStorage.setItem($(this).attr("id"), $(this).children("textarea").val());
  })
});


init();

