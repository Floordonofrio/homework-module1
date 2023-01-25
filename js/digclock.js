//Clock
//1.Creat a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM
    //Get current zone
    var zone = new Date().toLocaleTimeString('en-us', {timeZoneName:'short'}).split(' ')[2]; 

    //Get current zone challenge
    var utchr = d.getUTCHours (); //Get current Greenwich Mean Time (GMT)*/
    var timeDiff = hr - utchr; //To store time difference between GMT hour and Local hour
    var adjTimeDiff = Math.abs(timeDiff) ; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)*/
    /*var zone = new Date().toLocaleTimeString('en-us', {timeZoneName:'short'}).split(' ')[2]; */

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    } else {
        ampm = "AM";
    }

    //Determin timezone
    if (adjTimeDiff == 6) {
        timeZone = "CT";
    } else if (adjTimeDiff == 7) {
        timeZone = "ET";
    } else if (adjTimeDiff == 5) {
        timeZone = "MT";
    } else if (adjTimeDiff == 4) {
        timeZone = "PT";
    } else {
        timeZone = utchr;
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + zone;
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time;
    //Run time data function every 1 second
    setInterval (currentTime, 1000);
}
//Initial run of time data function
currentTime();


