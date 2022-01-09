function grow() {
    var black = document.getElementById('logoBlack');
    var pink = document.getElementById('logoPink');
    black.classList.add('logoBlack');
    pink.classList.add('logoPink');
    waitForIt();
};
var wait;
function waitForIt() {
    wait = setTimeout(typeWriter, 1200);
};
var i = 0;
var text = "miki";
var speed = 250;
function typeWriter() {
        if(i < text.length) {
            document.getElementById('logoText').innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
    }
};
