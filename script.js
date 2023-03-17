let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainEl=document.getElementById('main-title');
  mainEl.textContent="Welcome to  homepage";

  // Part 2

  let bdy=document.querySelector("body");
  bdy.style.backgroundColor="green";


  // Part 3
  let favlist=document.getElementById("favorite-things");
  favlist.removeChild(favlist.lastElementChild);

  // Part 4
  
 
  // Part 5
  let pastRac=document.getElementById("past-races")
   let child=pastRac.childNodes[7]
   child.parentNode.removeChild(child);
  
  // Part 6

  pastRac.innerHTML +=`<il>Indiana</iL>`
  // Part 7
 const el=document.createElement("div")
 el.classList.add("blog-post");
 el.innerHTML +=`<h2>HI</h2> <p>hi this ramya welcome<p>`

document.body.appendChild(el);

  // Part 8

const sel=document.querySelector("#quote-title")
sel.addEventListener("click", e => {
e.randomQuote();

});

  // Part 9

let blgpst=document.querySelectorAll("blog-post")
console.log(blgpst);
blgpst.forEach( (blg) =>{
  console.log(blg);

blg.addEventListener("mouseout", e=>{
  
  e.classList.toggle("purple")
  
});
blg.addEventListener("mouseenter", e=>{
 e.classList.toggle("red");
});
});

});

