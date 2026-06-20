const bookdisplay = document.getElementById("book-display");
const addBook = document.getElementById("add-book");
const bookDialog = document.getElementById("book-dialog");
const form = document.getElementById("form");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.id = crypto.randomUUID();
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Miracle Cure", "Michael Palmer", 424, true);

console.log(myLibrary);

function displayBooks() {
  let books;
  bookdisplay.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    books = myLibrary[i];
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const removeBtn = document.createElement("button");
    const card = document.createElement("div");
    card.dataset.id = books.id;
    bookTitle.textContent = books.title;
    bookAuthor.textContent = books.author;
    bookPages.textContent = books.pages + " pages";
    bookStatus.textContent = books.read ? "read" : "not read";
    removeBtn.textContent = "remove";
    removeBtn.dataset.id = card.dataset.id;

    removeBtn.addEventListener("click", (e) => {
      /*myLibrary.forEach((element) => {
        if (element.id == e.currentTarget.dataset.id) {
          const index = myLibrary.indexOf(element);
          myLibrary.splice(index, 1);
        }
      });
      */
      const toDelete = (element) => element.id === e.currentTarget.dataset.id;

      const index = myLibrary.findIndex(toDelete);
      myLibrary.splice(index, 1);
      displayBooks();
    });

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(removeBtn);
    bookdisplay.appendChild(card);
  }
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
