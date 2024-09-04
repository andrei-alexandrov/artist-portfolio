import { Container, Row, Col } from "react-bootstrap";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Inspirations from "./pages/inspirations/Inspirations";
import Contact from "./pages/contact/Contact";
import Certificates from "./pages/certificates/Certificates";

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Intro />
          </Col>
        </Row>

        <Row>
          <Col>
            <About />
          </Col>
        </Row>

        <Row>
          <Col>
            <Projects />
          </Col>
        </Row>

        <Row>
          <Col>
            <Inspirations />
          </Col>
        </Row>

        <Row>
          <Col>
            <Certificates />
          </Col>
        </Row>
      </Container>

      <Row>
        <Col>
          <Contact />
        </Col>
      </Row>
    </main>
  );
}
