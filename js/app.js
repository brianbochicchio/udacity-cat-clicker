// Handles the kitteh clicks!

   /* Next TODO
    *  Script:
    *  Update image names to be match the cats array
    *  Update click counter to target the correct cat's counter
    *  
    *  HTML:
    *  Update the figcaption to accept the upates
    */

let theKittehs = document.querySelector('#theKittehs');
let clickCountDisplay = document.querySelector('#count');
let clickCount = 0;
let cats = [
    {
        name: "Tigger",
        imageName: "tigger.jpg"
    },
    {
        name: "Patchy",
        imageName: "patchy.jpg"
    }
]
// set cat names
document.querySelector('#kittehName1').innerHTML = cats[0].name;
document.querySelector('#kittehName2').innerHTML = cats[1].name;

// Increment the value only when an image is clicked
theKittehs.addEventListener('click', function(e){
    let myTarget = e.target.tagName;
    let myTargetSource = e.srcElement.currentSrc;
    
    //console.log(e);
    //console.log("Current Source: " + e.srcElement.currentSrc);
    //console.log(myTargetSource.includes("kitteh2"));
    //console.log(myTarget);

    if (myTarget == "IMG"){  

        if(myTargetSource.search("2")) {
            clickCount += 1;
            clickCountDisplay.innerHTML = clickCount;
        }
    }

});