import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import {Container, Row, Col} from 'react-bootstrap'
function NavbarHome(props) {
    return (
        <Container fluid="xxl" >
            <Row >
                <Navbar bg="white" expand="xl">
                    <Col>
                    <Nav className="justify-content-center">
                        <NavDropdown title="سليمان العميري" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">الحساب</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">الاعدادات</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">المتجر</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">تسجيل خروج</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Col>
                    <Col>
                    <Nav className="justify-content-center">
                    <Nav.Link href="#home">طلب بناء متجر</Nav.Link>
                    </Nav>
                    </Col>
                    <Col>
                        <Nav className="justify-content-center">
                            <NavDropdown title="جميع الخدمات" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ترجمة</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">تصميم</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ازياء</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="justify-content-center">
                            <Nav.Link href="#home">وجاء ميديا</Nav.Link>
                        </Nav>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
}

export default NavbarHome;