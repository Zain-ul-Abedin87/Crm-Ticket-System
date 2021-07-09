import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = ({
  handelChange,
  email,
  password,
  handelOnSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center text-info">Client Login</h1>
          <hr />
          <Form onSubmit={handelOnSubmit}>
            <Form.Group>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handelChange}
                placeholder="Enter Email"
                value={email}
                // required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handelChange}
                // required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")}>
            Forget password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
