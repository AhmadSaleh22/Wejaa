import React from 'react';
import {Container, Row, Col, Form, FormControl, InputGroup, Button, CardGroup, Card} from 'react-bootstrap'
import instagram from '../../Assets/Icons/instagram.png'
function HeroProduct(props) {
    return (
        <Container fluid="md" dir="rtl" bg="light">
            <Row >
                <Col>
                    <Row>
                        <h2>بكج 100000متابع حقيقي متفاعل خليجي عربي</h2>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <Form.Label htmlFor="basic-url">رابط للمشاركة</Form.Label>
                            <InputGroup.Text id="basic-addon3">
                                https://example.com/users/
                            </InputGroup.Text>
                        </Col>
                        <Col xs={4}>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" id="button-addon1">
                                +
                                </Button>
                                <FormControl
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                />
                                <Button variant="outline-secondary" id="button-addon1">
                                -
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <CardGroup>
                        <Card text='primary' className="justify-content-center" justify style={{ border:"none", alignItems:"center", justifyContent:"center"}}>
                            <Card.Img variant="bottom" src={instagram} style={{ width:"50%"}}/>
                            <Card.Title style={{ fontSize:"16px", marginTop:"12px" }} >السعر : 50 ر.س</Card.Title>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroProduct;