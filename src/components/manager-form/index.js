
import {
    Link
  } from "react-router-dom";
  import {
    Container,
    Button,
    Form,
    Row,
    Col
  } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import * as apiService from '../../services/apiService';
  const React = require('react');
  const { useEffect, useState} = require('react');

  const ManagerFormComponent = (props) => {
    var managerEmail = props.location.search.split("=");
    managerEmail = managerEmail.length > 1 ? managerEmail[1] : '';
    const [showErrorInput, setShowErrorInput] = useState(false);
    const [managetInput, setManagetInput] = useState(managerEmail);
    const titleForm = managerEmail ? "Editar Mail" : "Agregar Mail";
    const handerClick = () => {
      if(showErrorInput) {
        return;
      }

      //Codigo para enviar a la api
    }

    const handleValueChange = (event) => {
        setShowErrorInput(false);
        if(event.target.value) {
            setManagetInput(event.target.value);
        } else {
            if(managetInput) {
                setManagetInput(event.target.value);
            }
            setShowErrorInput(true)
        }
     
    }

    return (
      <Container>
        <Row className="mt-4">
          <Col className="mb-4" sm={12} md={12} lg={12}>
            <Link to="/">
              <Button variant="primary" type="button">
                  Volver
              </Button>
            </Link>
          </Col>
          <Col className="mb-4" sm={12} md={12} lg={12}>
            <h1>{titleForm}</h1>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Form>
              <Col sm={12} md={12} lg={12}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control  type="email" name="managerEmail" required  onChange={handleValueChange} value={managetInput} />
                  {
                    showErrorInput && (
                    <Form.Text className="text-danger">
                      El campo no puede estar vacio
                    </Form.Text>
                    )
                  }
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={12}>
              <Button variant="primary" type="button" onClick={handerClick}>
                  Guardar
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
  export default ManagerFormComponent
  