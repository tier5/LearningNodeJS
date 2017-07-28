var http = require( 'http' );
var fs = require( 'fs' );

var server = http.createServer( function( req, res ) {

    console.log( 'Request was made from ' + req.url );

    /*
    // Serving 'plain text' to the browser
    res.writeHeader( 200, { 'Content-Type': 'text/plain' } );

	var myReadStream = fs.createReadStream( __dirname + '/readMe.txt', 'utf8' );
	myReadStream.pipe( res );
	*/

    /*
	// Serving 'html' to the browser
	res.writeHeader( 200, { 'Content-Type': 'text/html' } );

	var myReadStream = fs.createReadStream( __dirname + '/index.html', 'utf8' );
	myReadStream.pipe( res );
	*/

    /*
    // Serving 'json' to the browser
	res.writeHeader( 200, { 'Content-Type': 'application/json' } );

	var obj = {
		name: 'Anup',
		job: 'Junior Frontend Developer',
		age: '21',
		status: 'Actively Working'
	}

	res.end( JSON.stringify( obj, null, 4 ) );
	*/

    if ( req.url === '/home' || req.url === '/' ) {

    	res.writeHeader( 200, { 'Content-Type': 'text/html' } );
    	fs.createReadStream( __dirname + '/index.html' ).pipe( res );

    } else if ( req.url === '/contact' ) {

	    res.writeHeader( 200, { 'Content-Type': 'text/html' } );
	    fs.createReadStream( __dirname + '/contact.html' ).pipe( res );

    } else if ( req.url === '/json' ) {

		res.writeHeader( 200, { 'Content-Type': 'application/json' } );

		var obj = {
			name: 'Anup',
			job: 'Junior Frontend Developer',
			age: '21',
			status: 'Actively Working'
		}

		res.end( JSON.stringify( obj, null, 4 ) );

	} else {

	    res.writeHeader( 404, { 'Content-Type': 'text/plain' } );
    	res.end( 'No Content Found' );
    }

} );




server.listen(27015, '127.0.0.1');
console.log('Listening to port 27015');