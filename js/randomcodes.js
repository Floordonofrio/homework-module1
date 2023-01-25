//Function to generate combination of characters
function generateCode (){
    //Create variables to stores generated codes and the type pf characters we want to show
    var code = ''; //initialize to nulll value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtjklmnopqrstuvwxyz0123456789@#$';
    
    //Generate character multiple times using a loop
    for (i=1; i<=8; i++){
        var char = Math.random() * str.length; //Random selectoin from str
        code += str.charAt (char) //Acumulate the generated character in a str of eight
    }
    return code //Resturn the accumulated str when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode ();

//Disable Buttom
function disableButtom (){
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButtom();