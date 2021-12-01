import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PackageCard from './PackageCard/PackageCard';
function PackageSection(props) {
    const [packageInfo, setPackageInfo] = useState([
        {
            title:"بكج 3000 متابع خليجي حقيقي",
            price:"50 ر.س"
        },
        {
            title:"بكج 3000 متابع خليجي حقيقي",
            price:"50 ر.س"
        },
        {
            title:"بكج 3000 متابع خليجي متفاعلين حقيقيين",
            price:"60 ر.س"
        },
        {
            title:"بكج 3000 متابع متفاعل أجنبي",
            price:"80 ر.س"
        },
        {
            title:"بكج 3000 متابع خليجي حقيقي",
            price:"50 ر.س"
        },
    ])
    return (
        <Container fluid="sm">
            <Row>
                {packageInfo.map(items=>(
                    <Col xs={3} >
                        <PackageCard title={items.title} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PackageSection;