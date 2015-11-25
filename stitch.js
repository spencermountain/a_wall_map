'use strict';
let im = require('imagemagick');
im.convert(['+append', './images/*.png', 'out.jpg'],
  function(err, stdout) {
    if (err) {
      throw err;
    }

  });

  // convert 1.png in-5.jpg in-N.jpg +append out-in1-plus-in5-and-inN.jpg
