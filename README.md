# packet-reader

A tiny wrapper for tcpdump.


## What is it ?

packet-reader is a tiny node module for packet reading.

It allows, for example, to scan wifi environment and find wifi devices around.

## How to use it ?

Here is an example of code :

```js
'use strict';

var PacketReader = require('packetReader');

var pr = new PacketReader('wlan0mon');

pr.on('packet', function (packet) {
    console.log('packet received from ', packet.mac_address, ', signal_strength :', packet.signal_strength);
});

pr.on('close', function () {
    console.log('Bye Bye.');
    process.exit(-1);
});

pr.on('error', function (err) {
    console.log('ERROR:', err);
});
```

## What infos does it provide ?

At this time, it just allows to see MAC addresses and signal strengths.

Feel free to add content !

## License

MIT