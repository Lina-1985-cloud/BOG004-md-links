#!/usr/bin/env node

//se importa la función md-links
const mdLinks = require("./index.js");
const finalOutput = require("./nodeMethods.js")
// node methods process
const process = require("process");
const chalk = require("chalk");
const { link } = require("fs");

// let figlet = require('figlet');
// const { url } = require("inspector");
// const { text } = require("figlet");
// figlet('Md-Links', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
// }
//     console.log(data)
// });

//Captura argumentos desde la Terminal
const pathArg = process.argv[2];
const optionsArg = {};

if (process.argv.includes("--validate")) {
  optionsArg.validate = true;
}

if (process.argv.includes("--stats")) {
  optionsArg.stats = true;
}

const terminalArg = [pathArg];

if(optionsArg.validate === true){
  terminalArg.push('--validate')
}

if(optionsArg.stats === true){
  terminalArg.push('--stats')
}

mdLinks(pathArg, optionsArg)
.then((result) =>{
  console.log('Hola desde cli',terminalArg, result)
})
.catch((err)=>{
  console.log(err)
})

