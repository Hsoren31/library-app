const libraryContainer = document.getElementById('library_container');
const newBookButton = document.getElementById('new_book');
const dialog = document.querySelector('dialog');
const showForm = document.getElementById('new_book');
const closeForm = document.getElementById('close_form');
const submitForm = document.getElementById('add_book_form');

//Display form and close form
showForm.addEventListener('click', () => {
    dialog.showModal();
});

closeForm.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

//library container
let library = [
    {title: 'harry',
     author: 'potter',
     pages: 23,
     readStatus: 'Have Read'},
    {title: 'harry',
    author: 'potter',
    pages: 32,
    readStatus: 'Have Not Read'},
    {title: 'harry',
    author: 'potter',
    pages: 43,
    readStatus: 'Have Read'},
    {title: 'harry',
    author: 'potter',
    pages: 56,
    readStatus: 'Have Not Read'}
];

//New book constructor
function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

function addBookToLibrary(book){
    library.push(book);
}

//display library container
function displayLibrary(library){
    library.forEach((book, i) => {
        let currentLibrary = libraryContainer.innerHTML;
        let displayBook = (
            `<div class='book_card'>
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>${book.pages} pages</p>
                <p>${book.readStatus}</p>
                <button class='delete_book' onclick='removeBook(${i})'>Delete Book</button>
                <button class='toggle_status' onclick='toggleStatus(${i})'>Change Status</button>
            </div>`
        )
        let amendedLibrary = currentLibrary + displayBook;
        libraryContainer.innerHTML = amendedLibrary;
    })
};

displayLibrary(library);

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.querySelector('input[name = "read_status"]:checked').value;

    let newBook = new Book(title, author, pages, readStatus);
    addBookToLibrary(newBook);
    libraryContainer.innerText = '';
    displayLibrary(library);
});

console.log(library);
//Delete Book
function removeBook(index){
    library = library.filter((book, i) => {
        return i === index ? false : true ;
    })
    libraryContainer.innerHTML = '';
    displayLibrary(library);
};

//Toggle book read status
function toggleStatus(index){
    let bookObject = library[index].readStatus;
    if (bookObject === 'Have Read'){
        library[index].readStatus = 'Have not Read';
        libraryContainer.innerHTML = '';
        displayLibrary(library);    
    } else {
        library[index].readStatus = 'Have Read';
        libraryContainer.innerHTML = '';
        displayLibrary(library);
    }
};