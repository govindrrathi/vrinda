import React from 'react';
import { Container, Row, Col } from "reactstrap";
const WorkBox = (props) => {
  return (
    <>
    {
      props.work.map((work, key) =>
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
                <a href={work.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
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
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{work.title}</h5>
            <p className="text-muted mb-3 f-15">{work.desc}</p>
            <a href={work.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
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
const Work = () => {
const work = [
    {id : 1, img : "./images/sun.jpg", title : "Sun", year: 2015, desc : "This sun painting was my very first Madhubani project and marked the start of my long and interesting journey in Madhubani art. The sun represents the source of all life, so we start with this project as the source of other paintings. To complete this project, I learned and applied all the basic skills of Madhubani including kachni (line work), bharni (painting), and other simple patterns.", link : "/"},
    {id : 2, img : "./images/fish.jpg", title : "Fish", year: 2015, desc : "My fish painting was the second step in my Madhubani journey. Fishes represent good luck, fertility, prosperity, and harmony. To complete this project, I learned some more skills like the water lines, fish scales, and shells, while practicing kachni, bharni, and other basic patterns again.", link : "/"},
    {id : 3, img : "./images/peacock.jpg", title : "Peacock", year: 2015, desc : "This peacock was the first project that I got to design myself. Peacocks are known to be beautiful birds and represent beauty, grace, and romance. Within Hindu culture, peacocks are associated with the well-known god Krishna, who is often shown wearing peacock feathers in his hair. I chose an image of a peacock to use as a reference and learned how to use different colors and patterns that looked nice together.", link : "/"},
    {id : 4, img : "./images/elephant.jpg", title : "Elephant", year: 2016, desc : "My fourth project in my Madhubani course was this decorated elephant. In Hinduism, elephants symbolize royalty, majesty, and strength. These animals have been decorated and used in Hindu festivals since ancient times, which is why the painting also shows a well-decorated elephant. Once again, I continued to learn how to use color combinations and patterns to create a painting that was visually appealing.", link : "/"},
    {id : 5, img : "./images/mandala.jpg", title : "Mandala", year: 2016, desc : "My fifth Madhubani project was this mandala, which loosely translates to “circle” in Sanskrit. In Hindu and Buddhist cultures, these geometric patterns are used as tools for meditation and they represent the universe. This specific mandala shows the different forms of life on our planet, ranging from the swimming fish to the flying birds to the plants on the ground. I used all three of the secondary colors because they complemented each other and provided a range of colors for me to work with.", link : "/"},

    {id : 6, img : "./images/fish.jpg", title : "Fish", desc : "", link : "/"}
  ];
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
        <WorkBox work={work} />
      </Container>
    </section>
  );
}
export default Work;
