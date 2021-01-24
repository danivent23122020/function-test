let sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(10, 20));
// fonction fléchée
fonction = (nom, age) => {
  console.log(`Bonjour ${nom} ${age} `);
};
fonction("bonjour", "aurevoir");
// foreach
const fruits = ["pome", "banane", "poire", "citron", "orange"];
// forEach
fruits.forEach(fruit => console.log(fruit));
// map retourne un tableau
const majuscule = fruits.map(fruit => fruit.toUpperCase());
console.log(majuscule);
// filters, filtrer un tableau, ici on enlève la première lettre o (plus d'orange)
const panier = fruits.filter(el => fruit.charAt(0) !== "o");
console.log(panier);
