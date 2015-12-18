/*  Copyright (c) 2012 Sven "FuzzYspo0N" Bergström

    http://underscorediscovery.com

    MIT Licensed. See LICENSE for full license.
    Usage : node simplest.app.js
*/

        // gameport        = process.env.PORT || 4004,
        var app = require('express')();
        var http = require('http').Server(app);
        var io = require('socket.io')(http);
        verbose         = false;
        // app             = express.createServer();

/* Express server set up. */

//The express server handles passing our content to the browser,
//As well as routing users where they need to go. This example is bare bones
//and will serve any file the user requests from the root of your web server (where you launch the script from)
//so keep this in mind - this is not a production script but a development teaching tool.
    var players = 0;
        //Tell the server to listen for incoming connections



        //Log something so we know that it succeeded.
    console.log('\t :: Express :: Listening on port 3000' );

        //By default, we forward the / path to index.html automatically.
    app.get( '/', function( req, res ){
        res.sendFile( __dirname + '/index.html' );
    });


    // io.on('connection', function(socket){
    //   console.log('a user connected');
    // });
        //This handler will listen for requests on /*, any file from the root of our server.
        //See expressjs documentation for more info on routing.

    app.get( '/*' , function( req, res, next ) {
            //This is the current file they have requested
        var file = req.params[0];

            //For debugging, we can track what files are requested.
        if(verbose) console.log('\t :: Express :: file requested : ' + file);

            //Send the requesting client the file.

        res.sendFile( __dirname + '/' + file );

    }); //app.get *



    http.listen(3000, function (){
      console.log('socket is on')
    });


    io.on('connection', function(socket){
      players += 1;
      socket.on('disconnect', function() {
        players -= 1;
        io.emit('players', players);
      });
      // io.emit('connection', players);
      io.emit('players', players);
      console.log('Num Players:' + players);
      socket.on('update', function(box) {
        io.emit('update', box);
      })
    });
