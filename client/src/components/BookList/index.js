import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";

// export function BookList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-3">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>{props.description}</p>
            <button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={props.href}>
              View Book
            </a></button>
            <button className="btn" id="btn" onClick={props.handleSavedBook}>Save Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}


// import React from "react";

// export function BookListItem(props) {
//     return (

//         <div className="card" key={props.id}>
//             <div className="card-body">
//                 <div className="row">
//                     <div className="col-md-9">
//                         <h1 className="card-title">{props.title}</h1>
//                         <h3 className="card-subtitle mb-2 text-muted">by {props.author}</h3>
//                     </div>
//                     <div className="col-md-3">
//                         <img src={props.img} alt={props.title} />
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="row">

//                     <p className="card-text">{props.synopsis}</p>
//                 </div>
//                 <a href={props.link} className="card-text">Preview</a>
//                 <br />
//                 <button className="card-link" onClick={() => props.saveBook(props)}>Save</button>
//             </div>
//         </div>

//     )
// }

