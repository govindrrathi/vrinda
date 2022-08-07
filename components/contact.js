import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Contact = () => {

  return (
    <section className="footer section-narrow" id="contact">
      <Container>
        <Row>
          <Col md={12}>
              <div className="mb-4">
                <p className="text-center text-muted mt-4 mb-2">vrinda.rathi@email.com</p>
                <h6 className="text-center text-muted font-weight-normal">(425)-492-5925</h6>
              </div>
              <div className="mb-4">
                <p className="text-center text-muted mt-4 mb-2">Social Network</p>
                <h6 className="text-center text-muted font-weight-normal">TBD</h6>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
