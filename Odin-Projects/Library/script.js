const myLibrary = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    pages: 417,
    read: true,
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 662,
    read: true,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 412,
    read: false,
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    pages: 496,
    read: false,
  },
].map((book) => new Book(book.title, book.author, book.pages, book.read));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBook() {
  const container = document.querySelector(".container");

  container.textContent = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.dataset.index = index;

    const svgMarkup = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.016 512.016" xml:space="preserve" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="59.336" y="28.656" style="fill:#F2B851;" width="218.672" height="49.136"></rect> <path style="fill:#25B6D2;" d="M326.36,142.784V72.096H89.912c-11.008,0-19.952-8.992-19.952-20.048S78.92,32,89.912,32h225.744V0 H89.912C61.272,0,37.96,23.344,37.96,52.048v251.664c0,22.672,6.384,40.064,18.976,51.696c13.632,12.608,29.76,13.824,35.088,13.824 c0.992,0,1.616-0.048,1.76-0.064h91.856v-32"></path> <rect x="209.288" y="169.504" style="fill:#F2B851;" width="218.672" height="49.136"></rect> <path style="fill:#25B6D2;" d="M286.856,98.72c-1.504-1.392-36.368-34.448-2.944-90.992l27.536,16.288 c-19.488,32.992-4.464,49.584-2.704,51.376L286.856,98.72z"></path> <path style="fill:#E04F5F;" d="M453.944,214.864c-3.68-5.712-8.544-18.912,1.216-40.096h8.192v-32H326.36h-32h-56.752 c-28.64,0-51.952,23.344-51.952,52.048v142.368v32v77.312c0,22.672,6.384,40.064,18.992,51.696 c13.616,12.608,29.744,13.824,35.072,13.824c0.992,0,1.616-0.048,1.76-0.064h232.576V214.864H453.944z M237.608,214.864 c-11.008,0-19.952-8.992-19.952-20.048s8.96-20.048,19.952-20.048h183.216c-4.88,16.128-4.192,29.584-1.312,40.096L237.608,214.864 L237.608,214.864z"></path> </g></svg>`;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = svgMarkup;

    const svgElement = tempDiv.firstChild;

    bookCard.append(svgElement);

    const properties = [book.title, book.author, book.pages];
    for (let property of properties) {
      const p = document.createElement("p");
      p.textContent = property;
      bookCard.append(p);
    }

    const p = document.createElement("p");
    p.textContent = book.read ? "Read" : "Not Read";
    bookCard.append(p);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", (e) => {
      myLibrary.splice(e.target.parentNode.dataset.index, 1);
      displayBook();
    });
    bookCard.append(deleteButton);

    const readStatus = document.createElement("button");
    readStatus.textContent = "Read/Not Read";
    readStatus.addEventListener("click", (e) => {
      myLibrary[e.target.parentNode.dataset.index].toggleRead();
      displayBook();
    });
    bookCard.append(readStatus);

    container.append(bookCard);
  });
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

const button = document.querySelector("#add");
const dialog = document.querySelector("dialog");
const submit = document.querySelector("button[type='submit']");
const form = document.querySelector("form");

button.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  form.reset();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[2]);
  addBookToLibrary(
    e.target[0].value,
    e.target[1].value,
    e.target[2].value,
    e.target[3].value === "Read"
  );
  dialog.close();
  displayBook();
});

displayBook();
