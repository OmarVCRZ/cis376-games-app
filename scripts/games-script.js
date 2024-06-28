// A $( document ).ready() block.
$(document).ready(function () {

  console.log("Welcome to my Gaming Odyssey");
  
   // issue-1 click btn load songs: https://github.com/OmarVCRZ/cis376-games-app/issues/1#issue-2378974595
  
    //what dom?
      //$('dom selector').method(arguments of the method)
  // $('#btnLoadGames').click(function(){

  $('#btnLoadGames').on('click', function(){

    $(`#favList`).slideToggle(2000).empty();

    //IIFE = Immediately invoked function expression
    console.log("Clicked Load Games")
    
    console.log('more lines of code')

    // $('#favList').append('<li>For Honor</li>');

    // Broken
    // $('#favList').append('<li>For Honor's</li>');

    console.log(gamesList);

    // Backtick
    // $('#favList').append(`<li class="list-item-group">
    // ${gamesList[0] } </li>`);

    // String concatenation
    // $('#favList').append("<li class=\"list-group-item\">" +
    // gamesList[1] + "</li>");

    // Mix single '' and double quotes ""

    // Escape character \'
    // $('#favList').append("<li>Can\'t</li>");

    // Backticks and decorators
      //backtick - left of 1, same as the ~ ```
        // ` backtick
        // ' single quote
        // " double quote
    // $('#favList').append(`<li>Can\'t</li>`);

    // loop through the array
      // tradition for-loop
    // for (j = 0; j < gamesList.length; j++) 
    // {
    //   $('#favList').append(`<li 
    //   class="list-group-item"> ${gamesList[j]} </li>`);
    // }

    $(gamesList).each(function(index, value){

      $('#favList').append(`<li 
      class="list-group-item"> ${ value } </li>`);

    });

  });

  $('#btnClearGames').on('click', function(){
    $('#favList').slideToggle(1000).empty();
  });

  // make a data thing: array (list)
  // var => let (change) or const (no change)

  let gamesList = [
    
    "<em>God of War</em>: Ragnarok", 
    "Forest", 
    "Red Dead Redemption 2",
    "For Honor",
    "Minecraft",
    "The Godfather 2",
    "The Last of Us Part 2",
    "God of War 3",
    "Call of Duty: Modern Warfare 2 (2009)",
    "Mortal Kombat (2011)",
    "Horizon Forbidden West"

  ]; // add games later on...

});


