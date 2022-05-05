// const fetch = require('node-fetch');

// const getStatusHttp = (arrayObLinks) => {
//     const arrayPromisse = arrayObLinks.map((obj) => fetch.get(obj.href)
//       .then((res) => ({
//         href: obj.href,
//         text: obj.text,
//         file: obj.file,
//         status: res.status,
//         ok: res.ok ? 'OK' : 'FAIL'
//       }))
//       .catch(() => ({
//         href: obj.href,
//         text: obj.text,
//         file: obj.file,
//         status: 500,
//         ok: 'FAIL'
//       })));
//     return Promise.all(arrayPromisse);
//   };
//   getStatusHttp()

// **********************
  // const content = fileContent;
  // const contentLinks = content.match(regxLink);
  // let convertLinks;
  // if (contentLinks) {
  //   convertLinks = contentLinks.map((links) => {
  //     const linkHref = links.match(regxUrl).join().slice(1, -1);
  //     const linkText = links.match(regxText).join().slice(1, -1);

  //     return {
  //       href: linkHref,
  //       text: linkText.substring(0, 50),
  //       file: filePath,
  //     };
  //   });
  // } else if (contentLinks === null) {
  //   return [];
  // }
  // return convertLinks;
// **********************

//   const getLinks = (fileContent, filePath) => {
//     const regxLink = new RegExp(/\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm);
//     const regxUrl = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
//     const regxText = /\[[\w\s\d.()]+\]/;
//   const arrayObLinks = [];
//   fileContent.forEach((arcMD)=>{
//     const fileContent = readFileContent(arcMD)
//     let foundLinks = [];
//     foundLinks = fileContent.match(regxLink);
//     foundLinks = contentLinks;
//     if(foundLinks != null){
//       foundLinks.forEach((link)=>{
//         const objLink = {};
//         objLink.href = link.match(regxUrl).toString();
//         objLink.text = link.match(regxText).toString().slice(0,50);
//         objLink.file = filePath
//         arrayObLinks.push(objLink);
//       })
//     }
//   })
// };

// //Petición HTTP:
// const getStatusLinks = (href, text) =>{
//     console.log('soy fetch',text)
//     fetch(href)
//         .then(res => res.status)
//         .then(text => console.log(text));
  
//   }

// //Función para Comprobar el estado de los links 👇

// //Petición HTTP:
// const getStatusLinks = (convertLinks) =>{
//     console.log('soy fetch KHE ONDA',convertLinks)
  
//   }


// ****************************************

// let arg = []
// if(options.validate === true){
//   arg.push('--validate')
// }
//   //--------- Se invoca la Función de ReadFileContent para que se resuelva la promesa:👇 ---------
//   readFileContent(arg,validatePath(pathAbsolute))
//   .then((result)=> {
//     resolve(result);
//   })
//   .catch((err)=>{
//     reject(err);
//   })

// ****************************************
  //función para validar
//   const validatePath = (verifyPath) =>{
// // const validatePath = (path) => fs.existsSync(path);

//     const resultValidatePath = fs.existsSync(verifyPath);
//     let arrayFilePathMd;
//     if(resultValidatePath){
//       arrayFilePathMd = fileSearch([], verifyPath)
//     }else{
//       const invalidPath = 'Ruta no valida'
//       return invalidPath;
//     }
//     return arrayFilePathMd;
//   }
