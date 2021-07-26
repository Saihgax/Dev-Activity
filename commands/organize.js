let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

let fs = require("fs");
let path = require("path");

function isInTypes(entityExtn){

        for(let key in types){
            if(types[key].includes(entityExtn.slice(1))){
                return key;
            }
        }
        return "others";
}

function organizeFn(srcPath){ //We obtained the path for random folder
    let folderName = "organized";
    let dirPath = path.join(srcPath, folderName); // random\organized
    fs.mkdirSync(dirPath); //created a folder
    let allEntities = fs.readdirSync(srcPath); //contents of that 'organized' dir

    for(let i=0;i<allEntities.length;i++){
        let entityName = allEntities[i];
        if(entityName == "organized"){
            continue;
        }
        let srcEntityPath = path.join(srcPath, entityName); 
        let keyInTypes = isInTypes(path.extname(srcEntityPath)); 
        
        let categoryPath = path.join(dirPath, keyInTypes); // this includes path: organized\media
        
        let destPath = path.join(categoryPath, entityName); // example: organized\media\entity.mp4
        
        if(fs.existsSync(categoryPath)){
            fs.copyFileSync(srcEntityPath, destPath);
        }
        else{
            fs.mkdirSync(categoryPath);
            fs.copyFileSync(srcEntityPath, destPath);
        }
    }
}

module.exports = {
    organizeFun: organizeFn
}