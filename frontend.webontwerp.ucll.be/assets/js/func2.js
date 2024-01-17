"use strict";

//zoek de huidige rubriek op basis van eerste twee letters van titel element
let navItems = ["Ho", "OP", "To", "We", "HT", "CS", "JS", "Va", "Li"];
let eersteTweeLettersTitle = document.title.slice(0, 2);
let i = navItems.indexOf(eersteTweeLettersTitle) + 1;
let queryString = "header nav li:nth-child(" + i + ")";
document.querySelector(queryString).classList.toggle("hier");

//nummer alle h2 en h3
let alleTitels = document.querySelectorAll("h2, h3");
let h2Teller = 1;
let h3Teller = 1;
let titeltekst;
for (let i = 1; i <= alleTitels.length; i++) {
  if (alleTitels[i - 1].localName === "h2") {
    h3Teller = 1;
    titeltekst = alleTitels[i - 1].innerText;
    alleTitels[i - 1].innerText = h2Teller + " " + alleTitels[i - 1].innerText;
    // zorg dat id's geen spaties bevatten, vervang door koppelteken
    alleTitels[i - 1].id = titeltekst.split(' ').join('-');
    h2Teller++;
  } else {
    alleTitels[i - 1].innerText =
      h2Teller - 1 + "." + h3Teller + " " + alleTitels[i - 1].innerText;
    h3Teller++;
  }
}

/* const hoofding = document.querySelector("header");
let lastScrollY = window.scrollY;
console.log(lastScrollY);
window.addEventListener("scroll", () => {
  if (lastScrollY > window.scrollY) {
    hoofding.classList.add("scrollUp");
  } else {
    hoofding.classList.remove("scrollUp");
  }
  lastScrollY = window.scrollY;
}); */

//toon / verberg oplossing
let knoppen = document.querySelectorAll("section.taak button");
for (let i = 0; i < knoppen.length; i++) {
  knoppen[i].addEventListener("click", toonVerberg);
}
function toonVerberg(e) {
  e.target.parentElement.classList.toggle("toon");
}

// kiesKleur bij hoofdstuk events
/* function kiesKleur() {
  let rood = Math.floor(Math.random() * 256);
  let groen = Math.floor(Math.random() * 256);
  let blauw = Math.floor(Math.random() * 256);
  let kleur = 'rgb(' + rood + ',' + groen + ',' + blauw + ')';
  document.querySelector("#randomkleur").style.color = kleur;
} */

// verander uitlijning bij events
function lijnUit() {
  document.querySelector("#alineUitlijning").classList.toggle("tekst-rechts");
}

// teller bij events
let eventTeller = document.querySelector("#teller");
eventTeller.onmouseover = function () {
  let getal = eventTeller.innerText;
  getal++;
  eventTeller.innerText = getal;
  if (getal === 10) {
    eventTeller.onmouseover = null;
  }
};

// tel aantal letters in input field
let regel = document.querySelector("#regel");
regel.addEventListener("input", telLetters);

function telLetters() {
  let lengte = regel.value.length;
  document.querySelector("p.groot").innerText = lengte;
}

// kleurvlak met x-y-coördinaten
let kleurDiv = document.querySelector("#kleurVlak");
kleurDiv.addEventListener("mousemove", bepaalkleur);

function bepaalkleur(e) {
  let rood = e.offsetX;
  let groen = e.offsetY;
  kleurDiv.innerText = " rood: " + rood + " en groen: " + groen;
  let kleur = "rgb(" + rood + "," + groen + "," + "0)";
  kleurDiv.style.backgroundColor = kleur;
}
