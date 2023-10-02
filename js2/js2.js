//1
console.log(document.querySelector('header').style.backgroundColor="yellow");
//2
console.log(document.querySelector('header h1').style.fontFamily="Arial Black")
console.log(document.querySelector('header h1').innerHTML = "Preambuła");
//3
console.log(document.querySelectorAll("main section"));
const lista = document.querySelectorAll("main section");
for (const section of lista){
    section.style.border="2px solid brown";
}
//4
console.log(document.querySelector("section.main_column h1").innerHTML="Specialność szefa");

//5
const myMainColumn = document.querySelector(".main_column");
const myParagraph = document.createElement("p");
myParagraph.innerHTML = "Kebab na frytkach -_-";
myMainColumn.appendChild(myParagraph);


//6
const myFooter = document.querySelector("footer");
const myDiv = document.createElement("div");
const myParagraph2 = document.createElement("p");

myFooter.style.backgroundColor="purple";
myDiv.style.backgroundColor="pink";
myParagraph2.innerHTML = "& copy";
myDiv.appendChild(myParagraph2);
myFooter.appendChild(myDiv);

//7
const myRemove = document.querySelectorAll("section.side_column");
console.log(myRemove);
myRemove[1].remove();

//8
const myHead = document.querySelector("header");
const myPar1 = document.createElement("p");
const myPar2 = document.createElement("p");

console.log(myHead);
console.log(myPar1);
console.log(myPar2);

myPar1.innerHTML = "<i>Pochylony tekst</i>";
myPar2.innerText = "<i>Pochylony tekst</i>";
myHead.appendChild(myPar1);
myHead.appendChild(myPar2);
