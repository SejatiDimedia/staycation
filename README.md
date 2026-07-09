# Staycation 🌴

Staycation is a full-stack MERN (MongoDB, Express, React, Node.js) application designed for booking vacation properties and accommodations. It offers a seamless experience for users to browse, select, and book their next getaway.

## 🚀 Technologies Used

**Frontend:**
- React.js
- React Router (Routing)
- Redux (State Management)
- Sass (Styling)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database & ODM)
- Multer (File Uploads)
- EJS (View Engine for Admin/Dashboard)

## 📁 Project Structure

The project is structured as a monorepo containing both the frontend and backend applications:

- `/frontend` - The React application (Client-side)
- `/backend`  - The Express.js application (Server-side/API)

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/SejatiDimedia/staycation.git
cd staycation
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```
   *The backend will run on `http://localhost:3000`*

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Ensure there is a `.env` file inside the `frontend` directory with the following content to point to the backend API:
   ```env
   REACT_APP_HOST=http://localhost:3000
   ```
4. Start the React development server:
   ```bash
   # If you are using a newer version of Node (v17+), use the legacy OpenSSL provider:
   PORT=3001 NODE_OPTIONS=--openssl-legacy-provider npm start
   ```
   *The frontend will run on `http://localhost:3001`*

## 🧑‍💻 Usage
Once both servers are running, open [http://localhost:3001](http://localhost:3001) in your browser to view the application.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
