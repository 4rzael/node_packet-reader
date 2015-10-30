# packet-reader

A tiny wrapper for tcpdump.


## What is it ?

packet-reader is a tiny node module for packet reading.

It allows, for example, to scan wifi environment and find wifi devices around.


## How to use it ?

Here is an example of code :

```js
'use strict';

// Records for 30 seconds, then exit

var PacketReader = require('packet-reader');

var pr = new PacketReader('wlan0mon');

pr.start();

pr.on('packet', function (packet) {
    console.log('packet received from ', packet.mac_address, ', signal_strength :', packet.signal_strength, 'type :', packet.type);
});

pr.on('end', function () {
    console.log('Bye Bye.');
    process.exit(-1);
});

pr.on('error', function (err) {
    console.log('ERROR:', err);
});

setTimeout(pr.stop, 30000);
```

## What infos does it provide ?

At this time, it only provides theses infos about packets :

* sender MAC address

* sender signal strength

* receiver MAC address

* frame type ('Beacon', 'Probe Request' or 'other')

* BSSID of the sender if Beacon

* AP name if Beacon

Feel free to add contents !


## requires

* tcpdump

* node v0.10.X

* A monitoring interface to read packets from


## License

MIT