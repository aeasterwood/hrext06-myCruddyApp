$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem('inputFieldValue', $('.text-entry').val());
    var myItemInStorage = localStorage.getItem('inputFieldValue');
    console.log('myItemInStorage', myItemInStorage);


    // display the value here
    //$('.list-display-field').text(myItemInStorage); // ?
    $('.list-display-field').append("<div>" + myItemInStorage + "</div>");
    $('.text-entry').val("")
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});



// $("input").keypress(function(event){
//   if(event.which === 13) {
//     var task = $("input").val()
//     $("ul").append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span>" + task +"</li>")
//     $("input").val("")
//   }
// })

//$('.list-display-field').append(myItemInStorage);