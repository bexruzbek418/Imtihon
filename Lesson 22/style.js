// function salomBer() {
// console.log("Assalomu alaykum! 👋");
// }
// salomBer(); 

// function salomBer(ism) {
// console.log("Salom, " + ism + "! 😊");
// }
// salomBer("Ali");
// salomBer("Laylo");

// function kvadrat(son) {
// return son * son;
// }
// let natija = kvadrat(5);
// console.log(natija);

// const kvadrat = son => son * son;
// console.log(kvadrat(7));

// let a = Number(prompt("a ni kiriting:"));
// let b = Number(prompt("b ni kiriting:"));

// function ayirma(a, b) {
//   return a - b;
// }

// console.log("Natija:", ayirma(a, b));

// let a = Number(prompt("a ni kiriting:"));
// let b = Number(prompt("b ni kiriting:"));

// const ayirma = (a, b) => a - b;

// console.log("Natija:", ayirma(a, b));

// function kub(son) {
//   return son ** 3;
// }

// let son = Number(prompt("Son kiriting:"));
// console.log("Kub:", kub(son));

// function ortacha(a, b, c) {
//   return (a + b + c) / 3;
// }

// let x = Number(prompt("1-son:"));
// let y = Number(prompt("2-son:"));
// let z = Number(prompt("3-son:"));

// console.log("O'rtacha:", ortacha(x, y, z));

// function kattasiniTop(son1, son2) {
//   if (son1 > son2) {
//     return son1;
//   } 
//   else {
//     return son2;
//   }
// }

// let s1 = Number(prompt("1-son:"));
// let s2 = Number(prompt("2-son:"));

// console.log("Kattasi:", kattasiniTop(s1, s2));

// function toq(son){
//   if(son % 2 == 0){
//     console.log("true")
//   }
//   else{
//     console.log("false")
//   }
// }
// let t = Number(prompt("son"));
// console.log(toq(t));

function ball(s){
  if(b >= 90){
    console.log("A")
  }
  else if(b < 90 && b >= 80){
    console.log("B")
  }
  else if(b < 80 && b >= 70){
    console.log("C")
  }
  else{
    console.log("F")
  }
}
let b = Number(prompt("Olgan ball")); 
console.log("Ball darajasi: " , ball(b))
