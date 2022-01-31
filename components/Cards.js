import React from "react";
import { Card, Container } from "react-bootstrap";

export const Cards = ({ name, image }) => {
    return (
        <Container>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
};
