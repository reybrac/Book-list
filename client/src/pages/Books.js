import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchBar from "../components/SearchBar";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
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
    <Container fluid>
      <div>
        <h4>Search for a Book</h4>
        <SearchBar />
      </div>
      <hr></hr>
      <div>
        {books.length ? (
          <div
            className="container text-center"
            style={{ marginTop: "50px", backgroundColor: "lightGray" }}
          >
            <div className="row justify-content-center">
              <h3>Saved Books</h3>
              <table className="table table-hover" style={{ color: "gray" }}>
                <thead>
                  <tr>
                    <th>Book image</th>
                    <th>Book Name</th>
                    <th>Description</th>
                    <th>Details Link</th>
                    <th>Delete Book</th>
                  </tr>
                </thead>
                {books.map((book) => (
                  <tbody>
                    <tr>
                      <td>
                        <img
                          alt=""
                          src={book.image}
                          style={{
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            padding: "5px",
                            width: "150px",
                          }}
                        />
                      </td>
                      <td>{book.title}</td>
                      <td>{truncateDescription(book.description)}</td>
                      <td>
                        {" "}
                        <a className="btn btn-primary m-1" href={book.link}>
                          Details
                        </a>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary m-1"
                          onClick={() => deleteBook(book._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        ) : (
          <h3>No books have been saved, try searching for a book to add!</h3>
        )}
        <div></div>
      </div>
    </Container>
  );
}

export default Books;
