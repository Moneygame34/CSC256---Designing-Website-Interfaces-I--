/*This is the background javascript file*/
/*Date: Feb 5, 2023*/

window.onload = initLinks;

var Pic = 0;
var arrMyPics = new Array("photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg");


function initLinks() {
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
    if (Pic == 0) {
        Pic = arrMyPics.length;
    }
    Pic--;
    document.getElementById("myPicture").src = arrMyPics[Pic];
    return false;
}

function processNext() {
    Pic++;
    if (Pic == arrMyPics.length) {
        Pic = 0;
    }
    document.getElementById("myPicture").src = arrMyPics[Pic];
    return false;
}