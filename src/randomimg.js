const images = ["01.png", "02.png", "03.png", "04.png", "05.png"];
const choosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const rndImg = document.getElementById("rnd-img")
bgImage.src = `img/${choosenImage}`;
rndImg.appendChild(bgImage);