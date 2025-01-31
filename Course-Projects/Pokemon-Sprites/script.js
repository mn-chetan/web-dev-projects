const container = document.querySelector("#container");
const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 200; i++) {
  const newImg = document.createElement("img");
  newImg.src = `${baseUrl}${i}.png`;
  container.appendChild(newImg);
}
