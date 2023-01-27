    //Partners
    var photos = []; //empty array to store image element
    var fileNames = []; //store image file names
    var imageList = []; //store html list that contains an image
    var image; //store the assembled image list codes
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    //Create a loop to create 6 images satarting with index of 0
    for (var i=0; i<6; i++){
        fileNames.push("partner" + (i+1)); //creat image files names ans store in the array
        photos.push("<img src='images/" + fileNames[i] + ".png'>"); //assembly file naes and store it in the array
        image = openList + photos[i] + closeList; //assembly image element and store in variable
        imageList.push(image);
    }
    //Display all six image codes store in the array
    document.getElementById("partners").innerHTML = imageList.join("");

    var code = ''; //to store generated codes and initialize the empty value
    var getCode = ''; // to store entered codes
    var btnvalue = ''; //for button boolean value
//create variable to hold the type of characters we want to show as codes
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz1234567890@#$';

    function disableButtom(btnvalue){
        document.getElementById("submit").disabled= btnvalue;
        if (btnvalue==true){ //test if button is disables or enabled
            document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,0.3)";
            document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
        }else{
            //set buttom and label color with no transparency
            document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,1)";
            document.getElementById("submit").style.color = "rgba(255,255,255,1)";
        }
    }
    //listen to user input code
    var codebox = document.getElementById("codeentered") //get textbox
    codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox

    //run function if detected user had enteres character in textbox

function evaluateCode(){
    getCode = document.getElementById("codeentered").value; //get character entered
    var charset1 = getCode.trim (); //remove any hiden elements entered
    var charset2 = code.trim();
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1==charset2){
        disableButtom(false); //if match, run the functoin to enable buttom
    }
}