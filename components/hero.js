import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">A brief introduction about me</h1>
              <p className="text-dark mb-4 pb-2">
              Vrinda Rathi is a rising senior who attends North Creek High School. Madhubani art has been a huge part of her life since 2015, when she began learning from Deepti Agarwal.
              </p>
              <p className="text-dark mb-4 pb-2">
              Outside of art, she enjoys going outside, watching Bollywood movies, and spending time with her family and friends. She has also been dancing Kathak since 2013. At her school, she participates in many extracurricular clubs including FBLA, DECA, and National Honor Society.
              </p>
              <p className="text-dark mb-4 pb-2">
              Vrinda has been learning Madhubani for 6 years now, starting as a fourth grader at the age of 9. After completing her Madhubani course around a year ago, she joined Deepti Designs as a teacher. At first she helped out as an assistant and she now manages her own classes twice a week. During her time with Deepti Designs, she has participated in many workshops, exhibitions, and other events. She has volunteered with organizations including, but not limited to, Balvihar, International Children’s Friendship Festival, and Vedic Cultural Center.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/hero.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;
