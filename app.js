$(document).ready(function(){
  console.log('jQuery loaded');

  // function saveInputs() {
  //   var str = JSON.stringify(inputs);
  //   localStorage.setItem("inputs", str);
  // }

  // function getInputs() {
  //   var str = localStorage.getItem("inputs");
  //   inputs = JSON.parse(str);
  //   if (!inputs) {
  //     inputs = []
  //   }
  // }
  // getInputs()
  var inputs = [];
  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    var tEntry = $('.text-entry').val()
    inputs.push(tEntry)
    console.log(inputs[0])
    console.log(localStorage.inputs)
    localStorage.setItem('inputs', tEntry);
    var myItemInStorage = localStorage.getItem('inputs');
      if (!inputs) {
       inputs = []
    }
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

