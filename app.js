$(document).ready(function(){
  console.log('jQuery loaded');

  var inputs = [];

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    var tEntry = $('.text-entry').val()
    inputs.push(tEntry)
    localStorage.setItem('inputs', tEntry);
    var myItemInStorage = localStorage.getItem('inputs');
      if (!inputs) {
       inputs = []
    }
    //console.log('myItemInStorage', myItemInStorage);

  // display the values here
    $('.list-display-field').append("<li>" + myItemInStorage + "</li>");
    $('.text-entry').val("")
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});


