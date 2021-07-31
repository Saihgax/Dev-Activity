let fs = require("fs");
let path = require("path");

function treeFn(src){
    if(src==undefined){
        src = process.cwd();
    }

    let content = fs.readdirSync(src);
    let parentFolderName = path.basename(src);
    let completePath = "└──" + parentFolderName;
    // console.log(completePath);
    for(let i=0;i<content.length;i++){
        completePath += "\n\t" + "├──" + content[i];
    }
    console.log(completePath);
}

module.exports = {
    treeFun: treeFn
}