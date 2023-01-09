import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <Container>
      <Row>
        <Col className="mt-5 text-center">
          <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Button
              variant="Link"
              onClick={() => navigate("/", { replace: true })}
            >
              Go Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
