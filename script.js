const books = [
    {   title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J. K. Rowling',
        pages: 309,
        ifRead: 'Have not Read'},
    {   title: 'Harry Potter and the Chamber of Secrets',
        author: 'J. K. Rowling',
        pages: 251,
        ifRead: 'Have not Read'},
];

function Book(title, author, pages, ifRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ifRead = ifRead;
}

const book1 = new Book ('book', 'author', 100, 'have read');
console.log(book1);


function addBookToLibrary(book) {
    books.push(book);
}

addBookToLibrary(book1);
console.log(books);