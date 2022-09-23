var fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

// in the console run $ node task3.js