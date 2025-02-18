import stroganoff from "./img/stroganoff.webp";

function loadContent() {
  const content = document.querySelector("#content");

  const introduction = document.createElement("div");
  introduction.classList.add("introduction");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.textContent = `Step into a realm where culinary magic comes alive. At Resto, each
  dish is an enchanted creation, crafted by our master chef-wizards in
  cauldrons of gleaming copper and blessed by ancient recipes passed
  down through generations of mystical gourmands.`;
  p2.textContent = `Nestled in a transformed medieval storehouse, our dining hall glows
  with floating candlelights and echoes with the gentle music of unseen
  wind chimes. Here, the ordinary world melts away as you feast on
  delicacies from both the mortal realm and the fey kingdoms.`;

  introduction.append(p1);
  introduction.append(p2);

  const img = document.createElement("img");
  img.src = stroganoff;
  img.alt = "Pot of chicken stroganoff";

  content.append(introduction);
  content.append(img);
}

export { loadContent };
