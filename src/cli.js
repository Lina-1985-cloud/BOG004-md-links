#!/usr/bin/env node
const mdLinks = require("./index.js");
const process = require("process");
const chalk = require("chalk");
const { arrayTemplate, statusTemplate, totalLinks, totalLinksBroken } = require("./stats.js");

const arguments = process.argv.slice(2);

// se importa librería Figlet para dar estilo al nombre md-links
let figlet = require('figlet');
const { url } = require("inspector");
const { text } = require("figlet");
  figlet('Md-Links', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
    }
      console.log(data)
});


switch (arguments.length) {
  case 0:
    console.log(chalk.redBright.bold("🚨  • Por favor Ingresa una Ruta • 🚨  "));
    break;
  case 1:
    mdLinks(arguments[0], { validate: false })
      .then((response) => {
        console.log(`${arrayTemplate(response)}`);
      })
      .catch((err) => console.log(chalk.redBright.bold(err)));
    break;
  case 2:
    //console.log('argumento[1]', arguments[1]);
    if (arguments[1] === "--validate") {
      // console.log('argumento[0]', arguments[0]);
      mdLinks(arguments[0], { validate: true })
        .then((response) => {
          console.log(`${statusTemplate(response)}`);
        })
        .catch((err) => console.log(chalk.redBright.bold(err)));
    } else if (arguments[1] === "--stats") {
      mdLinks(arguments[0], { validate: true })
        .then((response) => {
          console.log(`${totalLinks(response)}`);
        })
        .catch((err) => console.log(chalk.redBright.bold(err)));
    }
    else console.log(chalk.redBright.bold("🚨  • Opción Inválida • 🚨  "));
    break;
  case 3:
    if (
      (arguments[1] === "--validate" && arguments[2] === "--stats") ||
      (arguments[1] === "--stats" && arguments[2] === "--validate")
    ) {
      mdLinks(arguments[0], { validate: true })
        .then((response) => {
          console.log(`${totalLinksBroken(response)}`);
        })
        .catch((err) => console.log(chalk.redBright.bold(err)));
    } else console.log(chalk.redBright.bold("🚨  • Opción Inválida • 🚨  "));
    break;
  default:
    console.log(chalk.redBright.bold("🚨  • Entrada de Datos Incorrectos• 🚨  "));
}
