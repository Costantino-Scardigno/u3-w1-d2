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
import { Component } from "react";

class AllBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {horror.map((books) => {
            return (
              <Col md={3} key={books.asin}>
                <Card>
                  <Card.Img variant="top" src={books.img} />
                  <Card.Body>
                    <Card.Title>{books.title}</Card.Title>
                    <Card.Text>{books.price}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllBooks;
