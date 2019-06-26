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
const optionTheme = $('<option selected>Please select a T-shirt theme</option>');
$('#color').prepend(optionTheme);


//hiding everything in color but the first one.
$('#color option').hide();


//create a change function that if js puns is chosen, then it will populate colors specific to that.

$('#design').on('change', function() {
    const design = $('#design').val();

    if(design === 'js puns'){
//show js puns
        /JS Puns/g.show();
        // search(/JS Puns/).show();
//   $('#color option').find('option:contains("JS Puns")').show();
    } else {
//show heart js
        // search(/I &#9829; JS/).show();

    }

});



// $('.child:not(:first)').hide();

// $(optionTheme).attr('class', 'instruction');
// $('.instruction').hide();

// const color = $('#color').val();
// color.hide();
// $('#color').hide();

// $('').on('change', function() {
//     if( === '') {
        
//     } else {
          
//     }
// });


// $('#design').on('change', function() {
//     let theme = $('#design').val();
//     theme === 'Select Theme'.hide();
//     }
// );

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