import React,{useRef, useState} from 'react';
import {Card, Button, Col, Row, Overlay } from 'react-bootstrap'
import instagram from "../../../Assets/Icons/instagram.png"
function PackageCard(props) {

    const [show, setShow] = useState(true)
    const target = useRef(null);
    return (
        <Card  bg="white" border="none" style={{ width: '15rem', textAlign:"center",alignItems:"center" , border:"none"}} >
            <Card  style={{  textAlign:"center", alignItems:"center", border:"none", height:"13rem" }}>
            <Card.Img variant="top" src={instagram} style={{ width:"60%", marginTop:"35px" }} />

        {/*
            <Overlay target={target.current} show={show} placement="right" >
        ({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              width: "10%",
              ...props.style,
            }}
          >
            دعم خليجي حقيقي
          </div>
        )
      </Overlay>
        */}
            </Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Row>
                    <Col><Button size="sm" variant="outline-secondary" style={{ width:"120px" }} >اضف الى السلة</Button></Col>
                    <Col><h6>50 ر.س</h6></Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default PackageCard;