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
import "bootstrap/dist/css/bootstrap.min.css";
const SingleBook = ({ book }) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
