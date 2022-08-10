import React from 'react';
import { Container, Row, Col } from "reactstrap";

const WorkBox = ({workData}) => {
  return (
    <>
    {
      workData.map((work, key) =>
      (work.id % 2 !== 0) ?
        <Row key={key} className={work.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={work.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={work.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{work.title} ({work.year})</h5>
                <p className="text-muted mb-3 f-15">{work.desc}</p>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{work.title} ({work.year})</h5>
            <p className="text-muted mb-3 f-15">{work.desc}</p>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={work.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Work = ({workData}) => {
return (
    <section className="section" id="work">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">My Work</span></h3>
              <p className="text-muted">Below is some of my work......</p>
            </div>
          </Col>
        </Row>
        <WorkBox workData={ workData.allWorkData }/>
      </Container>
    </section>
  );
}
export default Work;
