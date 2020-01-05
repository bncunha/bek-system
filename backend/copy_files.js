const ncp = require('ncp').ncp;

const sources = ['src/environments', 'init.bat']
const destinations = ['dist/environments', 'dist/init.bat'];

sources.forEach((source, index) => {
    ncp(source, destinations[index], (err) => {
     if (err) {
       return console.error(err);
     }
     console.log('Copied Files!');
    });
})