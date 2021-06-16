import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

import SearchBar from "../components/SearchBar";

function Books() {
  // Setting our component's initial state

  return (
    <Container fluid>
      <div>
        <h4>Search for a Book</h4>
        <SearchBar />
      </div>
      <hr />
    </Container>
  );
}

export default Books;
