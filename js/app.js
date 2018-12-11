// Handles the kitteh clicks!

   /* Next TODO
    *  Script:
    *  Clean up declarations
    *  
    *  HTML:
    *  Improve display
    */

let theKittehs = document.querySelector('#theKittehs');
let clickCountDisplay = document.querySelector('#count');
let clickCount = 0;
let cats = [
    {
        name: "Tigger",
        imageName: "tigger.jpg",
        clicks: 0
    },
    {
        name: "Patchy",
        imageName: "patchy.jpg",
        clicks: 0
    }
]
let kittehName1 = document.querySelector('#kittehName1');
let kittehName2 = document.querySelector('#kittehName2');


// set cat names
kittehName1.innerHTML = cats[0].name;
kittehName2.innerHTML = cats[1].name;

// Increment the value only when an image is clicked
theKittehs.addEventListener('click', function(e){
    
    if (e.target.tagName === "IMG"){  
        for (let i = 0; i < cats.length; i++){
            if(e.srcElement.currentSrc.includes(cats[i].imageName) === true) {
                cats[i].clicks += 1;
                e.target.nextElementSibling.innerHTML = `${cats[i].name} has been clicked ${cats[i].clicks} times`;
            }
        }
    
    }

});