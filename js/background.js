//background images
const body = document.body;
const images = [
  "alps",
  "buildings",
  "crete",
  "curacao",
  "moorea",
  "mountains",
  "new-york",
  "ocean",
  "trees",
  "water",
];
const imageName = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");
body.background = `./images/backgrounds/${imageName}.jpg`;
body.style.backgroundSize = "cover";
