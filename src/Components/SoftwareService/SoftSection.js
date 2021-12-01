import React,{useState} from 'react';
import {Card, Container, Col, Row, Badge, CardGroup} from 'react-bootstrap'
import SoftCard from './Card/SoftCard';


function SoftSection(props) {

    const [soft, setSoft] = useState([
        {
            serviceTitle:"تصميم الموشن جرافيك",
            serviceText:"فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف.",
            img:"",
            id:"1"
        },
        {
            serviceTitle:"UXUI تصميم",
            serviceText:"فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف.",
            img:"",
            id:"2"
        },
        {
            serviceTitle:"تصميم الجرافيك",
            serviceText:"فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف.",
            img:"",
            id:"3"
        },
        {
            serviceTitle:"برمجة تطبيقات الهاتف",
            serviceText:"فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف.",
            img:"",
            id:"4"
        },
        {
            serviceTitle:"تطوير مواقع الويب",
            serviceText:"فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف.",
            img:"",
            id:"5"

        },{
            serviceTitle:"تصميم مواقع الويب",
            serviceText:"فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف.",
            img:"",
            id:"6"
        }
    ])
    return (
            <Container fluid="md" style={{ marginTop:'80px' }}>
                <Row className="justify-content-center">
                <h4 style={{ width:"25%" }}>خدمات التصميم والبرمجة</h4>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
                <CardGroup>
                {soft.map(item=>
                <Col xs={6} md={4}>
                <SoftCard style={{ padding:"20px"}} softServiceTitle={item.serviceTitle} softServiceText={item.serviceText} key={item.id}/>

                </Col>
                )}
            </CardGroup>
            </Container>
    );
}

export default SoftSection;