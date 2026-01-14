const form = document.getElementById("form");
const nome = document.getElementById("nome");
const km = document.getElementById("km");
const eta = document.getElementById("eta");

const basePrice = 0.21;

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const nomeUser = nome.value;
  const kmUser = km.value;
  const etaUser = eta.value;
  const priceUser = costoBiglietto(kmUser, etaUser)

  alert("Ciao " + nomeUser + ", Il biglietto costa " + priceUser + "€");
}

function costoBiglietto(km, eta) {
  let costo = km * basePrice

  if (eta === "minorenne") {
    costo *= 0.80
  } else if (eta === "65+") {
    costo *= 0.60
  }

  return costo.toFixed(2)
}