//add timer and display countdown
//add next image button and modify css background image
//add a function that will randomly turn buttons translucents each second
// everytime I restart the timer it goes faster
//shortcut to $(document).ready(function(){})
$(function(){
  //add the 20 butttons to the gameboard
  var board = "<table>";
  for (var r =0; r < 4; r++){
    var row ="<tr>";
    rowCount += 1; 
    for(var c= 0; c< 4; c++){
      row += "<td><input type='button'/></td>"
      //count the buttons
      buttonCount += 1;
    }
    row += "</tr>";
    board += row;
  }
  board += "</table>";
  $(".curtain").append(board);

  $("#start").click(begin);
  $("#start").click(countdown_trigger);
});


var buttonCount;
var rowCount; 
  
//game boolean
var inPlayMode = true;
//number of seconds the game lasts
var countdown_number; 
//timer
var countdown;

//begins the games and provides a way of submittings your solution
function begin () {
  inPlayMode = !inPlayMode;

  $(this).attr("value", (inPlayMode)? "Begin":"Stop");
  //create a variable string to update the html
  if (!inPlayMode)
  {
    var submit = '<input type="text" id= "submission"/><input type="button" value="Check Answer" id="submit"/> '; 
    $('#submitButton').append(submit);
    var timer ='<font size="10">Timer: <span id="countdown_text"></span></font>'
    $('#timer').append(timer);

    //set the timer
    countdown_number =31; 
    //  countdown_trigger();
    //}
  }
  else{

    $('#submitButton').empty();
    $('#timer').empty();
     countdown = clearTimeout(countdown); 
  }
}

function countdown_trigger(){
  if(countdown_number > 0) {
            countdown_number--;
            //update the onscreen counter
            $('#countdown_text').empty();
            $('#countdown_text').append(countdown_number);
            if(countdown_number > 0) {
                countdown = setTimeout('countdown_trigger()', 1000);
                //remove a random button 
                var button = Math.random();
                button = button % buttonCount; 
                randomRemove(button); 
            }
        }
}

function randomRemove(button){
  var row = button / rowCount;
  var buttonNumbr = button % rowCount; 

}



