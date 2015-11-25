'use strict';
// let im = require('imagemagick');
// convert -append *.png out.jpg
let request = require('request');
let fs = require('fs');
// let abaculus = require('abaculus');
let lng = 43.9741;
let lat = -79.4126;
let zoom = 12;

// lng+=0,3


for(var i = 1; i < 21; i++) {
  lat += 0.4376;
  let place = [lat, lng, zoom].join(',');
  let url = 'http://api.tiles.mapbox.com/v3/spencermountain.o8ihelob/' + place + '/1280x1280.png';
  console.log(url);
  let file = __dirname + '/images/' + i + '.png';
  request(url).pipe(fs.createWriteStream(file)).on('close', function() {});

}
