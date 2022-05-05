#!/usr/bin/env node
//se importa la función md-links
const mdLinks = require('./index.js')
// node methods process
const process = require('process');
const chalk = require('chalk');
const { resolve } = require('path');


//Captura argumentos desde la Terminal
const pathArg = process.argv[2];
const optionsArg = {};


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

if(process.argv.includes('--validate')){
    optionsArg.validate = true;
}


const cliFuntion = () => {
    mdLinks(pathArg, optionsArg)
    .then((result) => {
        // resolve(result)
        console.log('Hola desde cli',result)
    })
    .catch((error) => {
        console.log(error);
    })
}

cliFuntion();