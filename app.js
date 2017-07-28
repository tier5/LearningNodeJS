var express = require( 'express' );

var app = express();

app.set( 'view engine', 'ejs' );

app.get( '/', function ( req, res ){
	res.render( 'index' );
} );

app.get( '/contact', function ( req, res ) {
	res.render( 'contact' );
} );

app.get( '/profile/:name', function ( req, res ) {
	// res.send('You requested to see profile with id ' + req.params.id );
	var obj = {
		name: req.params.name,
		job: 'Junior Frontend Developer',
		age: '21',
		status: 'Actively Working',
		hobbies: [ 'eating', 'playing', 'coding' ]
	}
	res.render( 'profile', { data: obj } );
} );

app.listen( 3000 );
