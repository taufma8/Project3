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
const totalCost = '<label></label>';
const activities = $('.activities');
activities.append(totalCost);

$(activities).on('change', function() {
    const checkbox = $('.activities input[type=checkbox]:checked');
    let totalActivityCost = 0;
    $(checkbox).each(function (index, element) {
        switch(element.name) {
            case "all" :
            totalActivityCost += 200;
            break;
            case "js-frameworks" :
            totalActivityCost += 100;
            break;
            case "js-libs" :
            totalActivityCost += 100;
            break;
            case "express" :
            totalActivityCost += 100;
            break;
            case "node" :
            totalActivityCost += 100;
            break;
            case "build-tools" :
            totalActivityCost += 100;
            break;
            case "npm" :
            totalActivityCost += 100;
            break;  
        }
    });
    $('.activities').append('<p id="total-cost"></p>')

    $('#total-cost').html('Total Cost: $' + totalActivityCost);

    // $(activities).each(function (index, element) {
    //     switch(element.name) {
    //         case "js-frameworkschecked" :
    //         $('.activities input[name=express]').prop('disabled', true);
    //         break;
    //         // case "js-libs" :
            // $('.activities').prop('disabled', true);
            // break;
            // case "express" :
            // $('.activities').prop('disabled', true);
            // break;
            // case "node" :
            // $('.activities').prop('disabled', true);
            // break;
            // case "build-tools" :
            // $('.activities').prop('disabled', true);
            // break;
            // case "npm" :
            // $('.activities').prop('disabled', true);
            // break;  

    $('.activities').append('<p id="total-cost"></p>')

    $('#total-cost').html('Total Cost: $' + totalActivityCost);
});

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

    // const label = $(checkboxInput).parent().text();
    //$('.activities label').text();
    // console.log(checkboxInput);
    // regEx = /^[$]/;
    // const $ = activities.match(regEx);
    // const regExActivities = /(.*)\s—\s((.*)\s\d(.*)-\d(.*),\s)?[$]\d+/;
    // const regExTitle = /(.*)\s—/;
    // const regExSchedule = /\s—\s(.*)\s\d(.*)-\d(.*),/
    // const regExCost = /[$]\d+/;
//     const string = "Main Conference — $200";
//     const indexOfVar = "$"
// $(string).indexOf("$");

    // const mainConf = 200;
    // const jsFramework = 100;
    // const jsLibraries = 100;
    // const express = 100;
    // const nodejs = 100;
    // const build = 100;
    // const npm = 100;


    // const mainConf = $('.activities input[name="all"]);
// const jsFramework = 100;
// const jsLibraries = 100;
// const express = 100;
// const nodejs = 100;
// const build = 100;
// const npm = 100;

// $(activities) = {
//     name: "all",
//     value: "200"
// },
// {
//     name: "jsFramework",
//     value: "100"
// };


    // if (checkboxInput == 'input[name=all]') {
    //     totalActivityCost += 200;
    // } else if (checkboxInput == regExTitle) {
    //     totalActivityCost += 100;
    // } else if (checkboxInput == regExTitle) {
    //     totalActivityCost += 100;
    // } else {
    //     totalActivityCost += 100;
    // }  console.log(totalActivityCost);
    // });