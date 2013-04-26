
//add next image button and modify css background image


// everytime I restart the timer it goes faster

//shortcut to $(document).ready(function(){})
$(function(){
  //add the 64 butttons to the gameboard
  buildBoard(backgroundImage1);
  gameImage=0;
  $('.choice').hide();
  $('#valid').toggle();
  $('#invalid').toggle();
  $('#gameover').hide();
  //register event handlers
  $("#start").click(begin);
  $("#start").click(countdown_trigger);
  $(".choice").change(verify);

});
var gameImage; 
var backgroundImage0 = 'url(kp.jpg)'; //katy perry
var backgroundImage1 = 'url(nmj.jpg)'; //nicki Minaj
var backgroundImage2 = 'url(ah.jpg)'; //nicki Minaj
//game boolean
var inPlayMode = false;
//number of seconds the game lasts
var countdown_number; 
//timer
var countdown;

//begins the games and provides a way of submittings your solution
function begin () {
  $(this).attr("value", (inPlayMode)? "Begin":"Reset");
  
  if (!inPlayMode)
  {
    inPlayMode = !inPlayMode;
    //create a variable string to update the html
    $('.choice').fadeIn();
    var timer ='<font size="10">Timer: <span id="countdown_text"></span></font>'
    $('#timer').append(timer);
    //set the timer
    countdown_number =31; 
    $('#gameover').hide();
  }
  else{
     countdown = clearTimeout(countdown); 
     //add the 64 butttons to the gameboard
     buildBoard(backgroundImage1);
     gameImage = 0;
  }
}

//verifies the choice
function verify(){
  //create local variable
  var temp0 = gameImage;
  var val = $('input:radio[name=choice]:checked').val();
  //first image is nicki -> choice 3
  if(inPlayMode && temp0 == 0){
    if (val === 'choice_3')
    {
      $('#valid').fadeIn();
      $('#valid').fadeOut('slow');
      buildBoard(backgroundImage0);
      gameImage = 1; 
      var temp = countdown_number;
      begin();
      countdown_number = temp; 
      return;
    }
  else
    {
      $('#invalid').fadeIn();
      $('#invalid').fadeOut('slow');
    }
  }
  //second image is katy -> choice 2
  else if(inPlayMode && temp0 == 1){
    if (val === 'choice_2')
    {
      $('#valid').fadeIn();
      $('#valid').fadeOut('slow');
      buildBoard(backgroundImage2);
      gameImage = 2; 
      var temp = countdown_number;
      begin();
      countdown_number = temp; 

    }
    else
    {
        $('#invalid').fadeIn();
        $('#invalid').fadeOut('slow');
    }
  }
  //third image is Anne Hathaway -> choice 1 
  else if(inPlayMode && temp0 == 2)
  {
    if (val === 'choice_1')
    {
      $('#valid').fadeIn();
      begin();
      inPlayMode =!inPlayMode;
      $('#valid').fadeOut('slow');
      gameImage = 0;
      //show game over
      $('#gameover').fadeIn('fast');
    }
    else
    {
        $('#invalid').fadeIn();
        $('#invalid').fadeOut('slow');
    }
  }
}
//handles the counter and calls the randomRemove function
function countdown_trigger(){
  if(countdown_number > 0 && inPlayMode) {
            countdown_number--;
            //update the onscreen counter
            $('#countdown_text').empty();
            $('#countdown_text').append(countdown_number);
            if(countdown_number > 0) {
                countdown = setTimeout('countdown_trigger()', 500);
                //remove a random button 
                var buttonHide = Math.floor(Math.random()*64);
                var buttonShow = Math.floor(Math.random()*64);
                randomRemove(buttonHide, buttonShow); 
            }
            else{
              begin();
            }
        }
}

//randomly hide Buttons and show buttons
function randomRemove(buttonHide, buttonShow){
  var buttons = $('.curtain input'); 
  var button = $('.curtain input').get(buttonHide);
  var button1 = $('.curtain input').get(buttonShow).style.backgroundColor ='blue';
  $(button).fadeOut('slow');
  $(button1).fadeIn('fast');
}

//builds the board takes the image as a parameter, room for improvements
// increasing difficulty and changing images
function buildBoard(backgroundImage){
  inPlayMode = false; 
  $('.choice').fadeOut('slow');
  //clear html
  $('#submitButton').empty();
  $('#timer').empty();
  $('.curtain').empty();
   var board = "<table id='test'>";

    for (var r =0; r < 8; r++){
      var row ="<tr>";
      for(var c= 0; c< 8; c++){
        row += "<td><input type='button'/></td>"
      }
      row += "</tr>";
      board += row;
    }
    board += "</table>";
    $(".curtain").append(board);
    //set the background image
    $('#test').css('background-image', backgroundImage);
}





