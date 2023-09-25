/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her

// Få referencer til elementerne med ID'erne "redFigure" og "YellowFigure
const redFigureElement = document.getElementById("redFigure");
const yellowFigureElement = document.getElementById("yellowFigure");

// Log elementerne til konsollen
console.log("Red Figure Element:", redFigureElement);
console.log("Yellow Figure Element:", yellowFigureElement);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
function ændreBaggrundsfarve() {
    // Få en reference til elementet med ID'et "redFigure"
    const redFigureElement = document.getElementById("redFigure");

    // Få en reference til elementet med ID'et "yellowFigure"
    const yellowFigureElement = document.getElementById("yellowFigure");

    // Check om baggrundsfarven allerede er blå
    const erBlå = redFigureElement.style.backgroundColor === "blue";

    if (erBlå) {
        // Hvis baggrundsfarven allerede er blå, nulstil farven tilbage til default
        redFigureElement.style.backgroundColor = ""; // Fjern baggrundsfarven
        yellowFigureElement.style.backgroundColor = ""; // Fjern baggrundsfarven
    } else {
        // Hvis baggrundsfarven ikke er blå, ændre farven til blå
        redFigureElement.style.backgroundColor = "blue";
        yellowFigureElement.style.backgroundColor = "blue";
    }
}



/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

// din kode her

// Få en reference til elementet med id'et "opgaveTwo"
const opgaveTwoElement = document.getElementById("opgaveTwo");

// Opret et nyt h2-element
const h2Element = document.createElement("h2");
h2Element.textContent = "Opgave 2.1 løsning";

// Opret et nyt p-element
const pElement = document.createElement("p");
pElement.textContent = "Jeg har løst opgave 2.1";

// Tilføj h2- og p-elementerne som børn til "opgaveTwo" elementet
opgaveTwoElement.appendChild(h2Element);
opgaveTwoElement.appendChild(pElement);



// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her

// Hent alle afsnitselementer med class="purpleFigures"
const paragraphs = document.getElementsByClassName("purpleFigures");

// Tjek om der er elementer med klassen "purpleFigures"
if (paragraphs.length > 0) {
    console.log("Afsnit med class 'purpleFigures' blev fundet:", paragraphs);
} else {
    console.log("Ingen afsnit med class 'purpleFigures' blev fundet.");
}

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her

// Hent elementer med ID'et "opgaveTwo"
let opgaveTwoElements = document.querySelectorAll('#opgaveTwo');

// Loop gennem hver opgaveTwo element
opgaveTwoElements.forEach(opgaveTwoElement => {
    // Ændre baggrundsfarven til rød
    opgaveTwoElement.style.backgroundColor = "red";
});

// Log information om opgaveTwo elementer til konsollen
console.info(Array.from(opgaveTwoElements));

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
const purpleFigures = document.getElementsByClassName("purpleFigures");

// Loop gennem hvert element med klassen "purpleFigures"
for (const element of purpleFigures) {
    // Hent det første child-element (h3-elementet)
    const h3Element = element.children[0];

    // Ændr teksten inde i h3-elementet til "RED"
    h3Element.innerHTML = "RED";
}


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her

// Opret et img-element
let img = document.createElement('img');

// Indstil src-attributten til værdien fra myData-objektets image-egenskab
img.src = myData.image;

// Tilføj CSS-regler for at ændre størrelsen på billedet
img.style.width = '450px'; // Ændr denne værdi til den ønskede bredde
img.style.height = '400px'; // Ændr denne værdi til den ønskede højde

// Tilføj img-elementet til DOM'en (f.eks. til en eksisterende div med id'en "imageContainer")
document.getElementById('opgaveFour').appendChild(img);


