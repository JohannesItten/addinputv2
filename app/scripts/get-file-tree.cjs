// It's simple node script to generate file tree JSON
// with given root
const { argv } = require('node:process');
const path = require('path');
const fs = require('node:fs');

const fileIcon = 'material-symbols-light:lab-profile-rounded';

const getTreeSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const dirFile = path.join(dir, file);
        const dirent = fs.statSync(dirFile);
        if (dirent.isDirectory()) {
            var odir = {
                label: file,
                children: []
            }
            odir.children = getTreeSync(dirFile, dir.files);
            filelist.push(odir);
        } else {
            // value = truncated absolute path to serve files with nginx,
            // separately from Nuxt Js web-server
            //Example:
            // abs path = /var/www/softpack/
            // truncator = /var/www
            // value = /softpack/foo.elf
            let pathTruncPosition = dirFile.indexOf(pathTrunc);
            pathTruncPosition = pathTruncPosition >=0 ? pathTruncPosition : 0;
            filelist.push({
                label: file,
                icon: fileIcon,
                value: dirFile.slice(pathTruncPosition),
                filename: path.basename(dirFile)
            });
        }
    }
    return filelist;
};

let root = argv[2];
let resultFilePath = argv[3];
let pathTrunc = argv[4];

if (root === undefined || 
    resultFilePath === undefined ||
    pathTrunc === undefined) {
    console.log('Correct usage: node get-file-tree.cjs {DIR} {JSON_FILE_PATH} {PATH_TRUNCATOR}');
    return;
}

if (pathTrunc.endsWith('/')) {
    pathTrunc = pathTrunc.slice(0, -1);
}

if (!fs.existsSync(root)) {
    console.log('Given directory is not exist: ' + root);
    return;
}
tree = getTreeSync(root, []);
try {
    fs.writeFileSync(resultFilePath, JSON.stringify(tree));
}
catch (error){
    console.log('Could not write result to ' + resultFilePath);
}