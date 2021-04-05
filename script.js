var image = document.getElementById("line-img");
var element = document.querySelectorAll(".radio");
var a = 0;
var timer;
var questionTab = document.querySelectorAll(".cursor");


function changeImg(a) {
    clearTimeout(timer); // зупиняємо таймер після вибору
    element[a].checked = true;
    if (element[a].checked = true){
        image.setAttribute("src", "images/"+a+".jpg");
        a++;
        if (a > 2) {
            a = 0;
        }
        timer = setTimeout(changeImg, 5000, a);
    }
}
changeImg(a);
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tabName).style.display = "block"; 
}
var counter=0;

function openAnswerTab(answerName) {
    var i;
    var x = document.getElementsByClassName("answers");
    if (counter ===0 || counter ===1) {
            document.getElementById(answerName).style.display = "block";
            counter++;
    }
    else {
            document.getElementById(answerName).style.display = "none";
            counter = 0;
    }
    console.log(counter);
}

