import { Container, Row, Col } from "react-bootstrap";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import Teachings from "./pages/teachings/Teachings";
import Inspirations from "./pages/inspirations/Inspirations";
import Certificates from "./pages/certificates/Certificates";
import Contact from "./pages/contact/Contact";

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
            <Activities />
          </Col>
        </Row>

        <Row>
          <Col>
            <Teachings />
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
