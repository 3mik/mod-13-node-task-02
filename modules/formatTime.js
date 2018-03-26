function formatTime (time) {    
    var Seconds = time % 60;
    var Minutes = ((time - Seconds)/60) % 60;
    var Hours = (((time - Seconds)/60) - Minutes) /60;
    return `${Hours}h : ${Minutes}m : ${Seconds}s`
}

exports.print = formatTime;

