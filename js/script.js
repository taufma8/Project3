
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
});

//Defining variables
const mainConf = $('input[name="all"]');
const jsFrameworks = $('input[name="js-frameworks"]');
const jsLibraries = $('input[name="js-libs"]');
const express = $('input[name="express"]');
const nodejs = $('input[name="node"]');
const build = $('input[name="build-tools"]');
const npm = $('input[name="npm"]');

//Disabling if activities conflicting times
$(jsFrameworks).on('change', function() {
		if ($(this).prop("checked")) {
			express.prop("disabled", true);
			express.parent().css("color", "grey");
		} else {
            express.prop("disabled", false);
            express.parent().css("color", "black");
		}
    });

$(express).on('change', function() {
    if ($(this).prop("checked")) {
        jsFrameworks.prop("disabled", true);
        jsFrameworks.parent().css("color", "grey");
    } else {
        jsFrameworks.prop("disabled", false);
        jsFrameworks.parent().css("color", "black");

    }
});

$(jsLibraries).on('change', function() {
    if ($(this).prop("checked")) {
        nodejs.prop("disabled", true);
        nodejs.parent().css("color", "grey");
    } else {
        nodejs.prop("disabled", false);
        nodejs.parent().css("color", "black");

    }
});

$(nodejs).on('change', function() {
    if ($(this).prop("checked")) {
        jsLibraries.prop("disabled", true);
        jsLibraries.parent().css("color", "grey");
    } else {
        jsLibraries.prop("disabled", false);
        jsLibraries.parent().css("color", "black");

    }
});

//payment section
$('fieldset div p').hide();
$('#payment option:first-child').hide();

let value = 'credit card';
$('#payment').on('change', function() {
    value = $(this).val();
    if(value == 'credit card') {
        $('#credit-card').show().next().hide().next().hide();
    } else if (value == 'paypal') {
        $('#credit-card').hide().next().show().next().hide();
        $('fieldset div p').show();
    } else {
        $('#credit-card').hide().next().hide().next().show();
        $('fieldset div p').show();
    }
});


//validation section

nameNotValid = false;
emailNotValid = false;
activitiesNotValid = false; 
ccNotValid = false;

function validateName() {
    const nameRegEx = /^[a-zA-Z]+$/;
    const name = $('#name').val();
    // let nameNotValid = false;

    if (!nameRegEx.test(name) || name == '') {
        $('input[name="user_name"]').css("border-color", "red");
        $('#name').prev().css("color", "red");
        nameNotValid = true;
    } else {
        $('input[name="user_name"]').css("border-color", "#b0d3e2");
        $('#name').prev().css("color", "black");
    }
}

function validateEmail() {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = $('#mail').val();
    // let emailNotValid = false;

    if (!emailRegEx.test(email) || email == '') {
        $('input[name="user_email"]').css("border-color", "red");
        $('#mail').prev().css("color", "red");
        emailNotValid = true;
    } else {
        $('input[name="user_email"]').css("border-color", "#b0d3e2");
        $('#mail').prev().css("color", "black");
    }
}

function validateActivities() {
    let numberOfActivities = [];
    $('.activities input:checked').each(() => {
        numberOfActivities.push($(this).text());
    });
    // activitiesNotValid = false;

    if (numberOfActivities.length < 1) {
        $('.activities legend').css("color", "red");
        activitiesNotValid = true;
    } else {
        $('.activities legend').css("color", "rgba(6, 49, 68, 0.9)");
    }
}

function validateCard() {
    const creditRegEx = /^[0-9]{13,16}?$/;
    const credit = $("#cc-num").val();
    // let ccNotValid = false;

    if (!creditRegEx.test(credit) || credit == '') {
        $('input[name="user_cc-num"]').css("border-color", "red");
        $('#cc-num').prev().css("color", "red");
        ccNotValid = true;
    } else {
        $('input[name="user_cc-num"]').css("border-color", "#b0d3e2");
        $('#cc-num').prev().css("color", "black");

    }
}

function validateZip() {
    const zipRegEx = /^[0-9]{5}$/;
    const zip = $("#zip").val();

    if (!zipRegEx.test(zip) || zip == ''){
        $('input[name="user_zip"]').css("border-color", "red");
        $('#zip').prev().css("color", "red");
        ccNotValid = true;
    } else {
        $('input[name="user_zip"]').css("border-color", "#b0d3e2");
        $('#zip').prev().css("color", "black");
    }
}

function validateCvv() {
    const cvvRegEx = /^[0-9]{3}$/;
    const cvv = $("#cvv").val();

    if (!cvvRegEx.test(cvv) || cvv == ''){
        $('input[name="user_cvv"]').css("border-color", "red");
        $('#cvv').prev().css("color", "red");
        ccNotValid = true;
    } else {
        $('input[name="user_cvv"]').css("border-color", "#b0d3e2");
        $('#cvv').prev().css("color", "black");

    }
}
function checkCreditCard(){
    if (value === "credit card"){
        validateCard();
        validateZip();
        validateCvv();
    } 
}

$(document).ready(function () {

    $('button:submit').on('click', function(e) {
        e.preventDefault();
        validateName();
        validateEmail();
        validateActivities();
        checkCreditCard();


        if (nameNotValid || emailNotValid || activitiesNotValid || ccNotValid) {
            alert("Please fill out the form correctly.")
        } 
        else {
            location.reload(true);
        }  

    }); 
}); 
