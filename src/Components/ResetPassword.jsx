import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ResetPassword = ({handelChange,email,handelOnResetSubmit,formSwitcher}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center text-info">Reset Password</h1>
          <hr />
          <Form  onSubmit={handelOnResetSubmit}>
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
            <Button type="submit">Reset Now</Button>
          </Form>
        <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={()=>formSwitcher('login')}>Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
