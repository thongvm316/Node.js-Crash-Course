const path = require('path');

// Base file name
console.log(__filename) //  /home/thongvm/NodeJs/reference/path_demo.js
console.log(path.basename(__filename)) // path_demo.js

// Directory name
console.log(path.dirname(__filename)) // /home/thongvm/NodeJs/reference

// File extension
console.log(path.extname(__filename)) // .js

// Create path object
console.log(path.parse(__filename))
/* 
{
  root: '/',
  dir: '/home/thongvm/NodeJs/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/
console.log(path.parse(__filename).dir) // /home/thongvm/NodeJs/reference

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')) // /home/thongvm/NodeJs/reference/test/hello.html