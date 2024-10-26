window.onload = function() {
  let det = "Un ";
  let nombre = [
    "jogger ",
    "mapache ",
    "perro ",
    "comerciante ",
    "conductor ",
    "comediante ",
    "policía "
  ];
  let adj = [
    "frustrado ",
    "enfadado ",
    "solitario ",
    "loco ",
    "lento ",
    "violento ",
    "hambriento "
  ];
  let act = ["se llevó  ", "tiró  ", "se comió  ", "quemó  ", "mordió  "];
  let posesion = [
    " mi coche ",
    " mi moto ",
    " mi reloj",
    " mi zapato ",
    " mi cartera ",
    " mis llaves",
    " mi pantalon ",
    " mi ordenador",
    " mi telefono",
    " mi bocadillo "
  ];
  let donde = [
    " en la calle",
    " en casa",
    " en el gimnasio",
    " en la piscina",
    " al lado del centro comercial",
    " en el baño",
    " en la estacion de tren"
  ];

  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * nombre.length);
  let rdm3 = Math.floor(Math.random() * act.length);
  let rdm4 = Math.floor(Math.random() * posesion.length);
  let rdm5 = Math.floor(Math.random() * donde.length);

  // creating a sentence (the excuse)
  document.querySelector("#excusa").innerHTML =
    det + nombre[rdm1] + adj[rdm2] + act[rdm3] + posesion[rdm4] + donde[rdm5];
};
