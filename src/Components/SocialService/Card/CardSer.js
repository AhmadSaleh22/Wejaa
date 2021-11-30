import {React, useState} from 'react';
import {CardGroup, Card} from 'react-bootstrap'
import Group from '../../../Assets/Group.png';
function CardSer(props) {

    

    return (
        <CardGroup>
            <Card text='primary' className="justify-content-center" justify style={{ border:"none", alignItems:"center", justifyContent:"center"}}>
                <Card.Img variant="bottom" src={Group}/>
                <Card.Title style={{ fontSize:"16px", marginTop:"12px" }} >{props.title}</Card.Title>
            </Card>
        </CardGroup>
    );
}

export default CardSer;