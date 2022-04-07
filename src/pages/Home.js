import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function Home() {

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                        <h1>EXPRESS.JS + REACTJS</h1>
                        <p class="lead">Fitur mengelola data Express.js dan React.js oleh <strong>Rahmad Widayat</strong></p>
                        <Button href="https://rahmadwid.github.io/portfolio/" target="_blank" variant="primary" size="lg">View Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home