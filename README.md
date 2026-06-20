# 📚 Library App

A simple browser-based library app that lets you manage a personal book collection. Built with vanilla HTML, CSS, and JavaScript as part of an ongoing JavaScript learning journey.

## Features

- View all books in your library displayed as cards
- Add new books via a dialog form
- Remove books from the library
- Toggle the read status of any book

## How to Use

1. Open `index.html` in your browser
2. Click **"Add a Book"** to open the form
3. Fill in the book's title, author, number of pages, and whether you've read it
4. Click **Submit** to add the book to your library
5. Use the **Remove** button on any card to delete a book
6. Use the **Toggle Read Status** button to mark a book as read or unread

## Project Structure

```
├── index.html      # Markup and dialog form
├── index.css       # Styles
└── script.js       # App logic
```

## Concepts Practiced

- Constructor functions and the `new` keyword
- Prototypes and adding methods via `Book.prototype`
- DOM manipulation with `createElement`, `appendChild`, and `innerHTML`
- Event listeners and `event.preventDefault()`
- The `<dialog>` HTML element and `.showModal()` / `.close()`
- Data attributes (`dataset`) for linking DOM elements to data objects
- Array methods: `push`, `splice`, `findIndex`
- Unique ID generation with `crypto.randomUUID()`
- Separation of data and display logic
