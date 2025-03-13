import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Detail() {
  const { menu } = useParams();
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const URL = "https://my.api.mockaroo.com/comidas.json?key=d5550910";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setComidas(data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Detalle de {menu.toUpperCase()}</h2>
      <hr />
      <Row>
        {comidas.map((comida) => (
          <Col key={comida.id} xs={12} md={4} lg={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={comida.imagen} alt={comida.nombre} />
              <Card.Body>
                <Card.Title>{comida.nombre}</Card.Title>
                <Card.Text>{comida.descripcion}</Card.Text>
                <span className="badge bg-success">${comida.precio}</span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Detail;
