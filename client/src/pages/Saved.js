import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import {  Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    thumbnail: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Jumbotron>
      <h1>Books On My List</h1>
    </Jumbotron>
      <Container fluid>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(books => (
                  <ListItem
                    key={books.id}
                    title={books.title}
                    author={books.author}
                    id={books._id}
                    href={books.href}
                    thumbnail={books.thumbnail}
                    description={books.description}
                    deleteBook={this.deleteBook}
                  />
                  
                ))}
              </List>
            ) : (
              <h1 id="message" className="text-center">No Results to Display</h1>
            )}
      </Container>
      </div>
    );
  }
}

export default Saved;
