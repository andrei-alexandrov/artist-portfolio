import { Container, Row, Col } from "react-bootstrap";
import Intro from "../[locale]/pages/intro/Intro";
import About from "../[locale]/pages/about/About";
import Activities from "../[locale]/pages/activities/Activities";
import Gallery from "../[locale]/pages/gallery/Gallery";
import Courses from "../[locale]/pages/courses/Courses";
import Certificates from "../[locale]/pages/certificates/Certificates";
import Contact from "../[locale]/pages/contact/Contact";

export default function Home() {
  return (
    <main>
      <Container>
        <Intro />

        <Row>
          <Col>
            <About />
          </Col>
        </Row>

        <Row>
          <Col>
            <Activities />
          </Col>
        </Row>

        <Row>
          <Col>
            <Courses />
          </Col>
        </Row>

        <Row>
          <Col>
            <Gallery />
          </Col>
        </Row>

        <Row>
          <Col>
            <Certificates />
          </Col>
        </Row>
      </Container>
      <Contact />
    </main>
  );
}
