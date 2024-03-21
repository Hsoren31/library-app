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

function displayLibrary(library){
    for (let book of library){
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
displayLibrary(library);

//Add single book card to display
function makeCard(Book){
    const cardBook = document.createElement('div');
    cardBook.className = 'card';
    libraryContainer.appendChild(cardBook);

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = Book.title;
    cardBook.appendChild(title);

    const author = document.createElement('p');
    author.className = 'author';
    author.textContent = Book.author;
    cardBook.appendChild(author);

    const pages = document.createElement('p');
    pages.className = 'pages';
    pages.textContent = Book.pages;
    cardBook.appendChild(pages);

    const ifRead = document.createElement('p');
    ifRead.className = 'if_read';
    ifRead.textContent = Book.ifRead;
    cardBook.appendChild(ifRead);
}

// const book1 = new Book ('book', 'author', 100, 'have read');
// console.log(book1);
// makeCard(book1);

//Get add book form to display
let newBook = document.getElementById('new_book');

newBook.addEventListener('click', function(){
    document.getElementById('pop_up_form').style.display = "block";
})

//Form submit button
let newBookForm = document.getElementById('add_book_form');

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newTitle = document.querySelector('#title').value;
    let newAuthor = document.querySelector('#author').value;
    let newPages = document.querySelector('#pages').value;
    let newHaveRead = document.querySelector('#have_read').value;
    let newBook = new Book(newTitle, newAuthor, newPages, newHaveRead);
    addBookToLibrary(newBook);
    console.log(library)
    makeCard(newBook);
});