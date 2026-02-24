const books = [];

class Book {
    constructor(title, author, pages, readStatus) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    // Add method to the prototype so all Book instances share the same function.
    // This avoids creating a new copy of toggleRead for every object,
    // improving memory efficiency.
    toggleReadStatus() {
        this.readStatus = this.readStatus === "read" ? "not read" : "read";
    }
}

function addBook(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    books.push(newBook);
    displayBooks();
    return newBook;
}

function removeBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        displayBooks();
    }
}

function displayBooks() {
    const container = document.getElementById("booksContainer");
    container.innerHTML = "";

    books.forEach(book => {
        const card = document.createElement("article");
        card.className = "book-card";
        card.setAttribute("data-id", book.id) // associate DOM element with book id
        card.tabIndex = 0; // accessible focus

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> <span class="status">${book.readStatus}</span></p>
            <div class="buttons">
                <button class="toggle-read-btn" aria-label="Toggle read status for ${book.title}">Toggle Read Status</button>
                <button class="remove-btn" aria-label="Remove ${book.title}">Remove</button>
            </div>
        `;

        card.querySelector(".remove-btn").addEventListener("click", () => removeBook(book.id));
        card.querySelector(".toggle-read-btn").addEventListener("click", () => {
            book.toggleReadStatus();
            displayBooks();
        });

        container.appendChild(card);
    });
}

const newBookBtn = document.getElementById("newBookBtn");
const bookDialog = document.getElementById("bookDialog");
const cancelBtn = document.getElementById("cancelBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", () => bookDialog.showModal());
cancelBtn.addEventListener("click", () => bookDialog.close());

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(bookForm);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = parseInt(formData.get("pages"));
    const readStatus = formData.get("readStatus");

    addBook(title, author, pages, readStatus);

    bookDialog.close()
    bookForm.reset();
});

addBook("The Great Gatsby", "F. Scott Fitzgerald", 180, "read");
addBook("1984", "George Orwell", 328, "not read");