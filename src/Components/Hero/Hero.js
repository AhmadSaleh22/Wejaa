import React from 'react';
import { Col, Row , Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Group from '../../Assets/Group.png'
function Hero(props) {
    return (
        <Container fluid>
            <Card bg="light" style={{ border:"none" }}>
                <Row>
                    <Col xs={6}>
                        <Card.Img src={Group} className="justify-content-center" style={{ margin:'50px', width:"80%"}} />
                    </Col>
                    <Col>
                        <Card.Body className="justify-content-center" style={{ textAlign:"right", margin:"150px 120px" }}>
                            <Card.Title >
                                ادعم حسابك السوشيال ميديا
                            </Card.Title>
                            <Card.Text >
                                وجاء ميديا هي منصة تهدف لتقديم جميع خدمات السوشيال ميديا بشكل سريع وأرخص الأسعار
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                
            </Card>
        </Container>
    );
}

export default Hero;