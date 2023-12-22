
# TinyWiki

TinyWiki is a web application that allows users to search for information on Wikipedia quickly. It provides a seamless experience for searching and reading Wikipedia pages, along with analytical data about user interactions.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Express API](#express-api)
- [React Frontend](#react-frontend)
- [MongoDB Integration](#mongodb-integration)
- [Authentication System](#authentication-system)
- [Dashboard](#dashboard)


## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

git clone https://github.com/your-username/tinywiki.git
cd wikipedia

Install dependencies:


# Install Express API dependencies
cd backend
npm install

# Install React frontend dependencies
cd Frontend
npm install

Set up MongoDB:

Make sure MongoDB is running.
Configure MongoDB connection in the Express API (check backend/model/searchModel.js).
Start the application:

# Start Express API
cd backend
nodemon main.js

# Start React frontend
cd Frontend
npm run dev

Usage

Express API
1. Search Endpoint /api/wikipedia/search/:searchTerm
Description: Returns an array of Wikipedia pages that match the keyword.
Route Parameters:
searchTerm (String): The keyword to search for a particular topic.

2. Read Endpoint
Endpoint: GET /api/wikipedia/read/:slug
Description: Returns a JSON object containing HTML content for the page along with its title.

Route Parameters:
slug (String): The slug for the page the user wants information for.
React Frontend

Landing Page / Search Page:

Contains a search bar for users to type in keywords.
Makes an  request to the API to fetch a list of pages.
Displays search results to the user.

Wiki Page:

Opens when a user clicks on a search result.
Displays the Wikipedia content of the selected search result.

MongoDB Integration
The backend stores searched keywords and visited pages in a MongoDB database. A new route outputs a JSON array showing the most searched keywords descending order.


## Note: Use Thease credentials for admin access , else use your own credentials

--> userName:polinasateesh212@gmail.com
--> password:Sateesh@123

Authentication System
An authentication system is implemented based on JWTs. Only admin access is granted, and a dashboard page is created that shows charts and graphs based on the data stored in the MongoDB database.

Dashboard
The dashboard page displays charts  based on analytical data collected in the MongoDB database.


