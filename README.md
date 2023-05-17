# iTunes Search App
The iTunes Search App is a web application built using React, Express, Helmet, and Bootstrap. It allows users to search for content from the iTunes Store and Apple Books Store and maintain a list of their favourite items.

## Features
- Search for content from the iTunes Store and Apple Books Store
- Filter search results by media type
- Add items to a favourites list
- Remove items from the favourites list

## Installation
To install and run the app on your local machine, follow these steps:

1) Clone the repository to your local machine using command "git clone https://github.com/ianh8899/iTunesSearch.git"
2) Change into the project directory using command: "cd itunesapp"
3) Start the application using command: "npm start"

This will start the backend server on port 8080 and the frontend React app on port 3000. Open your web browser and navigate to http://localhost:3000 to access the app.

## Testing
To run tests for the backend, run the following command: "npm test"

To run tests for the front end.
1) Navigate to the front end folder using command: "cd frontend"
2) Run the tests using command; "npm test"

# Security Measures
The following security measures have been implemented in the app:

Helmet: Helmet is a middleware for Express that helps secure your app by setting various HTTP headers. It helps prevent cross-site scripting (XSS) attacks, clickjacking, and other code injection attacks.

CORS: CORS (Cross-Origin Resource Sharing) is a security feature that allows you to restrict which domains can access your server's resources. In this app, we have used the CORS middleware for Express to enable CORS with the default configuration.

API Key Management: To protect the API key used to access the iTunes API, the key is not exposed on the client-side. Instead, the server-side code makes the API request and sends the results back to the client.




