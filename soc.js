const net = require('net');

const client = net.connect('4711', 'localhost', () => {
    console.log('connected to mcpi reborn');
    client.write('player.getPos()\n');
});

client.on('data', data => {
    var recv = data.toString().trim().split(",");
    client.write('world.setBlock('+(parseInt(recv[0]) + 1)+','+parseInt(recv[1])+','+parseInt(recv[2])+',46,1)\n');
    client.destroy();
});
