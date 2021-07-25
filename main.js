let helpObj = require("./commands/help"); 
let treeObj = require("./commands/tree"); 
let organizeObj = require("./commands/organize");
const tree = require("./commands/tree");

let inputArr = process.argv.slice(2);
let inputCommand = inputArr[0];
let inputPath = inputArr[1];

if(inputCommand=="tree"){
    treeObj.treeFun(inputPath);
}
else if(inputCommand=="organize"){
    organizeObj.organizeFun(inputPath)
}
else{
    helpObj.helpFun;
}