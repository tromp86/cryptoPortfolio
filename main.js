const elements = {
  numberBTC: [],
  numberSOL: [],
  numberMatic: [172],
  numberStellar: [154],
  numberShib: [],
  numberLink: [],
  numberNear: [],
  numberAvax: [],
  numberDot: [125.5],
};

const paragraph1 = document.getElementById("numberBTC");
const paragraph2 = document.getElementById("numberSOL");
const paragraph3 = document.getElementById("numberMatic");
const paragraph4 = document.getElementById("numberStellar");
const paragraph5 = document.getElementById("numberShib");
const paragraph6 = document.getElementById("numberLink");
const paragraph7 = document.getElementById("numberNear");
const paragraph8 = document.getElementById("numberAvax");
const paragraph9 = document.getElementById("numberDot");

const fill1 = document.querySelector(".data .range1 .fill");
const fill2 = document.querySelector(".data .range2 .fill");
const fill3 = document.querySelector(".data .range3 .fill");
const fill4 = document.querySelector(".data .range4 .fill");
const fill5 = document.querySelector(".data .range5 .fill");
const fill6 = document.querySelector(".data .range6 .fill");
const fill7 = document.querySelector(".data .range7 .fill");
const fill8 = document.querySelector(".data .range8 .fill");
const fill9 = document.querySelector(".data .range9 .fill");

let number1 = elements.numberBTC.length
  ? elements.numberBTC.reduce((a, b) => a + b, 0)
  : parseInt(paragraph1.textContent);
let number2 = elements.numberSOL.length
  ? elements.numberSOL.reduce((a, b) => a + b, 0)
  : parseInt(paragraph2.textContent);
let number3 = elements.numberMatic.length
  ? elements.numberMatic.reduce((a, b) => a + b, 0)
  : parseInt(paragraph3.textContent);
let number4 = elements.numberStellar.length
  ? elements.numberStellar.reduce((a, b) => a + b, 0)
  : parseInt(paragraph4.textContent);
let number5 = elements.numberShib.length
  ? elements.numberShib.reduce((a, b) => a + b, 0)
  : parseInt(paragraph5.textContent);
let number6 = elements.numberLink.length
  ? elements.numberLink.reduce((a, b) => a + b, 0)
  : parseInt(paragraph6.textContent);
let number7 = elements.numberNear.length
  ? elements.numberNear.reduce((a, b) => a + b, 0)
  : parseInt(paragraph7.textContent);
let number8 = elements.numberAvax.length
  ? elements.numberAvax.reduce((a, b) => a + b, 0)
  : parseInt(paragraph8.textContent);
let number9 = elements.numberDot.length
  ? elements.numberDot.reduce((a, b) => a + b, 0)
  : parseInt(paragraph9.textContent);


fill1.style.width = `${(number1 / 912) * 100}%`;
fill2.style.width = `${(number2 / 1056) * 100}%`;
fill3.style.width = `${(number3 / 672) * 100}%`;
fill4.style.width = `${(number4 / 384) * 100}%`;
fill5.style.width = `${(number5 / 240) * 100}%`;
fill6.style.width = `${(number6 / 192) * 100}%`;
fill7.style.width = `${(number7 / 336) * 100}%`;
fill8.style.width = `${(number8 / 480) * 100}%`;
fill9.style.width = `${(number9 / 528) * 100}%`;


function calculateAndDisplayTotal() {
  const paragraphs = [
    document.getElementById("numberBTC"),
    document.getElementById("numberSOL"),
    document.getElementById("numberMatic"),
    document.getElementById("numberStellar"),
    document.getElementById("numberShib"),
    document.getElementById("numberLink"),
    document.getElementById("numberNear"),
    document.getElementById("numberAvax"),
    document.getElementById("numberDot"),
  ];

  let total = 0;
  for (let paragraph of paragraphs) {
    const id = paragraph.id;
    const value = elements[id][0] || parseInt(paragraph.textContent);
    paragraph.textContent = `${value}$`;
    total += value;
  }

  document.querySelector("h1").textContent = `Total: ${Math.ceil(total)}$`;
  const amount = 4800 - total;
  document.getElementById("amount").textContent = `Amount: - ${Math.ceil(amount)}$`;
}
calculateAndDisplayTotal();

function calculateAndDisplayPercentages() {
  const percentElements = document.querySelectorAll(".percent");
  let totalPercentage = 0;
  percentElements.forEach((element) => {
    totalPercentage += parseInt(element.textContent);
  });
  document.getElementById("allProsent").textContent = `${totalPercentage}%`;
}
calculateAndDisplayPercentages();
