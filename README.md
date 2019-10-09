# ColorConverter Application

## Indítási útmutató
Az alkalmazás indításához nodejs szerver környezet szükséges. 

Az alkalmazás az app könyvtárban található a server.js fájl indítja el. 
Indításhoz az ```npm start``` parancsot kell kiadni. 

Az alkalmazás a 3000 -es porton indul el.

DEBUG Log üzenetek a konzol kimeneten elérhetőek.

ERROR, ACCESS és Application logok a log könyvtárból érhetőek el.

## Funkciók

Az alkalmazás elindítása után a http://locahost:3000 webcímen elérhető a program kezdő oldala. 

További funkciók a következő 2 endpointon keresztül érhetőek el:

### HEX színkód konvertálása RGB színkóddá

hex #00ff00 konvertálása rgb színkóddá 

pl.: http://localhost:3000/hexToRgb?hex=00ff00

### RGB színkód konvertálása HEX színkóddá

red=255
green=255
blue=255

pl.: http://localhost:3000/rgbToHex?red=255&green=255&blue=255
