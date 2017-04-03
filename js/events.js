//define functions here

var getIt = function() {
  $('p').on('click', function(){
    alert('hey!')
  })
}

var frameIt = function(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

var pressIt = function(){
  $('#typing').on('keydown', function(e){
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

var submitIt = function() {
  $('form').on('submit', function(e) {
    alert("Your form is going to be submitted now.")
  })
}

// function submitIt() {
//   $('form').on('submit', function(e) {
//     alert('Your form is going to be submitted now.')
//   })
// }

$(document).ready(function(){

// call functions here

});
