let sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 21));
//
fonction = (nom, age) => {
  console.log(`bonjour ${nom}, vous avez ${age} ans.`);
};
fonction("daniel", 54);
//
const fruits = [
  "poire",
  "banane",
  "orange",
  "fraise",
  "framboise",
  "mandarine",
  "prune",
];
// filter
const panier = fruits.filter(eleme => "poire");
console.log(`c'est le panier filtré : ${panier}`);
// forEach
fruits.forEach(ele => console.log(ele));
//
const summ = [10, 11, 12.54, 95, 36.25, -18.5];
// forEach
summ.forEach(el => console.log(el + 1));
// map
const som = summ.map(elem => elem + 10);
console.log(som);
