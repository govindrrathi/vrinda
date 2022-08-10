import React from 'react';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const Contact = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(JSON.stringify({
      name,
      email,
      message,
    }));
    fetch("https://relayforms.com/submit/{your-form-endpoint}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="footer section-narrow" id="contact">
      <Container>
      <form className="form" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <div>
              <h1>Contact me</h1>
                <FormGroup>
                  <Label for="Name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Your Name" onChange={(ev) => setName(ev.currentTarget.value)} />
                </FormGroup>

                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="example@example.com" onChange={(ev) => setEmail(ev.currentTarget.value)} />
                </FormGroup>

                <FormGroup>
                  <Label for="Message">Message</Label>
                  <Input type="textarea" name="message" id="message" placeholder="Your message" onChange={(ev) => setMessage(ev.currentTarget.value)} />
                </FormGroup>

                <Button>Send Message</Button>
            </div>
          </Col>
        </Row>
      </form>
        <Row>
          <Col md={12}>
              <div className="mb-4">
                <p className="text-center text-muted mt-4 mb-2">vrinda.rathi@gmail.com</p>
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
