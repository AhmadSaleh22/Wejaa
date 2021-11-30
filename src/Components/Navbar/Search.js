import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Search(){
    return(
        <header className="App-header">
            <Container fluid  className="p-3">
              <Row>
                <Col sm={4}>
                    <a className="navbar-brand" href="/#">
                      <img src="images/logo.png" alt="" name="logo image" width="230" height="40" className="d-inline-block align-top" />
                    </a>               
                </Col>

                <Col sm={8}>            
                <Form>
                  <Form.Row>
                    <Col>
                       <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>

                            </InputGroup.Text>
                         </InputGroup.Prepend>
                          <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                            Preference
                          </Form.Label>
                          <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                          >
                            <option value="0">London</option>
                            <option value="1">Dubai</option>
                            <option value="2">Cairo</option>
                            <option value="3">New York</option>
                          </Form.Control>
                       </InputGroup>
                      </Col>

                    <Col xs={5}>
                      <Form.Control placeholder="Search anything in London" />
                    </Col>
                    <Col>
                    <button type="button" className="btn btn-warning">
                    <svg width="15px" height="15px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg>
                    </button>
                    </Col>
                  </Form.Row>
                </Form>
                          
                </Col>
              </Row>
            </Container>

      </header>
    );
}

export default Search;