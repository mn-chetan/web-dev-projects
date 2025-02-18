import bananaPancakes from "./img/breakfast/banana-pancakes.jpg";
import greekYogurtParfait from "./img/breakfast/greek-yogurt-parfait.jpg";
import scrambledEggs from "./img/breakfast/scrambled-eggs.jpg";

function displayMenu() {
  const menu = document.createElement("section");
  menu.id = "menu";

  //   Breakfast
  const breakfast = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = "Breakfast";

  const breakfastItem1 = document.createElement("div");
  breakfastItem1.classList.add("menu-item");
  const img1 = document.createElement("img");
  img1.src = bananaPancakes;
  breakfastItem1.appendChild(img1);
  const name1 = document.createElement("p");
  name1.textContent = "Banana Pancakes";
  breakfastItem1.appendChild(name1);
  const price1 = document.createElement("p");
  price1.textContent = "$3";
  breakfastItem1.appendChild(price1);
  menu.appendChild(breakfastItem1);

  const breakfastItem2 = document.createElement("div");
  breakfastItem2.classList.add("menu-item");
  const img2 = document.createElement("img");
  img2.src = greekYogurtParfait;
  breakfastItem2.appendChild(img2);
  const name2 = document.createElement("p");
  name2.textContent = "Greek Yogurt Parfait";
  breakfastItem2.appendChild(name2);
  const price2 = document.createElement("p");
  price2.textContent = "$1.5";
  breakfastItem2.appendChild(price2);
  menu.appendChild(breakfastItem2);

  const breakfastItem3 = document.createElement("div");
  breakfastItem3.classList.add("menu-item");
  const img3 = document.createElement("img");
  img3.src = scrambledEggs;
  breakfastItem2.appendChild(img3);
  const name3 = document.createElement("p");
  name3.textContent = "Scrambled Eggs";
  breakfastItem3.appendChild(name3);
  const price3 = document.createElement("p");
  price3.textContent = "$1.5";
  breakfastItem2.appendChild(price3);
  menu.appendChild(breakfastItem3);

  //   Lunch

  //   Dinner
  
  document.body.appendChild(menu);
}

export { displayMenu };
