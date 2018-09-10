var path = require('path');
var fs = require('fs');

var replacementString = 'Component';
var componentPath = 'common/components';


const buildStoryJs= () => {return ''};
const buildTestJs= () => { return ''};
const buildCss= () => {return ''};
const buildJS= () => {return ''};

let componentStruct = {
  "root":{
    "common":{
      "components":{
        "Component":[
          {
            "__stories__":[
                           {
                "Component.stories.js":  buildStoryJs
              }
            ]
          },
          {
            "__tests__":[
              
              {
                "Component.test.js" :buildTestJs
              } 
            ]
          },
          {
            "Component.css":buildCss
          },
          {
            "Component.js":buildJS
          }
        ]
      }
    }
  }
};
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
//const isFunction = (functionToCheck) => {
//  return (functionToCheck instanceof Function);
//return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
//}

const isArray = (objToCheck) => {
  return Array.isArray(objToCheck); 
}

function mkdirSyncRecursive(directory) {

  var newPath = directory.replace(/\\{1,2}/g, '/').split('/');
  for (var i = 1; i <= newPath.length; i++) {
    var segment = newPath.slice(0, i).join('/');
    segment.length > 0 && !fs.existsSync(segment) ? fs.mkdirSync(segment) : null ;
  }
};

const ensureDirectoryExistence = (filePath) =>{
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  //ensureDirectoryExistence(dirname);
  mkdirSyncRecursive(dirname);  
}

const writeFileData = (fileData, fileName) => {

  console.log(`Creating file for new Component: ${fileName}`); 
  ensureDirectoryExistence(fileName);

  fs.writeFileSync(fileName, fileData);  

}

const findRoot = () => {

  let thisPath = path.resolve(__dirname);
  while(!fs.existsSync(path.join(thisPath, 'package.json'))){
    thisPath = path.join(thisPath, '..')
  }
  return thisPath;
}

const doesComponentExist = (componentName, root) => {

  let newPath = path.join(root, componentPath, componentName); 
  if (fs.existsSync(newPath)){
    console.log(`Component \"${componentName}\" Already Exists`);
    return true;
  } 
  return false;

}

const recurseStructure = (subObject, currPath, componentName) => {
  for (let key in subObject) {
    if (subObject.hasOwnProperty(key)) {
      // we need to replace the template
      if (key.indexOf(replacementString) == 0){
        pathBase =  key.replace(replacementString, componentName);
      }
      else{
        pathBase = key 
      }
      currPath = path.join(currPath, pathBase)  
      // value is function - write output to currPath + key
      if (isFunction(subObject[key])){
        let fileData = subObject[key](componentName);
        writeFileData(fileData, currPath, key);
        return; 
      } 
      // value is array - recurse each item 
      if (isArray(subObject[key])){
        subObject[key].forEach(function (arrayItem) {
          recurseStructure(arrayItem, currPath, componentName);
        }); 
        return;
      }   
      // value is object - recurse object 
      recurseStructure(subObject[key], currPath, componentName);

    }
  }
}

const traverseStructure = (componentName)=> {

  const mainTree = componentStruct['root'] 
  let root = findRoot();
  // start at root, 
  if(!doesComponentExist(componentName, root)){
    recurseStructure(mainTree, root, componentName); 
  }
}

process.argv.slice(2).forEach(function (val, index, array) {
  traverseStructure(val)
});

