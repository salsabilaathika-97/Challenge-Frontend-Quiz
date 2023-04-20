import react from "react";
import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";

const Login = () => {
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md = {8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase">Welcome</h2>
                                    <p className="mb-5">Please enter your username</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Username
                                                </Form.Label>
                                                <Form.Control placeholder="Enter username" required />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                Login
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;