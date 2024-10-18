import Footer from "./component/footer";
import Menu from "./component/navbar";
import {Container, Row, Col} from 'react-bootstrap';

export default function Index() {
    return <>
        <div>
            <Menu/>
            <Container className="px-4">
                <Row>
                    <Col className="bg-success-subtle">1 of 2</Col>
                    <Col className="bg-info-subtle">2 of 2</Col>
                </Row>
                <Row>
                    <Col className="bg-danger-subtle">1 of 3</Col>
                    <Col className="bg-warning-subtle">2 of 3</Col>
                    <Col className="bg-danger-subtle">3 of 3</Col>
                </Row>
            </Container>
            <Footer />
        </div>
    </>;
}
