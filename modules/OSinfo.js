var os = require('os');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = Math.round(os.uptime());
    var upSeconds = uptime % 60;
    var upMinutes = ((uptime - upSeconds)/60) % 60;
    var upHours = (((uptime - upSeconds)/60) - upMinutes) /60;
    var userInfo = os.userInfo();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime(hh:mm:ss): ', `${upHours}h : ${upMinutes}m : ${upSeconds}s`);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;