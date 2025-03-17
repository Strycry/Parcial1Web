import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [validationStates, setValidationStates] = useState({ emailState: false, passwordState: false });

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const validateEmail = (email) => {
    setValidationStates((prev) => ({ ...prev, emailState: /\S+@\S+\.\S+/.test(email) }));
  };

  const validatePassword = (password) => {
    setValidationStates((prev) => ({ ...prev, passwordState: password.length >= 5 && password.length <= 8 }));
  };

  const handleEmailChange = (e) => {
    setFormValues((prev) => ({ ...prev, email: e.target.value }));
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setFormValues((prev) => ({ ...prev, password: e.target.value }));
    validatePassword(e.target.value);
  };

  const handleSubmit = () => {
    if (validationStates.emailState && validationStates.passwordState) {
      navigate("/home");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Imagen en el Login */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006" alt={t("login_image_alt")} className="img-fluid w-100 h-100 object-fit-cover" />
        </Col>

        {/* Formulario de Login */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Form className="w-75">
            <h2 className="mb-4 text-center">{t("login_title")}</h2>

            <Form.Group className="mb-3">
              <Form.Label>{t("email")}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t("email_placeholder")}
                onChange={handleEmailChange}
                value={formValues.email}
                isInvalid={!validationStates.emailState}
              />
              {!validationStates.emailState && <Form.Text className="text-danger">{t("email_error")}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("password")}</Form.Label>
              <Form.Control
                type="password"
                placeholder={t("password_placeholder")}
                onChange={handlePasswordChange}
                value={formValues.password}
                isInvalid={!validationStates.passwordState}
              />
              {!validationStates.passwordState && <Form.Text className="text-danger">{t("password_error")}</Form.Text>}
            </Form.Group>

            <Button variant="primary" className="w-100" onClick={handleSubmit} disabled={!validationStates.emailState || !validationStates.passwordState}>
              {t("submit")}
            </Button>

            {/* Botón para cambiar de idioma */}
            <Button variant="secondary" className="w-100 mt-3" onClick={changeLanguage}>
              {t("change_language")}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
