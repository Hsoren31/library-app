const libraryContainer = document.getElementById('library_container');
const newBookButton = document.getElementById('new_book');
const dialog = document.querySelector('dialog');
const showForm = document.getElementById('new_book');
const closeButton = document.getElementsByClassName('close_form');
const submitButton = document.getElementById('submit_book');

//Display and close form
showForm.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});