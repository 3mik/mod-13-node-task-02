
var OSinfo = require('../modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdout.write('App is running...');
var menu = ('\nType /menu for menu\nType /getOSinfo to display information\nType /exit to quit app\n\nWaiting for input...\n');
process.stdout.write(menu);
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit': {
                process.stdout.write('Quitting app!\n');
                process.exit();
                break 
            }
            case '/menu': {
                process.stdout.write(menu);
                break
            }
            case '/getOSinfo': {
                OSinfo.print();
                break;
            }
            default: {
                process.stderr.write('Wrong instruction!\nTry again...\n');
                break
            }
        }
    }
});


