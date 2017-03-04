var display = function () {
    "use strict";
    var master, hours, minutes, seconds, dindex, day, ap;
    master = new Date();
    hours = master.getHours();
    minutes = master.getMinutes();
    seconds = master.getSeconds();
    //setting AM and PM
    ap = "AM";
    if (hours > 12) {
        hours = hours - 12;
        ap = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }
    // Adding zeroes
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //printing time
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ap;
    //getting day and assinging value
    dindex = master.getDay();
    switch (dindex) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 0:
        day = "Sunday";
        break;
    }
    //printing day
    document.getElementById("day").innerHTML = day;
};

var tick = function () {
    "use strict";
    display();
    setInterval(display, 1000);
};

var changecolor = function (x) {
    "use strict";
    document.body.style.backgroundColor = x;
};

