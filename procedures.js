//variables globales:
let sum;
let prod;

let a = 5;
let b = 19;
let c = 5;
let d = 0;

function addition(a, b) {
  //variables locales
  const somme = a + b;
  sum = somme;
}
function multiplication(a, b) {
  //variables locales
  const produit = a * b;
  prod = produit;
}

addition(a, b);
const aPlusb = sum;
addition(c, d);
const cPlusd = sum;
addition(d, b);
const dPlusb = sum;
multiplication(cPlusd, dPlusb);
console.log(prod);
