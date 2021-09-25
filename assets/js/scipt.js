function nowDate() {
var dayYear = moment().format("MMM Do, YYYY");
$("#currentDay").text(dayYear);

}

$('.time-block').children().each(function() {
    var timeless = moment($(this).text(),"h:mm a");
    
    var now = moment().format('H')
    
    if(timeless.isSame(now, 'hour')) {
        $(this).next().addClass('present');
    }

    if(timeless.isAfter(now, 'hour')) {
        $(this).next().addClass('future');
    }

    if(timeless.isBefore(now, 'hour')) {
        $(this).next().addClass('past');
    }
})

//save button that works
$(".saveBtn").on('click', storeValues);

function storeValues() {
    var input = $(this).siblings('textarea').val().trim();
    var value = $(this).parent().attr('class');
    localStorage.setItem(input, value);
}



