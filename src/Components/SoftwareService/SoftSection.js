import React from 'react';
import {Card, Container, Col, Row, Badge, CardGroup} from 'react-bootstrap'
import SoftCard from './Card/SoftCard';
function SoftSection(props) {
    return (
        <CardGroup>
            <SoftCard softServiceTitle="تصميم الموشن جرافيك" softServiceText="فريق عمل متكامل من الكفاءات المتخصصة مع استخدام أفضل الأدوات والأفكار الإبداعية للخروج بتصميم جذاب يتناسب مع أذواق جمهورك المستهدف."/>
        </CardGroup>
    );
}

export default SoftSection;