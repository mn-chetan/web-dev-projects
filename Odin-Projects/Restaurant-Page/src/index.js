import "./styles.css";
import { loadContent } from "./about";
import { displayMenu } from "./menu";

loadContent();

const container = document.querySelector("#container");
const nav = document.querySelector("#nav");
nav.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    // Menu
    if (e.target.textContent === "Menu") {
      container.textContent = "";
      displayMenu();
    }

    // About
    if (e.target.textContent === "About") {
      container.textContent = "";
      loadContent();
    }
  }
});
