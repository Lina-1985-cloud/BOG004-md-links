// Importamos Módulos de node
const {
  converterPath,
  validatePath,
  fileSearch,
  readFileContent,
  httpPetitionStatus
} = require("./nodeMethods.js");

// const path = require("path");


//--------- node methods filesystem - path ---------
const chalk = require("chalk");

//--------- Función mdLinks 👇 ---------
const mdLinks = (path, options = {validate:false}) => new Promise((resolve, reject) => {

    //--------- convertir ruta capturada en absoluta ---------
    const pathAbsolute = converterPath(path);
    //--------- Guardo el rersultado e invoco la función pasando como argumento pathAbsolute ---------
    const resultValidatePath = validatePath(pathAbsolute);

    //--------- Condicional que valida la ruta y la recursividad invocando la función fileSearch desde nodeMethods ---------
    let arrayFilePathMd = [];
    if (resultValidatePath) {
      const filesMd = fileSearch(arrayFilePathMd, pathAbsolute)// invocamos la función que nos da la recursividad
      if (filesMd.length === 0){
        console.log(chalk.redBright(`
        ╔════════════════════╗

    El directorio No contiene Archivos 🧐
        
        ╚════════════════════╝`
      ))
      }
    } else {
        const invalidPath = ` 
        ╔════════════════════╗

    La ruta ingresada no es válida 😕
        
        ╚════════════════════╝
        
        `
        console.log(chalk.redBright.bold(invalidPath));
    }

    //--------- Se invoca la Función de ReadFileContent para que se resuelva la promesa:👇 ---------
readFileContent(arrayFilePathMd)
      .then((objectLinks) => {
        if (objectLinks.length === 0) {
          console.log(chalk.redBright(` 
          ╔════════════════════╗

        El Archivo no contiene Links 🧐 
          
          ╚════════════════════╝`
          ))
        } else {
          console.log(
            chalk.blueBright.bold(` ──────────✿◦• Links Encontrados ✔️  ✿◦•──────────   `
            )
          );
          if(options.validate === true){
            httpPetitionStatus(objectLinks).then(response => {
              resolve(response);
            // console.log('RESUELVE PLEASEE', response);
          })
          }else{
            resolve(objectLinks);
          }
        }
      })
      .catch((error) => {
        const errorMessage = "Error";
        reject(error, errorMessage);
      });
  });

module.exports = mdLinks;
