let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let fs = require("fs");
let path = require("path");
// let ex = '.mkv'
// console.log(typeof types["media"][0])
// console.log(types.media.includes(ex.slice(1)))

function isInTypes(entityExtn){
    for(let i=0;i<types.length;i++){
        for(let key in types){
            if(types[key].includes(entityExtn.slice(1)){
                return key;
            }
        }
    }
}

function organizeFn(srcPath){ //We obtained the path for random folder
    fs.mkdirSync("organized");
    let newDest = path.join(srcPath, "organized");
    let allEntities = fs.readdirSync(srcPath);

    for(let i=0;i<allEntities.length;i++){
        let entityName = allEntities[i];
        let entityPath = path.join(newDest, entityName);
        let designatedEntityFolder = isInTypes(path.extname(entityPath))
    }
//resolved

}

// module.exports = {
//     organizeFun: organizeFn
// }