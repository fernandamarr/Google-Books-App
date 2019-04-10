import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    search: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.searchBook(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err));
  };
  

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Google Books Search</h1>
          <h5>Search for and Save Books of Interest</h5>
        </Jumbotron>
      <Container fluid>
      <Row>
      <Col size="md-6">
            <div>
            <form>
                Book Search:
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search for a Book"
              />
              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
                type="success"
              >
                Search Book
              </FormBtn>
            </form>
            </div>
            </Col>
            </Row>
            <Row>
            <Col size="md-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books To Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(books => {
                    return(
                      <BookListItem 
                        key={books.id}
                        title={books.volumeInfo.title}
                        author={books.volumeInfo.authors}
                        id={books.id}
                        href={books.volumeInfo.previewLink}
                        thumbnail={books.volumeInfo.imageLinks.thumbnail}
                        description={books.volumeInfo.description}
                      />    
                  );              
                  })}
                </BookList>
              )}
            </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default Books;
