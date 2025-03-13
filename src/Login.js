import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  const navigate = useNavigate(); // Hook para redirigir
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const [validationStates, setValidationStates] = useState({
    emailState: false,
    passwordState: false
  });

  // Validar email
  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setValidationStates(prevState => ({ ...prevState, emailState: isValid }));
  };

  // Validar contraseña (5-8 caracteres)
  const validatePassword = (password) => {
    const isValid = password.length >= 5 && password.length <= 8;
    setValidationStates(prevState => ({ ...prevState, passwordState: isValid }));
  };

  // Manejo del cambio en email
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormValues(prevValues => ({ ...prevValues, email }));
    validateEmail(email);
  };

  // Manejo del cambio en password
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues(prevValues => ({ ...prevValues, password }));
    validatePassword(password);
  };

  // Función de envío (redirige a Home si es válido)
  const handleSubmit = () => {
    if (validationStates.emailState && validationStates.passwordState) {
      console.log("Enviado con éxito");
      navigate('/home'); // Redirigir a Home
    } else {
      console.log("Error en la validación");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Imagen a la izquierda */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img 
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006" 
            alt="Pintura de una ola roja, blanca y azul" 
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </Col>

        {/* Formulario a la derecha */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Form className="w-75">
            <h2 className="mb-4 text-center">Inicio de Sesión</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleEmailChange}
                value={formValues.email}
                isInvalid={!validationStates.emailState}
              />
              {!validationStates.emailState &&
                <Form.Text className="text-danger">Formato de email inválido.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                value={formValues.password}
                isInvalid={!validationStates.passwordState}
              />
              {!validationStates.passwordState &&
                <Form.Text className="text-danger">La contraseña debe tener entre 5 y 8 caracteres.</Form.Text>}
            </Form.Group>

            <Button 
              variant="primary" 
              className="w-100"
              onClick={handleSubmit} 
              disabled={!validationStates.emailState || !validationStates.passwordState}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
