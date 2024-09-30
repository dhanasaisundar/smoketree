<!DOCTYPE html>
<body>
<h1>User Registration API with MySQL and Express.js</h1>
<p>This project is a simple API built with Express.js and MySQL for registering users and their addresses. 
It demonstrates how to set up an Express-based API with a MySQL database using raw SQL queries.</p>

<h4>Features:</h4>
<ul>
    <li>Register a user with their address.</li>
    <li>Stores user data and addresses in a MySQL database.</li>
    <li>Implements basic input validation.</li>
    <li>RESTful API structure.</li>
    <li>Centralized error handling.</li>
</ul>

<h4>Technologies Used:</h4>
<ul>
    <li><strong>Node.js</strong>: JavaScript runtime for server-side programming.</li>
    <li><strong>Express.js</strong>: Web framework for building RESTful APIs.</li>
    <li><strong>MySQL</strong>: Relational database used for data storage.</li>
    <li><strong>MySQL2</strong>: MySQL client for Node.js to run raw SQL queries.</li>
    <li><strong>dotenv</strong>: For environment variable management.</li>
</ul>

<h4>Prerequisites:</h4>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
    <li><strong>Node.js</strong> (v12 or higher)</li>
    <li><strong>MySQL</strong> (v8.0 or higher)</li>
</ul>

<h4>Project Setup:</h4>

<h6>1. Clone the repository:</h6>
<pre><code>git clone https://github.com/yourusername/user-registration-api.git
cd user-registration-api
</code></pre>

<h6>2. Install dependencies:</h6>
<pre><code>npm install</code></pre>

<h6>3. Set up environment variables:</h6>
<p>Create a <code>.env</code> file in the root directory and add your database configuration:</p>
<pre><code>
MYSQL_HOST=localhost
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=your_database_name
</code></pre>

<h6>4. Set up the MySQL database:</h6>
<p>Create a MySQL database:</p>
<pre><code>CREATE DATABASE your_database_name;
USE your_database_name;
</code></pre>

<p>Create the <strong>User</strong> and <strong>Address</strong> tables:</p>
<pre><code>CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE Address (
  id INT AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(255) NOT NULL,
  userId INT,
  FOREIGN KEY (userId) REFERENCES User(id)
);
</code></pre>

<h6>5. Run the API server:</h6>
<p>Start the development server:</p>
<pre><code>npm start</code></pre>
<p>The server will start on <code>http://localhost:3000</code>.</p>

<h6>API Endpoints:</h6>
<p><strong>POST /register</strong></p>
<p>Registers a new user with their address.</p>

<ul>
    <li><strong>URL</strong>: <code>/api/register</code></li>
    <li><strong>Method</strong>: POST</li>
    <li><strong>Body Parameters:</strong></li>
    <ul>
        <li><strong>username</strong> (string, required): The user's name.</li>
        <li><strong>address</strong> (string, required): The user's address.</li>
    </ul>
    <li><strong>Response:</strong></li>
    <ul>
        <li><strong>200 OK</strong>: On successful registration.</li>
        <li><strong>500 Internal Server Error</strong>: If there is a database or server error.</li>
    </ul>
</ul>

<h6>Example Request:</h6>
<pre><code>{
  "username": "John Doe",
  "address": "123 Main Street"
}
</code></pre>

<h6>Example Response:</h6>
<pre><code>{
  "success": true,
  "status": 200,
  "data": {
    "userDetails": {
      "id": 1,
      "name": "John Doe"
    }
  }
}
</code></pre>

<h6>Project Structure:</h6>
<pre><code>user-registration-api/
├── controllers/
│   └── userController.js   # Handles business logic for user routes
├── database/
│   └── dbConnection.js     # Handles database connection
├── utils/
│   └── errorMiddleware.js  # Error handling middleware
├── routes/
│   └── userRoutes.js       # Defines API routes for user registration
├── .env                    # Environment variables
├── app.js                  # Main Express server setup
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
</code></pre>

<h6>Error Handling:</h6>
<p>The project uses a custom error middleware to handle errors globally. 
If an error occurs, the middleware will send a response with the appropriate HTTP status code and message.</p>

<h6>Testing the API:</h6>
<p>You can use Postman or cURL to test the API. Here’s an example using cURL:</p>
<pre><code>curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
  "username": "John Doe",
  "address": "123 Main Street"
}'
</code></pre>

</body>
</html>
