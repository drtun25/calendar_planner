//var checkTime = function () {

    //Get Current time
 //   var currentTime = moment().format('H');

    //get all elements with class "taskarea"
 //   var timeBlockElements = $(".textarea");

    //loop through taskarea classes
 //   for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
  //      var elementID = timeBlockElements[i].id;

        //get element by ID
 //       var manipID = document.querySelector(timeBlockElements[i].id)

        //remove any old classes from element
//      $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
  //      if (elementID < currentTime) {
 //           $(manipID).querySelector(".past");
 //       } else if (elementID > currentTime) {
  //          $(manipID).querySelector(".future");
 //       } else {
 //           $(manipID).querySelector(".present");
//        }
//    }
//}

// checkTime every  minute
//setInterval(checkTime(), (1000 * 60) * 1);

//the current day works
var dayYear = moment().format("MMM Do, YYYY");
$("#currentDay").text(dayYear);

var now = moment().format('H')
var save = $('i')
var textArea = $('textarea')
var userInput = []

//window.setInterval('refresh()', 10000);
//save.each(function(i){
//    $(this).on('click', localStorage())
//})

//function localStorage() {
//    console.log('Hi')
//    console.log($(this).siblings('textarea').val())
//}

//tried to call each text area so that it would change the colors but only the green one appears
function refresh() {
    if (textArea > now) {
        textArea.toggleClass("future")
    } 
    else if (textArea === now) {
        textArea.toggleClass("present")
    }
    else {
        textArea.toggleClass("past")
    } 
     

}


//tried to make save button but was unsuccessful
$('.saveBtn').on(function saveUserInput() {
    var input = $(this).siblings('textarea2').val().trim();
    var value = $(this).parent().attr('class');
    localStorage.setItem(value, input);
    localStorage.getItem(value, input);

    saveUserInput();
})


refresh();