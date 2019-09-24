//Greeting popup.
function greeting(){
    let visitor = prompt("Please enter your name");
    window.alert("Hi " + visitor + " welcome to Alexander Mills' Website.")
};
greeting();

//change image
function changeImage(img){
    if(img.src.match(/alex/)){
        console.log('bridge');
        img.src="images/bristol-947391_960_720.jpg"
    }
    else{
        console.log('alex');
        img.src="images/alex.jpg"
    }
};



