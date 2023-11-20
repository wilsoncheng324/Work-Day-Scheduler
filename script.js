
$(function () {
  var now = dayjs();
  now = now.format("MMM DD, YYYY")
  $("#currentDay").text(now);
  
  $(".saveBtn").on("click", function(){
    var timeBlockId = $(this).parent().attr("id");
    console.log(timeBlockId);
    var userInput = $(this).siblings(".description").val();
    console.log(userInput);

    localStorage.setItem(timeBlockId, userInput);
  })

  function updateHourBlock(){
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      $(this).removeClass("past present future");

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
    });
  }

  updateHourBlock();

  function loadSavedDescriptions() {
    $(".time-block").each(function(){
      var timeBlockId = $(this).attr("id");
      var savedDescription = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(savedDescription);
    });
  }


  loadSavedDescriptions();
});
