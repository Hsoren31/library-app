const libraryContainer = document.getElementById('library_container');
const newBookButton = document.getElementById('new_book');
const dialog = document.querySelector('dialog');
const showForm = document.getElementById('new_book');
const submitButton = document.getElementById('submit_book');

//Display and close form
showForm.addEventListener('click', () => {
    dialog.showModal();
});

submitButton.addEventListener('click', () => {
    dialog.close();
});

//library container
const library = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

function addBookToLibrary(book){
    library.push(book);
}

//make book cards
function makeCard(book){
    const bookCard = document.createElement('div');
    bookCard.className = 'book_card';
    libraryContainer.append(bookCard);

    const bookTitle = document.createElement('h2');
    bookTitle.className = 'book_title';
    bookTitle.innerText = book.title;
    bookCard.append(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book_author';
    bookAuthor.innerText = book.author;
    bookCard.append(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.className = 'book_pages';
    bookPages.innerText = book.pages;
    bookCard.append(bookPages);

    const bookReadStatus = document.createElement('p');
    bookReadStatus.className = 'book_status';
    bookReadStatus.innerText = book.readStatus;
    bookCard.append(bookReadStatus);
}
//display library container
function displayLibrary(library){
    for(let i = 0; i < library.length; i++){
        makeCard(library[i]);
    }
};

// const book1 = new Book ('book', 'author', 100, 'have read');
// console.log(book1);
// addBookToLibrary(book1);
// console.log(library);
// displayLibrary(library);