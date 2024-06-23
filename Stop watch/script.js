// Declare the variables 
let hour, timer, minute, second, interval;

let getSeconds = 0, getMinutes = 0, getHours = 0;

let laps = [];  // array to store lap times

function stopwatch() {

    this.start = function() 
    {
        hour = document.getElementById("hour");
        minute = document.getElementById("minute");
        second = document.getElementById("second");

        if (getSeconds < 59) {
            getSeconds++;
        } else {
            getSeconds = 0;
            getMinutes++;
            if (getMinutes < 60) {
                minute.innerHTML = (getMinutes < 10 ? "0" : "") + getMinutes + ":";
            } else {
                getMinutes = 0;
                getHours++;
                hour.innerHTML = (getHours < 10 ? "0" : "") + getHours + ":";
            }
        }
        second.innerHTML = (getSeconds < 10 ? "0" : "") + getSeconds;

        interval = setTimeout(object.start, 1000); // recursively call the start method every second
    };

    this.stop = function() {
        clearTimeout(interval); //clear the timeout to stop the stopwatch
    };

    //method to reset the stopwatch 
    this.reset = function() {
        getSeconds = 0;
        getMinutes = 0;
        getHours = 0;
        second.innerHTML = "00";
        minute.innerHTML = "00:";
        hour.innerHTML = "00:";
        clearTimeout(interval);
        laps = [];
        document.getElementById("laps").innerHTML = "";
    };

    // method to record lap time
    this.lap = function() {

        //format the current time as lap time string
        let lapTime = `${(getHours < 10 ? "0" : "") + getHours}:${(getMinutes < 10 ? "0" : "") + getMinutes}:${(getSeconds < 10 ? "0" : "") + getSeconds}`;
        laps.push(lapTime); // add the lap time to laps array

        //create new div element for the lap time
        let lapElement = document.createElement("div");
        lapElement.className = "lap"; //set the class name for styling
        lapElement.innerText = `Lap ${laps.length}: ${lapTime}`;  //set the text to show the lap number and time
        document.getElementById("laps").appendChild(lapElement);
    };
}

let object = new stopwatch();  //create new instance of the stopwatch