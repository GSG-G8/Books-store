const books = document.getElementById('allBooks');

const showBooks = (data) => {
  data.forEach((e) => {
    const newBook = document.createElement('li');
    const bookName = document.createElement('h3');
    const bookAuthor = document.createElement('span');
    const bookCate = document.createElement('span');
    const reserveBook = document.createElement('button');

    bookName.textContent = e.name;
    bookAuthor.textContent = e.authors;
    bookCate.textContent = e.category;

    newBook.classList = 'newBook';
    bookName.classList = 'newBook__name';
    bookAuthor.classList = 'newBook__author';
    bookCate.classList = 'newBook__categ';
    reserveBook.classList = 'newBook__reserve';
    reserveBook.id = e.id;
    reserveBook.type = 'button';


    books.appendChild(newBook);
    newBook.appendChild(bookName);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookCate);
    newBook.appendChild(reserveBook);


    if (e.reserved === 'false') {
      reserveBook.textContent = 'Reserve Now';
    } else if (e.reserved === 'true') {
      reserveBook.textContent = 'Cancel Reserve';
      newBook.style.color = 'rgb(29, 47, 85)';
      reserveBook.style.background = 'rgb(29, 47, 85)';
    }
    reserveBook.addEventListener('click', () => {
      fetch('/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: e.id }),
      }).then(() => {
        if (e.reserved === 'true') {
          newBook.style.color = ' rgb(29, 47, 85)';
          reserveBook.style.background = 'rgb(29, 47, 85)';
        }
      }).then(() => location.reload());
    });
  });
};
