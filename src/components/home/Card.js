import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const Cards = (props) => {
  const { news } = props;
  return (
    <Card style={{ width: '18rem', margin: '0px 0px 10px 0px' }}>
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          {news.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Author: {news.author}</ListGroup.Item>
        <ListGroup.Item>Published : {news.publishedAt}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={news.url}>Read more..</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Cards;