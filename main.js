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
    return newBook;
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", "Novel", 1925);
addBook("1984", "George Orwell", "Dystopian", 1949);

console.log(books);