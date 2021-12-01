import React from 'react';
import {Container, Col, Row, CardGroup, Carousel} from 'react-bootstrap';
import ClientCard from './Card/ClientCard';
function ClientSec(props) {
    return (
        <Container>
            <Carousel controls={false}>
                <Carousel.Item>
                    <CardGroup>
                        <ClientCard />
                        <ClientCard />
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default ClientSec;