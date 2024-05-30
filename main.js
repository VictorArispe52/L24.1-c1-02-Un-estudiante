import { Estudiante } from "./estudiante.js";

let est1 = new Estudiante("Jorge Perez",10,20,30);
document.getElementById("salida").innerHTML = est1.notaFinal();
