import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

const Favourites = () => {
    // Define state variable for favourites list
    const [favourites, setFavourites] = useState([]);

    // Fetch favourites from the server when the component mounts
    useEffect(() => {
        fetchFavourites();
    }, []);

    // Function to fetch the favourites from the backend
    const fetchFavourites = async () => {
        const response = await axios.get('http://localhost:8080/favourites');
        setFavourites(response.data);
    };

    // Function to delete a favourite from the list
    // Send a delete request to the backend with the item's ID
    // Fetch the updated list of favourites from the server
    const deleteFavourite = async (id) => {
        await axios.delete(`http://localhost:8080/favourites/${id}`);
        fetchFavourites();
    };

    return (
        <Container>
            {/* Display the favourites as cards */}
            <Row>
                {favourites.map((item) => (
                    <Col md={4} key={item.trackId}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={item.artworkUrl100} />
                            <Card.Body>
                                <Card.Title>{item.trackName}</Card.Title>
                                <Card.Text>{item.artistName}</Card.Text>
                                {/* Button to remove the item from the favourites list */}
                                <Button variant="danger" onClick={() => deleteFavourite(item.trackId)}>
                                    Remove from Favourites
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Favourites;
