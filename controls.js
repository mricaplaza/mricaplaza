var prev = document.getElementById("preview"),
    ctrlCol = document.getElementById("controlColor"),
    numBut = document.getElementById("numberButton"),
    ranBut = document.getElementById("rangeButton"),
    r1 = document.getElementById("range1"),
    r2 = document.getElementById("range2"),
    r3 = document.getElementById("range3"),
    r4 = document.getElementById("range4"),
    plusBut = document.getElementById("plusButton"),
    disp = document.getElementById("display"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    randomB= document.getElementById("randomButton"),
    rcB = document.getElementById("rcButton"),
    acB = document.getElementById("acButton")
    mtimer = null;   
    

ctrlCol.addEventListener("change", function(){
    prev.style.backgroundColor = this.value;
});
    
r1.addEventListener("change", function(){
    hair.style.width = this.value + "%";
    
});

r2.addEventListener("change", function(){
    eyes.style.width = this.value + "%";
    
});


r3.addEventListener("change", function(){
    nose.style.width = this.value + "%";
});


r4.addEventListener("change", function(){
    mouth.style.width = this.value + "%";
});

function createFace(){
    
    var d = document.createElement("div"),
        img1 = document.createElement("img"),
        img2 = document.createElement("img"),
        img3 = document.createElement("img"),
        img4 = document.createElement("img");

    img1.src= hair.src;
    img1.style.width = hair.style.width;
    img1.style.top = hair.style.top;
    
    img2.src= eyes.src;
    img2.style.width = eyes.style.width;
    img2.style.top = eyes.style.top;
    
    
    img3.src= nose.src;
    img3.style.width = nose.style.width;
    img3.style.top = nose.style.top;
    
    
    img4.src= mouth.src;
    img4.style.width = mouth.style.width;
    img4.style.top = mouth.style.top;
    
    
    
    d.style.backgroundColor = prev.style.backgroundColor;
    d.style.width = "100px";
    d.style.height = "100px";
    d.style.position = "relative";
    
    img1.className = "items";
    img2.className = "items";
    img3.className = "items";
    img4.className = "items";
    
    disp.appendChild(d);
    d.appendChild(img1);
    d.appendChild(img2);
    d.appendChild(img3);
    d.appendChild(img4);

}


function randomFace(){
    randNum1 = Math.round(Math.random()*3 +1);
    randNum2 = Math.round(Math.random()*3 +1);
    randNum3 = Math.round(Math.random()*3 +1);
    randNum4 = Math.round(Math.random()*3 +1);
    randNum5 = Math.round(Math.random() * 0xFFFFFF);

    if (randNum1 > 3){
        randNum1 = 1;
    }
    if (randNum2 > 3){
        randNum2 = 1;
    } 
    if (randNum3 > 3){
        randNum3 = 1;
    } 
    if(randNum4 > 3) {
        randNum4 = 1;
    }
    
    hair.src = "img/hair" + randNum1 + ".png";
    eyes.src = "img/eyes" + randNum2 + ".png";
    nose.src = "img/nose" + randNum3 + ".png";
    mouth.src = "img/mouth" + randNum4 + ".png";
    
    prev.style.backgroundColor = "#" + ("000000" + randNum5.toString(16)).substr(-6);
}

function changeType(type){
    r1.type = type;
    r2.type = type;
    r3.type = type;
    r4.type = type;
}


rcB.addEventListener("click", function(){
    mtimer = setInterval(function(){
    randomFace();
    createFace();

}, 500);   
});

acB.addEventListener ("click", function(){
    clearInterval(mtimer);
});


plusBut.addEventListener("click", function(){
    createFace();   
});

randomB.addEventListener("click", function(){
    randomFace();
    
});

numBut.addEventListener("click", function(){
    changeType("number");
});

ranBut.addEventListener("click", function(){
    changeType("range");
    
});





















