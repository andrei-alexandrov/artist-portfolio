import { Container, Row, Col } from "react-bootstrap";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import Gallery from "./pages/gallery/Gallery";
import Courses from "./pages/courses/Courses";
import Certificates from "./pages/certificates/Certificates";
import Contact from "./pages/contact/Contact";

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
