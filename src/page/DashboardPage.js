import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="info" style={{fontSize:'3rem', padding:""}}>Add New Ticket</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
