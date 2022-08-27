import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {

  return (
    <section className="footer">
      <Container>
      <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-dark">
              <p className="mb-0 f-15">2022 © Vrinda Rathi</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;
