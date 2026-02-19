const books = [];

function Book(title, author, genre, yearPublished) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.yearPublished = yearPublished;
}

function addBook(title, author, genre, yearPublished) {
    const newBook = new Book(title, author, genre, yearPublished);
    books.push(newBook);
    displayBooks();
    return newBook;
}

function displayBooks() {
    const container = document.getElementById("booksContainer");
    container.innerHTML = "";

    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Published:</strong> ${book.yearPublished}</p>
        `;
        container.appendChild(card);
    });
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", "Novel", 1925);
addBook("1984", "George Orwell", "Dystopian", 1949);
addBook("To Kill a Mockingbird", "Harper Lee", "Fiction", 1960);