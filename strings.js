/*This is the javascript needed for this assignment*/

function ListofWords() {
    var words = document.getElementById("words").value;
    var wordsArray = words.split(" ");
    var sortedArray = wordsArray.sort();
    var sortedWords = sortedArray.join(" ");
    document.getElementById("result").innerHTML = sortedWords;
}

