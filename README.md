# Welcome to My First Backend


## Task

The goal of this project was to build a simple backend web server that responds to HTTP GET requests. The focus was on understanding how routing works on the server side, how requests and responses are handled, and how basic authentication can be implemented in a backend environment.

This project helped me practice core backend concepts such as request handling, routing, and authorization using Node.js and Express.

## Description

This backend server is built using Express.js, a lightweight JavaScript framework for creating web servers. The application exposes multiple GET endpoints that return information about Frank Sinatra, including a random song, personal details, and public vs. protected routes.

## Challenge
One of the more challenging parts of this project was implementing Basic Authentication for a protected route. The backend logic itself worked as expected, but I had to carefully match the authentication format required by automated tests (such as Gandalf). This pushed me to better understand HTTP headers, Base64 encoding, and how browsers and clients handle authentication.

The project reinforced how small implementation details—like headers and response codes—matter a lot in backend development.

## Installation

To run this project locally, make sure you have Node.js installed.

Clone the repository

Install dependencies by running:

```
npm install express
```

Ensure all required packages are installed before starting the server

Usage

Start the server by running:


```
node app.js
```

Once the server is running, you should see a message in the terminal confirming that it has started on port 8080.

You can then access the following endpoints in your browser, Postman, or via the terminal using tools like curl:

/ → Returns a random Frank Sinatra song

/birth_date → Returns Frank Sinatra’s birth date

/birth_city → Returns his birth city

/wives → Returns a list of his wives

/picture → Redirects to an image of Frank Sinatra

/public → Public route accessible by anyone

/protected → Requires Basic Authentication

Username: admin

Password: admin

The /protected route demonstrates basic backend authentication using HTTP headers, while the /public route shows unrestricted access.

## The Core Team
<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<img src="https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png" alt="Qwasar SV Logo" height="20" style="vertical-align: middle;" /> Qwasar SV — Software Engineering School

