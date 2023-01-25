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