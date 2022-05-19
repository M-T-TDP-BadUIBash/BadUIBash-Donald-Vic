function randomMove() {
    var div = document.getElementById('resume-box');
    div.style.position = "absolute";
    div.style.left = getRandomInt(0, 1400) + 'px';
    div.style.top = getRandomInt(0, 100) + 'px';   
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//modal
var modal = document.getElementById("modal");
var btn = document.getElementById("submit");

btn.onclick = function() {
    modal.style.display = "block";
}

var answer = document.querySelector('#answer');
answer.addEventListener('input', function () {
    if (this.value.toUpperCase() === "SHORT") {
        document.getElementById('move').setAttribute('id', 'no-move');
    }
    else {
        document.getElementById('no-move').setAttribute('id', 'move');
    }
});

$("#move").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 400
    }, 100);
    $(this).animate({
        left: Math.random() * 500
    }, 100);

});

$("form input").on("keypress", function(e) {
    return e.keyCode != 13;
});

//slider
var slider = document.getElementById("phone");
var output = document.getElementById("numDisp");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

//color changing
var div = document.querySelector(".main");
div.addEventListener(
"mousemove", function (e) {
    x = e.offsetX;
    y = e.offsetY;
    div.style.backgroundColor
        = `rgba(${x}, ${y}, ${x - y}, 0.4)`;
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'a'){
        var audio = new Audio("C:\\Users\\TDEVDF7\\Documents\\VSCode Projects\\BadUIBash-Donald-Vic\\Starter Resume Code\\Letter Voices\\A.m4a");
        audio.play();
    }
  });