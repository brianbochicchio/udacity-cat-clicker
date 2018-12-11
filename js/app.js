// Handles the kitteh clicks!

let theKitteh = document.querySelector('#kitteh');
let clickCountDisplay = document.querySelector('#count');
let clickCount = 0;

theKitteh.addEventListener('click', function(){

    clickCount += 1;
    clickCountDisplay.innerHTML = clickCount;

});