import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Detail() {
  const [comidas, setComidas] = useState([]);
  const { menu } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/comidas.json?key=d5550910")
      .then((response) => response.json())
      .then((data) => setComidas(data))
      .catch((error) => console.error(t("error_loading_data"), error));
  }, [t]);

  // Función para cambiar de idioma
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <div>
      {/* NavBar con el título centrado */}
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between align-items-center w-100">
          <div style={{ width: "33%" }}></div> {/* Espacio vacío para centrar */}
          <Navbar.Brand className="mx-auto text-center">{t(menu)}</Navbar.Brand>
          <Button variant="outline-light" onClick={toggleLanguage} style={{ width: "33%" }}>
            {i18n.language === "es" ? "EN" : "ES"}
          </Button>
        </Container>
      </Navbar>

      <div className="container mt-4">
        <Carousel className="mb-4">
          {comidas.slice(0, 5).map((item) => (
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.imageCarrucel} alt={item.nombre} />
              <Carousel.Caption>
                <h5>{item.nombre}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <Row>
          {comidas.map((item) => (
            <Col key={item.id} md={3} sm={6} xs={12}>
              <Card className="mb-3">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Detail;
