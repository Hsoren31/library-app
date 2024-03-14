const library = [
    {   title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J. K. Rowling',
        pages: 309,
        ifRead: 'Have not Read'},
    {   title: 'Harry Potter and the Chamber of Secrets',
        author: 'J. K. Rowling',
        pages: 251,
        ifRead: 'Have not Read'},
    {   title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J. K. Rowling',
        pages: 435,
        ifRead: 'Have not Read'},
];

function Book(title, author, pages, ifRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ifRead = ifRead;
}

function addBookToLibrary(book) {
    library.push(book);
}

// const book1 = new Book ('book', 'author', 100, 'have read');
// console.log(book1);
// addBookToLibrary(book1);
// console.log(library);

//Make cards to display books to user
const libraryContainer = document.getElementById('library_container');

function makeCard(library){
    for (let book of library){
        console.log(book.title)
        const cardBook = document.createElement('div');
        cardBook.className = 'card';
        libraryContainer.appendChild(cardBook);

        const title = document.createElement('h1');
        title.className = 'title';
        title.textContent = book.title;
        cardBook.appendChild(title);

        const author = document.createElement('p');
        author.className = 'author';
        author.textContent = book.author;
        cardBook.appendChild(author);

        const pages = document.createElement('p');
        pages.className = 'pages';
        pages.textContent = book.pages;
        cardBook.appendChild(pages);

        const ifRead = document.createElement('p');
        ifRead.className = 'if_read';
        ifRead.textContent = book.ifRead;
        cardBook.appendChild(ifRead);
    }
}

makeCard(library);