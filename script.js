const bookdisplay = document.getElementById("book-display");
const addBook = document.getElementById("add-book");
const bookDialog = document.getElementById("book-dialog");
const form = document.getElementById("form");

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    //this.read ? (this.read = false) : (this.read = true);
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Miracle Cure", "Michael Palmer", 424, true);

console.log(myLibrary);

function displayBooks() {
  bookdisplay.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const removeBtn = document.createElement("button");
    const toggleBtn = document.createElement("button");
    const card = document.createElement("div");

    card.dataset.id = book.id;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages + " pages";
    bookStatus.textContent = book.read ? "read" : "not read";
    removeBtn.textContent = "remove";
    toggleBtn.textContent = "toggle read status";

    removeBtn.addEventListener("click", (e) => {
      const toDelete = (element) =>
        element.id === e.target.closest("[data-id]").dataset.id;
      const index = myLibrary.findIndex(toDelete);
      myLibrary.splice(index, 1);
      displayBooks();
    });

    toggleBtn.addEventListener("click", (e) => {
      const toToggle = (element) =>
        element.id === e.target.closest("[data-id]").dataset.id;
      const index = myLibrary.findIndex(toToggle);
      myLibrary[index].toggleRead();
      displayBooks();
    });

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(removeBtn);
    card.appendChild(toggleBtn);
    bookdisplay.appendChild(card);
  });
}

displayBooks();

addBook.addEventListener("click", () => {
  bookDialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formTitle = document.getElementById("title").value;
  const formAuthor = document.getElementById("author").value;
  const formPages = document.getElementById("pages").value;
  const formStatus = document.getElementById("read").checked;

  addBookToLibrary(formTitle, formAuthor, formPages, formStatus);

  displayBooks();
  bookDialog.close();
});
