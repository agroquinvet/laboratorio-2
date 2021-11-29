var rol = prompt("Ingrese su roll");
var personas = [
  ["Nombre", "Apellido", "Edad"],
  ["Mary", "Quintero", "31"],
  ["Maria", "Alvarez", "29"],
  ["Derex", "Parra", "31"],
];

var table = document.createElement("table");
document.body.appendChild(table);

if (rol == "admin" || rol == "recurse") {
  var edad = prompt("ingrese su contraseña");
}
if (edad == "1234") {
  var usuario = prompt("ingrese su usuario");
  document.write(
    (document.getElementsByName(
      "h1"
    ).texContent = `Hola! ${usuario} bienvendio a esta tu web`)
  );
  for (let i = 0; i < personas.length; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < personas[i].length; j++) {
      var td = document.createElement("td");
      td.innerHTML = personas[i][j];
      tr.append(td);
    }
  }
} else {
  document.write(
    (document.getElementsByName(
      "h1"
    ).texContent = `Hola! usted ingreso un dato incorrecto o no tiene permiso para acceder a esta web`)
  );
}
