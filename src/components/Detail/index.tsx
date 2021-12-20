import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { IComics } from "../../modules/ComicsPage";

const Detail: FC<IComics> = ({ item }) => {
  const { title, prices, description, images, thumbnail } = item;
  return (
    <Col>
      <Row>
        <Col lg={5}>
          <Image
            src={`${images[0]?.path || thumbnail.path}.${
              images[0]?.extension || thumbnail.extension
            }`}
            fluid
          />
        </Col>
        <Col lg={7}>
          <h2>{title}</h2>
          <p>Price: {prices[0].price} $</p>
          <p>{description}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default Detail;
