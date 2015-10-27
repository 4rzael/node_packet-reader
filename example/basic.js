'use strict';

// Records for 30 seconds, then exit

var PacketReader = require('../index.js');

var pr = new PacketReader('wlan0mon');

pr.start();

pr.on('packet', function (packet) {
    console.log('packet received from ', packet.mac_address, ', signal_strength :', packet.signal_strength);
});

pr.on('end', function () {
    console.log('Bye Bye.');
    process.exit(-1);
});

pr.on('error', function (err) {
    console.log('ERROR:', err);
});

setTimeout(pr.stop, 30000);
