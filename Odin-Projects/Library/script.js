const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "read" : "not read yet"
  }`;
};

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBook() {
  const container = document.querySelector(".container");

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    const properties = [book.title, book.author, book.pages];
    for (let property of properties) {
      const p = document.createElement("p");
      p.textContent = property;
      bookCard.append(p);
    }

    const p = document.createElement("p");
    p.textContent = book.read ? "Read" : "Not Read";
    bookCard.append(p);

    container.append(bookCard);
  });
}
