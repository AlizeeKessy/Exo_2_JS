/*Exercice 2:
Cet algorithme est destiné à prédire l'avenir, et il doit être infaillible !
Il lira au clavier l’heure et les minutes, et il affichera l’heure 
qu’il sera une minute plus tard.
Par exemple, si l'utilisateur tape 21 puis 32, l'algorithme doit répondre :
"Dans une minute, il sera 21 heure(s) 33".
NB : on suppose que l'utilisateur entre une heure valide. Pas besoin donc de la vérifier.
De même que le précédent, cet algorithme doit demander une heure et en afficher une autre. 
Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une 
seconde plus tard.
Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre : 
"Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)".
*/



let iHeure = parseInt(prompt("Entrer une Heure"));
let iMinute = parseInt(prompt("Entrer des Minutes"));
let temps = 0;
if (temps < iHeure && temps < iMinute + 1) {
  console.log("Il sera ",iHeure, " heure(s) ",iMinute + 1);
  alert("Il sera "+iHeure + " heure(s) "+(iMinute+1));
}
let iSeconde = parseInt(prompt("Entrer des secondes"))
if (temps < iHeure , temps < iMinute && temps < iSeconde+ 1){
  console.log("Il sera ",iHeure, " heure(s) ",iMinute," minute(s) ",iSeconde+1," seconde(s)");
  alert("Il sera "+iHeure + " heure(s) "+ iMinute +" minute(s) "+(iSeconde+1)+" seconde(s)");
  }
 