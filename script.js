// Click handler for search button
const captureSearchValue = () => {
  const searchBar = document.getElementById("search-bar");
  return searchBar.value;
};

// Filter books based on search input
const filterBooks = (searchValue, books) => {
  const booksArray = flattenObjectValuesIntoArray(books);
  const result = [];
  booksArray.filter((book, index) => {
    if (book.includes(searchValue)) {
      return result.push(books[index]);
    }
  });
  return result;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (filteredBooks) => {
  const formattedResult = [];
  filteredBooks.forEach((book) => {
    const html = structureBookAsHtml(book);
    formattedResult.push(html);
  });
  return formattedResult;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const searchValue = captureSearchValue();
  const filteredBooks = filterBooks(searchValue, books);
  const result = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(result);
};

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});
