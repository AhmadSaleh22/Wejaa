import React from 'react';
import {Card, Col, Row, Badge, Button} from 'react-bootstrap'
import './SoftCardStyle.css'
import graphic from '../../../Assets/Icons/graphic.png'
function SoftCard(props) {
    return (
        <Card  bg="white" style={{ width: '20rem', height:"25rem", paddingTop:"4rem"}}>
            <div style={{textAlign: 'center'}}>
                <Card.Img  className="card-image" variant="top" src={graphic} />
            </div>
        
            <Card.Body>
            <div className="card-text-body">
                <Card.Title style={{textAlign: 'center'}}>{props.softServiceTitle}</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>{props.softServiceText}</Card.Text>
            </div>
            </Card.Body>
        </Card>
    );
}

export default SoftCard;