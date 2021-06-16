import React, { useState, useEffect } from "react";
import API from "../utils/API";

function SearchBar() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function loadBooks() {
    if (formObject.title) {
      API.searchBooks(formObject.title)
        .then((res) => setBooks(res.data))
        .catch((err) => console.log(err));
    }
  }

  function saveBook(title, authors, description, image, link) {
    API.saveBook({
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link,
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    loadBooks();
    console.log(books);
  }

  function handleClear(event) {
    setBooks(" ");
  }

  function truncateDescription(description) {
    if (description) {
      if (description.length > 450) {
        let shortenedDescription =
          description.substring(0, description.indexOf(" ", 450)) + "...";
        return shortenedDescription;
      }
      return description;
    }
  }

  return (
    <>
      <form className="form">
        <div className=" ">
          <input
            // className="form control"
            onChange={handleInputChange}
            style={{ width: "100%", height: "100%" }}
            name="title"
          ></input>
        </div>
        <br />
        <button
          onClick={handleFormSubmit}
          className="btn btn-success"
          // style={{ float: "right" }}
        >
          Search
        </button>{" "}
        <button
          onClick={handleClear}
          className="btn btn-secondary"
          // style={{ float: "right" }}
        >
          Clear
        </button>
      </form>
      <div>
        {books.totalItems > 0 ? (
          <div className="container ">
            <table className="table table-hover" style={{ color: "gray" }}>
              <thead>
                <tr>
                  <th>Book image</th>
                  <th>Book Name</th>
                  <th>Description</th>
                  <th>Details Link</th>
                  <th>Save Book</th>
                </tr>
              </thead>

              {books.items.map((book) => (
                <tbody>
                  <tr key={book.id}>
                    <td>
                      <img
                        alt=""
                        src={book.volumeInfo.imageLinks.thumbnail}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          padding: "5px",
                          width: "150px",
                        }}
                      />
                    </td>
                    <td>{book.volumeInfo.title}</td>
                    <td>{truncateDescription(book.volumeInfo.description)}</td>
                    <td>
                      {" "}
                      <a
                        className="btn btn-primary m-1"
                        href={book.volumeInfo.infoLink}
                      >
                        Details
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary m-1"
                        onClick={(e) => {
                          saveBook(
                            book.volumeInfo.title,
                            book.volumeInfo.authors,
                            book.volumeInfo.description,
                            book.volumeInfo.imageLinks.thumbnail,
                            book.volumeInfo.infoLink
                          );
                          e.target.setAttribute("disabled", "true");
                          e.target.textContent = "Saved!";
                        }}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
