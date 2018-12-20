$(document).ready(function(){
  console.log('jQuery loaded');

  
  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem('inputFieldValue', $('.text-entry').val());
    var myItemInStorage = localStorage.getItem('inputFieldValue');
    console.log('myItemInStorage', myItemInStorage);

    // display the values here
    //$('.list-display-field').text(myItemInStorage); // ?
    $('.list-display-field').append("<div>" + myItemInStorage + "</div>");
    $('.text-entry').val("")
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});


// Store
// localStorage.setItem("lastname", "Smith");

// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

