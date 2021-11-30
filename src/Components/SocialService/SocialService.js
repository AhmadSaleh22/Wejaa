import {React, useState} from 'react';
import {Container, Grid, Row, Col} from 'react-bootstrap'
import CardSer from './Card/CardSer';
function SocialService(props) {

    /**
     * THIS SETSTATE FOR STORING THE STATE OF THE CARDS TITLE
     */
     const [serviceTitle, setServiceTitle] = useState([
        'دعم ردود وتعليقات',
        'زيادة اللايكات',
        'زيادة مشاهدات الريلز',
        'زيادة مشاهدات ستوري',
        'زيادة مشاهدات الفيديو',
        'زيادة المتابعين',
    ])

    /**
     * You have to make useEffect here to fetch data from API
     */

    return (
        <Container fluid="md" style={{ marginTop:"80px" }}>
            <Row className="justify-content-center">
                <h4 style={{ width:"25%" }}>خدمات السوشيال ميديا</h4>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row>
                {serviceTitle.map(item=> 
                    <Col xs lg={2}>
                        <CardSer title={item}/>
                    </Col>)}
            </Row>
        </Container>
    );
}

export default SocialService;