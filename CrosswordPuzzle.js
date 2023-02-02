/*Created by Vanessa Bonner*/
/*Date: January 29, 2023*/
/*This program will create a crossword puzzle*/
/*JAVASCRIPT CODE REFIXED*/
  
function loadCrosswords() {
    /*This is the table on the html page */
  var table = document.getElementById("grid");
    /*This is the array of words to be used in the puzzle */
  var words = new Array("JAVASCRIPT", "CASCADE", "STRAW");
    /*This is the array of clues to be used in the puzzle */
    
  var tr = table.rows[1];
  for (var i=0; i<words[0].length; i++) {
    var cell = tr.cells[i];
    cell.innerText = words[0][i];
}
  /*This is the array of clues to be used in the puzzle */
  for (var i = 0; i<words[1].length; i++) {
    var trow = table.rows[i];
    var cell = trow.cells[1];
    cell.innerText = words[1][i];
}
    /*This is the array of clues to be used in the puzzle */
  for (var i = 0; i<words[2].length; i++) {
    var trow = table.rows[i];
    var cell = trow.cells[9];
    cell.innerText = words[2][i];
  }
}