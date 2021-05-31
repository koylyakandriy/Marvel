import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const CardItem = ({ item }) => {
  const { thumbnail, title, description } = item
  return (
    <Col md={4}>
      <Card>
        <Card.Img
          variant="top"
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardItem
