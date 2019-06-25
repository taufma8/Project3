//Focuses on the first element on page.
$('#name').focus();

// $('#other-title').hide();
$('#title').on('change', function() {
    if('#title' === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});


// val().show(otherTitle);
