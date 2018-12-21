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
    $('ul').append("<li><button class='btn-delete' button type='button'><i class='fa fa-trash' aria-hidden='true'></i></button>" + myItemInStorage + "</li>");
    $('.text-entry').val("")
  });

 
  $('.list-display-field').on('click', '.btn-delete', function(){
  //remove the values
   $(this).parent().remove();

  //delete from local storage when delete button clicked
    localStorage.removeItem('inputFieldValue');
  });

});


