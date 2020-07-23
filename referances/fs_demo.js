const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     console.log((__dirname))
//     if (err) throw err;
//     console.log('Folder create...')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'CreateFile.txt'), 
//     'This params is used to write content', 
//     err => {
//         if (err) throw err;
//         console.log('Folder create...')

//         // File append
//         fs.appendFile(path.join(__dirname, '/test', 'CreateFile.txt'), 
//         'Overwrite File 123456789', 
//         err => {
//             if (err) throw err;
//             console.log('Folder create...')
//         }) 
//     }
// )

/* Read File */
// fs.readFile(path.join(__dirname, '/test', 'CreateFile.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

/* Rename File */
fs.rename(
    path.join(__dirname, '/test', 'CreateFile.txt'),
    path.join(__dirname, '/test', 'Rename.txt'),
    (err, data) => {
        if (err) throw err;
        console.log('File renamed...')
    }
)




