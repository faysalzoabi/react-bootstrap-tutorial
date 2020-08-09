import React from 'react';
import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com"/>
                  <Form.Text className="text-muted">
                    We will never share your email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000"}}>
            <Card.Img src="https://picsum.photos/200/100"/>
            <Card.Body>
              <Card.Title>
                Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstrap cards
              </Card.Text>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test1</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="primary">This is a button</Alert>
          <Button>Test button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
