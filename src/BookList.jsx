import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Button,
} from "react-bootstrap";
import horror from "./data/horror.json";

import SingleBook from "./component/SingleBooks";

const BooksList = ({ books }) => {
  return (
    <Container>
      <Row>
        {horror.map((book) => {
          return <SingleBook key={book.asin} book={book} />;
        })}
      </Row>
    </Container>
  );
};

export default BooksList;
