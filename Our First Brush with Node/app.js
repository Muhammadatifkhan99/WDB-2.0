// for(let i=0;i<10;i++){
//     console.log("Hello from the first script");

const args = process.argv.slice(2);

for(let arg of args){
    console.log(`Hi there, ${arg}`);
}



