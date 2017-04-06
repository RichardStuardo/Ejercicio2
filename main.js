var nombre = prompt("Ingresa tu nombre")
var edad = prompt("Ingresa tu edad")
var edadQuiere = prompt("ingresa la edad que quieres")
var edadFaltante = Number(edad) - Number(edadQuiere)
var edadRejuvenecer = Number(edadQuiere) - Number(edad)
if (edad >= edadQuiere){
alert(" Tendrás que quitarte " + edadFaltante + " años para tener " + edadQuiere )
}
if(edad < edadQuiere){
alert("Tendrías que esperar " + edadRejuvenecer + " años ")
}