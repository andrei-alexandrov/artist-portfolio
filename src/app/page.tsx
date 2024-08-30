import { Container, Row, Col } from "react-bootstrap";
import StartingPage from "./components/About/StartingPage";

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <StartingPage />
          </Col>
        </Row>

        <Row>
          <Col>{/* Projects Component */}</Col>
        </Row>
      </Container>
    </main>
  );
}
