const form = document.getElementById("form");
const nome = document.getElementById("nome");
const km = document.getElementById("km");
const eta = document.getElementById("eta");

form.addEventListener("submit", function () {
  const nomeUser = nome.value;
  const kmUser = km.value;
  const etaUser = eta.value;


  alert("Ciao " + nomeUser + ", Il biglietto costa " + costoBiglietto(kmUser, etaUser) + "€");
});

function costoBiglietto(km, eta) {
  let costo = km * 0.21

  if (eta === "minorenne") {
    costo *= 0.80
  } else if (eta === "65+") {
    costo *= 0.60
  }

  return costo
}