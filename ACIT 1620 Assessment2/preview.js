/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
var numH = 2,
    numE = 2,
    numN = 2,
    numM = 2;

hair.addEventListener("click", function(){
    hair.src = "img/hair"+ numH +".png";
    numH ++;
    
    if (numH >=4){
        numH = 1;        
    }
});

eyes.addEventListener("click", function(){
    eyes.src = "img/eyes" + numE + ".png";
    numE ++;
    
    if (numE >=4){
        numE =1;
    }
});

nose.addEventListener("click", function(){
    nose.src = "img/nose" + numN + ".png";
    numN ++;
    
    if (numN >=4){
        numN =1;
    }
    
});

mouth.addEventListener("click", function(){
    mouth.src = "img/mouth" + numM + ".png";
    numM ++;
    
    if (numM >=4){
        numM =1;
    }
    
});
        
        
        
        
        
        
        

