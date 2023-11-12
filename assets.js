  /* 
 INTEGER = 5,3,2,1,55,64,44444,232423423,7
 FLOAT = 0.1 , .5555, .23
 scientific notation = 111x111


 EXEMPLO E DIFERENÇA DE VARIAVEIS PARA  NUMEROS E LETRAS:
 Assigning a string to a variable:
 var Strings = ("I am a string");
 var Numbers1 = 5;


 DECLARAÇÃO DE VARIAVEIS PARA INPUT NO NAVEGADOR
 
 var VisitorAge = prompt ("What is your age?");

 var VisitorName = prompt ("What is your name?");

 document.write("Hello " + VisitorName + " Your age is " + VisitorAge); 
*/

/*
DECLARAÇÃO DE INPUT PELO USUÁRIO PELO NAVEGADOR

alert("Welcome");

var VisitorName = prompt('What is your name?');
var VisitorFavouriteColour = prompt('What is your favorite colour?');
document.write('Hello ' + VisitorName + ' Your favourite colour is ' + VisitorFavouriteColour);
document.onplaying('Progress completed');
*/

var VisitorAge = prompt("How many years you're alive");
var YearsAlive = parseInt(VisitorAge);
YearsAlive = YearsAlive * 365;
document.write("You have been alive for " + YearsAlive + " Days!" );

