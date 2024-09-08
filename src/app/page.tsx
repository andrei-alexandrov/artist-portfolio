import { Container, Row, Col } from "react-bootstrap";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import Inspirations from "./pages/inspirations/Inspirations";
import Contact from "./pages/contact/Contact";
import Certificates from "./pages/certificates/Certificates";

export default function Home() {
  return (
    <main>
      <Intro />
      <Container>
        <Row>
          <Col></Col>
        </Row>

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
            <Inspirations />
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
