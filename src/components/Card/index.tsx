import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";
import { IComics } from "../../modules/ComicsPage";

const CardItem: FC<IComics> = ({ item }) => {
  const { id, thumbnail, title, description = "No description" } = item;

  return (
    <Col md={6} lg={4} style={{ marginBottom: "25px" }}>
      <Card>
        <Card.Img
          variant="top"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "left",
          }}
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card.Title style={{ height: "72px" }}>{title}</Card.Title>
          <Card.Text style={{ height: "192px", overflow: "hidden" }}>
            {description}
          </Card.Text>
          <Button as={Link} to={`comics/${id}`} variant="primary">
            Detail
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
