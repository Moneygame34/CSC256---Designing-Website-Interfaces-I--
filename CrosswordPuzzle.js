/*Created by Vanessa Bonner*/
/*Date: January 29, 2023*/
/*This program will create a crossword puzzle*/

  
function loadCrosswords() {
    /*This is the table on the html page */
  var table = document.getElementById("grid");
    /*This is the array of words to be used in the puzzle */
  var words = new Array("Javascript", "abandon", "joining");
    /*This is the array of clues to be used in the puzzle */
    
  var tr = table.rows[1];
  for (var i = 0; i<words[0].length; i++) {
    var cell = tr.cells[i];
    cell.innerHTML = words[0][i];
}
  /*This is the array of clues to be used in the puzzle */
  for (var i = 0; i<words[1].length; i++) {
    var trow = table.trows[i];
    var tcell = trow.tcells[1];
    cell.innerHTML = words[1][i];
}
    /*This is the array of clues to be used in the puzzle */
  for (var i = 0; i<words[2].length; i++) {
    var rows = table.rows[i];
    var cells = trow.cells[2];
    cell.innerHTML = words[2][i];
  }
}