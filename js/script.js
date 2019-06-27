//Focuses on the first element on page.
$('#name').focus();

//Hides the 'Your job role' text box. 
$('#other-title').hide();

//Text box only appears when 'other' is chosen.
$('#title').on('change', function() {
    let value = $('#title').val();
    if(value === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();    
    }
});

//Hiding the option 'select theme'
$('#design option:first-child').hide();

//Updating the color field and hiding the colors in the dropdown menu.
const optionTheme = '<option selected>Please select a T-shirt theme</option>';
$('#color').prepend(optionTheme);

//hiding everything in color but the first one.
$('#color option').hide();

//create a change function that if js puns is chosen, then it will populate colors specific to that.
$('#design').on('change', function() {
    const design = $('#design option:selected').text();
    const regEx = /Theme - (.*)$/;
    const matchedString = design.match(regEx)[1];
    $(`#color option:contains("${matchedString}")`).show();
    $(`#color option:not(:contains("${matchedString}"))`).hide();  
});



//activity section
const totalCost = '<label>Total Cost:</label>';
const activities = $('.activities');
activities.append(totalCost);
let totalActivityCost = 0;

$(activities).on('change', function() {
    const checkboxInput = $('.activities input[type=checkbox]:checked').each(function (index, value) {
       label.text(); 
    });
    const label = $(checkboxInput).parent().text();
    //$('.activities label').text();
    console.log(checkboxInput);
    // regEx = /^[$]/;
    // const $ = activities.match(regEx);
});

/(.*)\s—\s((.*)\s\d(.*)-\d(.*),\s)?[$]\d+/

//payment section
$('#payment option:first-child').hide();
$('#payment').on('change', function() {
    const value = $(this).val();
    if(value == 'credit card') {
        $('#credit-card').show().next().hide().next().hide();
    } else if (value == 'paypal') {
        $('#credit-card').hide().next().show().next().hide();
    } else {
        $('#credit-card').hide().next().hide().next().show();
    }
});