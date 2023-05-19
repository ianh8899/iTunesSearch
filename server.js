// Import required modules
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors');
const helmet = require("helmet");

// Create an Express application
const app = express();

//Use Helmet for secure HTTP headers
app.use(helmet());

// Use JSON middleware to automatically parse request bodies
app.use(express.json());

// Use CORS middleware to enable cross-origin requests
app.use(cors());

// Endpoint to fetch items from iTunes API
// Extract the query parameters from the request
// Make a request to the iTunes API using the query parameters
// Send the results back to the client as JSON
// If there's an error, send an error response with a status code of 500
app.get('/search', async (req, res) => {
    const { searchText, searchCriteria } = req.query;
    try {
        const response = await axios.get('https://itunes.apple.com/search', {
            params: {
                term: searchText,
                media: searchCriteria,
            },
        });
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from iTunes API' });
    }
});

// Import UUID module for generating unique IDs
const { v4: uuidv4 } = require('uuid');

// Endpoint to add a new favourite item
// Extract the item from the request body and generate a unique ID for the item
// Read the existing favourites from the JSON file
// Add the new item to the favourites array
// Save the updated favourites array back to the JSON file
// Send a success response to the client
app.post('/favourites', (req, res) => {
    const item = {...req.body, uniqueId: uuidv4()};
    let favourites = JSON.parse(fs.readFileSync('favourites.json', 'utf8'));
    favourites.push(item);
    fs.writeFileSync('favourites.json', JSON.stringify(favourites));
    res.json({ message: 'Favourite added successfully' });
});

// Endpoint to get all favourite items
// Read the favourites from the JSON file
// Parse the JSON data into a JavaScript array and send it back to the client
app.get('/favourites', (req, res) => {
    const data = fs.readFileSync('favourites.json', 'utf8');
    res.json(JSON.parse(data));
});

// Endpoint to delete a favourite item
// Extract the unique ID from the request parameters
// Read the existing favourites from the JSON file
// Filter out the favourite item with the specified unique ID
// Save the updated favourites array back to the JSON file
// Send a success response to the client
app.delete('/favourites/:uniqueId', (req, res) => {
    const { uniqueId } = req.params;
    let favourites = JSON.parse(fs.readFileSync('favourites.json', 'utf8'));
    favourites = favourites.filter(item => item.uniqueId !== uniqueId);
    fs.writeFileSync('favourites.json', JSON.stringify(favourites));
    res.json({ message: 'Favourite deleted successfully' });
});

// Export the Express application for use in other modules
module.exports = app;
