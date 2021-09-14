// custom upload button
$('#translationUpload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#translationUpload')[0].files[0].name;
    $(this).prev('label').text(file);
  });

// today's date in date picker
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;

document.getElementById('formDeadline').value = today;