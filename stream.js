var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//
//     console.log('New Chunk Arrived:');
//     myWriteStream.write(chunk);
//
// } );

// myReadStream.on( 'data', function( chunk ) {
myReadStream.pipe( myWriteStream );
