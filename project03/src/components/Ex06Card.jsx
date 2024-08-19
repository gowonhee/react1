import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Ex06Card = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imgSrc} height="350px" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.content}
                </Card.Text>
                <Button variant="primary">
                    <a href={item.SNS}>Instagram</a>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Ex06Card