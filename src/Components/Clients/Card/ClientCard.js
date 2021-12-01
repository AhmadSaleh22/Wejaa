import React from 'react';
import {Card, CardGroup, Container, Row, Col, Badge} from 'react-bootstrap';
import './ClientCardStyle.css';

function ClientCard(props) {
    return (
        <Card className="card-horizontal" bg="white" dir="rtl" style={{ margin:'25px', borderLeft:"1px solid rgba(0,0,0,.125)" }} >
            <Row>
                <Col>
                    <Card.Img />
                </Col>
                <Col xs={6}>
                <Row>
                    <Col>
                    <Badge text="dark" bg="none">عبدالله السويدي</Badge>
                    </Col>
                    <Col>
                    stars
                    </Col>
                </Row>
                <Row>
                    <span><Badge text="secondary" bg="none">منذ شهرين</Badge></span>
                </Row>
                <Row>
                <p>... خدمة اكثر من رائعة ومتابعين حقيقيون كل التوفيق لكم </p>
                </Row>
                </Col>
                <Col  >
                <Badge style={{ position: "absolute", bottom: "18px" }} bg="none" text="secondary" fixed="bottom">المزيد</Badge>
                </Col>
            </Row>            
        </Card>
    );
}

export default ClientCard;