const books = [];

function Book(title, author, pages, readStatus) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
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
        const card = document.createElement("div");
        card.className = "book-card";
        card.setAttribute("data-id", book.id) // associate DOM element with book id

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.readStatus}</p>
            <button class="remove-btn">Remove</button>
        `;

        card.querySelector(".remove-btn").addEventListener("click", () => {
            removeBook(book.id);
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