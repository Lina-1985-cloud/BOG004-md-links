# Markdown Links

## Índice

* [1. Diagrama de Flujo](#1-diagrama)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Librerías utilizadas](#3-librerías-utilizadas)
* [4. Librerías utilizadas externas](#4-Librerías-utilizadas-externas)
* [5. Lenguajes utilizados](#5-Lenguajes-utilizados)
* [6. Pruebas Unitarias](#6-pruebas-unitarias)
* [7. Instalación ](#7-Instalación)
* [8. Ejemplos de uso en la Linea de Comandos bash ](#8-Ejemplos-de-uso-en-la-Linea-de-Comandos-bash)
* [9. Opciones](#9-opciones)
* [10. Creado por](#10-creado-por)

***

## 1. Diagrama

![Diagrama de flujo]('https://github.com/Lina-1985-cloud/BOG004-md-links/blob/main/images/MD-links.png')

***

## 2. Resumen del proyecto 🌻

Esta librería se diseñó para leer archivos con extensión ".md" (markdown) y extraer todos los links, dentro de la ruta de directorio proporcionada por el usuario.

***

## 3. Librerías utilizadas de node.js 

* fs
* path
* console

***


## 4. Librerías utilizadas externas 

* chalk 
* figlet 

***

## 5. Lenguajes utilizados 

El código está realizado en javaScript.

***

## 6. Pruebas unitarias 

Las pruebas se ejecutaron usando Jest.

***

## 7. INSTALACION 
npm install md-links

***

## 8. Ejemplos de uso en la Linea de Comandos bash 
# Ingresar el comando "md-links" + la ruta del directorio a explorar:

```sh

$ md-links ./files-mds
  __  __     _       _     _       _        
 |  \/  | __| |     | |   (_)_ __ | | _____ 
 | |\/| |/ _` |_____| |   | | '_ \| |/ / __|
 | |  | | (_| |_____| |___| | | | |   <\__ \
 |_|  |_|\__,_|     |_____|_|_| |_|_|\_\___/

| ⋆ LINKS ENCONTRADOS ⋆ | :
href:  https://gith.com/Lina-1985-cloud/BOG004-md-links text:  GitHub  fileName: D:\Proyectos-Laboratoria\BOG004-md-links\files-mds\otraPrueba.md 
 ---- 
href:  https://www.youtube.com/ text:  Youtube  fileName: D:\Proyectos-Laboratoria\BOG004-md-links\files-mds\prueba-3.md 
 ---- 
href:  https://nodejs.org/api/fs.html text:  Node.js  fileName: D:\Proyectos-Laboratoria\BOG004-md-links\files-mds\prueba-2.md 
 ---- 
href:  https://www.google.com/ text:  Google  fileName: D:\Proyectos-Laboratoria\BOG004-md-links\files-mds\prueba.md 
 ---- 
```

## 9. Opciones 🌻

--validate:  valida los links que están dentro de los archivos .md

```sh

$ md-links ./files-mds --validate
  __  __     _       _     _       _        
 |  \/  | __| |     | |   (_)_ __ | | _____ 
 | |\/| |/ _` |_____| |   | | '_ \| |/ / __|
 | |  | | (_| |_____| |___| | | | |   <\__ \
 |_|  |_|\__,_|     |_____|_|_| |_|_|\_\___/

| ⋆ ESTADO DE LOS LINKS ⋆ | :
href: https://www.youtube.com/  status: 200  ok: OK
 ---
href: https://nodejs.org/api/fs.html  status: 200  ok: OK
 ---
 href: https://gith.com/Lina-1985-cloud/BOG004-md-links  status: 404  fail: fail
 --- 

href: https://www.google.com/  status: 200  ok: OK
```
***

--stats:  Muestra las estadísticas de los links

```sh

$ md-links ./files-mds --stats
  __  __     _       _     _       _        
 |  \/  | __| |     | |   (_)_ __ | | _____ 
 | |\/| |/ _` |_____| |   | | '_ \| |/ / __|
 | |  | | (_| |_____| |___| | | | |   <\__ \
 |_|  |_|\__,_|     |_____|_|_| |_|_|\_\___/

 
    | ⋆ ESTADÍSTICAS ⋆ |:
    
        ▷ Total:4        
        ▷ Unique:4       
    
```
***

--validate y --stats:  Valida los links mostrando si todos funcionan o hay uno roto

```sh

$ md-links ./files-mds --validate --stats
  __  __     _       _     _       _        
 |  \/  | __| |     | |   (_)_ __ | | _____ 
 | |\/| |/ _` |_____| |   | | '_ \| |/ / __|
 | |  | | (_| |_____| |___| | | | |   <\__ \
 |_|  |_|\__,_|     |_____|_|_| |_|_|\_\___/

 
    | ⋆ ESTADÍSTICAS CON --VALIDATE ⋆ |:
    
        ▷ Total:4 
        ▷ Unique:4 
        ▷ Broken:1 
```

## 10. Creado por:
Lina Marcela Villa 🌻
