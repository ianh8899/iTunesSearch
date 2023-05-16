import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import axios from 'axios';

const Search = () => {
    // Define state variables for search text, search criteria, and results
    const [searchText, setSearchText] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('all');
    const [results, setResults] = useState([]);

    // Handle search form submission
    // Send search text and criteria to the backend
    // Update the results state with the response data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get('http://localhost:8080/search', {
            params: {
                searchText: searchText,
                searchCriteria: searchCriteria,
            },
        });
        setResults(response.data);
    };


    // Add a selected item to the favourites list
    // Send the item to the backend to save as a favourite
    // Show a confirmation message
    const addToFavourites = async (item) => {
        await axios.post('http://localhost:8080/favourites', item);
        alert('Added to favourites');
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* Input field for search text */}
                <Form.Group controlId="searchText">
                    <Form.Label>Search Text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter search text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </Form.Group>
                {/* Dropdown menu for search criteria */}
                <Form.Group controlId="searchCriteria">
                    <Form.Label>Search Criteria</Form.Label>
                    <Form.Control as="select" value={searchCriteria} onChange={(e) => setSearchCriteria(e.target.value)}>
                        <option value="all">All</option>
                        <option value="movie">Movie</option>
                        <option value="podcast">Podcast</option>
                        <option value="music">Music</option>
                        <option value="audiobook">Audiobook</option>
                        <option value="shortFilm">Short Film</option>
                        <option value="tvShow">TV Show</option>
                        <option value="software">Software</option>
                        <option value="ebook">Ebook</option>
                    </Form.Control>
                </Form.Group>
                {/* Button to submit the search form */}
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            {/* Display search results as cards */}
            <Row>
                {results.map((item) => (
                    <Col md={3} key={item.trackId}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={item.artworkUrl100} />
                            <Card.Body>
                                <Card.Title>{item.trackName}</Card.Title>
                                <Card.Text>{item.artistName}</Card.Text>
                                {/* Button to add the item to the favourites list */}
                                <Button variant="primary" onClick={() => addToFavourites(item)}>
                                    Add to Favourites
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Search;
