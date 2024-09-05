// for(let i=0;i<10;i++){
//     console.log("Hello from the first script");

// const args = process.argv.slice(2);

// for(let arg of args){
//     console.log(`Hi there, ${arg}`);
// }


//File System Module---used to interact with the file system module

const fs = require('fs');

const folderName = process.argv[2] || 'Project'



//this is the asynchronous version 
// fs.mkdir('Dogs', {recursive: true}, (err) =>{
//     console.log("In the Callback!!")
//     if(err) throw err;
// });
// console.log("Done")



//this is the synchronous version
fs.mkdirSync(folderName);
//this code will run after the completion of the synchronous function
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)


// console.log("I came after the mkdir");



