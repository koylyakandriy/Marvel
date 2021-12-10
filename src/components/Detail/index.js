import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const Detail = ({ data }) => {
  const item = data.results[0]
  return (
    <Col>
      <Row>
        <Col lg={5}>
          <Image
            src={`${item.images[0]?.path || item.thumbnail.path}.${
              item.images[0]?.extension || item.thumbnail.extension
            }`}
            fluid
          />
        </Col>
        <Col lg={7}>
          <h2>{item.title}</h2>
          <p>Price: {item.prices[0].price} $</p>
          <p>{item.description}</p>
        </Col>
      </Row>
    </Col>
  )
}

export default Detail
