// Import required modules
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors');
const helmet = require("helmet");


// Create an Express application
const app = express();

//Use Helmet
app.use(helmet());

// Use JSON middleware to parse request bodies
app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Fetch items from iTunes API
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

// Add a new favourite item
// Extract the item from the request body
// Read the existing favourites from the JSON file
// Add the new item to the favourites array
// Save the updated favourites array back to the JSON file
// Send a success response to the client
app.post('/favourites', (req, res) => {
    const item = req.body;
    let favourites = JSON.parse(fs.readFileSync('favourites.json', 'utf8'));
    favourites.push(item);
    fs.writeFileSync('favourites.json', JSON.stringify(favourites));
    res.json({ message: 'Favourite added successfully' });
});

// Get all favourite items
// Read the favourites from the JSON file
// Parse the data into a JavaScript object and send it back to the client
app.get('/favourites', (req, res) => {
    const data = fs.readFileSync('favourites.json', 'utf8');
    res.json(JSON.parse(data));
});

// Delete a favourite item
// Extract the ID from the request parameters
// Read the existing favourites from the JSON file
// Filter out the favourite item to be deleted
// Save the updated favourites array back to the JSON file
// Send a success response to the client
app.delete('/favourites/:id', (req, res) => {
    const { id } = req.params;
    let favourites = JSON.parse(fs.readFileSync('favourites.json', 'utf8'));
    favourites = favourites.filter(item => item.trackId && item.trackId.toString() !== id);
    fs.writeFileSync('favourites.json', JSON.stringify(favourites));
    res.json({ message: 'Favourite deleted successfully' });
});

module.exports = app;
