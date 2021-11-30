import React from 'react';
import {Card, Col, Row, Badge, Button} from 'react-bootstrap'
import './SoftCardStyle.css'
import graphic from '../../../Assets/Icons/graphic.png'
function SoftCard(props) {
    return (
        <Card className="cardClass">
            <div style={{textAlign: 'center'}}>
                <Card.Img  className="card-image" variant="top" src={graphic} />
            </div>
        
            <Card.Body>
            <div className="card-text-body">
                <Card.Title>{props.softServiceTitle}</Card.Title>
                <Card.Text>{props.softServiceText}</Card.Text>
            </div>
            </Card.Body>
        </Card>
    );
}

export default SoftCard;