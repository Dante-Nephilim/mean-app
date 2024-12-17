---

# MEAN Stack Application

This is a basic MEAN (MongoDB, Express, Angular, Node.js) application that demonstrates user registration, login, and profile retrieval using JWT authentication. The application is split into two main parts:

- **Backend (server/):** Node.js with Express and Mongoose connecting to MongoDB, providing RESTful APIs.
- **Frontend (client/):** Angular application that consumes the API and provides a simple user interface.

## Prerequisites

- **Node.js & npm**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **Angular CLI**: `npm install -g @angular/cli`
- **MongoDB**: Ensure you have MongoDB running locally or have a MongoDB Atlas connection string.

## Project Structure

```
mean-app/
 ├─ client/          # Angular front-end
 ├─ server/          # Express back-end
 │   ├─ config/      # Database configuration (Mongoose)
 │   ├─ controllers/ # Controller logic for routes
 │   ├─ middlewares/ # Authentication middleware
 │   ├─ models/      # Mongoose models
 │   ├─ routes/      # Express route definitions
 │   ├─ .env          # Environment variables (PORT, MONGO_URI, JWT_SECRET)
 │   ├─ index.js     # Entry point for Node server
 │   └─ package.json 
 └─ README.md
```

## Setup Instructions

### 1. Backend (Express + MongoDB)

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and set your environment variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/mean_db
   JWT_SECRET=your_jwt_secret_key
   ```
   
   If using MongoDB Atlas, replace the `MONGO_URI` with your cluster connection string.
   
4. Start the server:
   ```bash
   npm run dev
   ```
   
   You should see console messages indicating a successful MongoDB connection and the server listening on the specified port.

### 2. Frontend (Angular)

1. In another terminal, navigate to the `client` directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Angular development server:
   ```bash
   npm start
   ```
   
   This will start the Angular app on `http://localhost:4200`.

## Using the Application

Open `http://localhost:4200` in your browser. You will see a few buttons:

- **Register:** Creates a new user in the database.
- **Login:** Logs in the user and stores a JWT token in local storage.
- **Get Profile:** Uses the stored JWT token to retrieve the user’s profile information from the server.

### API Endpoints

- **POST /api/users/register**
- **POST /api/users/login**
- **GET /api/users/profile** (requires Authorization header with a valid JWT token)

## Common Issues

- **CORS or Connection Errors:** Ensure the backend is running and you are using the correct port.
- **JWT Auth Issues:** Make sure `JWT_SECRET` is set correctly in the `.env` file.
- **Missing `HttpClientModule` in Angular:** Ensure you have imported `HttpClientModule` in your standalone component or main module.

## License

This project is provided as-is without a specific license. Feel free to modify or integrate it into your own applications.

---

This `README.md` gives a clear overview of setup, configuration, and usage instructions for the MEAN stack application.