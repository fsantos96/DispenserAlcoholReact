
import {
  Link
} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
const React = require('react');

const HomeComponent = (props) => {
  return (

  <Container>
         <Row className="justify-content-center home-container">
         <Col sm={3} md={3} lg={3}></Col>
         <Col sm={3} md={3} lg={3}>
            <Link to={"/device"}>
              <Button variant="primary">Ajustes de Alarmas</Button>
            </Link>
          </Col> 
          <Col sm={3} md={3} lg={3}>
            <Link to={"/manager"}>
              <Button variant="primary">Ajustes Gerenciales</Button>
            </Link>
          </Col>
          <Col sm={3} md={3} lg={3}></Col>
         </Row>
       </Container>
  )
}
export default HomeComponent
