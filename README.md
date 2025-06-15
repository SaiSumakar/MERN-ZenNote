# MERN ZenNote

A simple yet powerful note-taking application built with the MERN (MongoDB, Express, React, Node.js) stack. ZenNote allows you to create, read, update, and delete notes in a clean and intuitive interface.

---

## Features

* Create, read, update, and delete personal notes
* Responsive, mobile-first design
* Rate Limiting with Upstash Redis
* Rest API

## Tech Stack

* **Frontend:** React, React Router, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)

## Prerequisites

* Node.js
* npm
* MongoDB Atlas account

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SaiSumakar/MERN-ZenNote.git
   cd MERN-ZenNote
   ```

2. **Install dependencies**

   * **Backend**

     ```bash
     cd backend
     npm install
     ```

   * **Frontend**

     ```bash
     cd ../frontend
     npm install
     ```

## Environment Variables

Create a `.env` file in the `backend` folder with the following values:

```dotenv
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Running the Application

1. Start the app (from project root)
   ```bash
    npm run start
   ```

3. **Visit in your browser**

   Navigate to `http://localhost:5001/` to view the React app.

## Folder Structure

```
MERN-ZenNote/
├── package.json # Dependencies
├──backend/
|      ├── src/
|      │   ├── config/        # DB connection
|      │   ├── middleware/    # Rate limiter, etc.
|      │   ├── models/        # Mongoose schemas
|      │   ├── routes/        # Express routes
|      │   └── server.js      # Express app entry point
|      ├── .env               # Environment variables
|      └── package.json       # Dependencies
│
└── frontend/          # React client
    ├── public/
    ├── src/
    │   ├── components/ # Reusable UI components
    │   ├── pages/      # Route pages (Home, Login, Dashboard)
    │   ├── lib/      # API calls, helpers
    │   ├── App.jsx      # App entry
    │   └── main.jsx    # React DOM render
    ├── package.json
    └── index.html
```

## API Endpoints

### Notes

* `GET /api/notes` — Fetch all notes for authenticated user
* `POST /api/notes` — Create a new note
* `GET /api/notes/:id` — Get a single note
* `PUT /api/notes/:id` — Update a note
* `DELETE /api/notes/:id` — Delete a note

## Usage

1. Create new notes using the "Add Note" button.
2. Edit or delete notes from your dashboard.

## Screenshots
* Home page
![image](https://github.com/user-attachments/assets/b97f6e66-dd07-4759-be6c-57234090b33f)

* Create Note Page
* ![image](https://github.com/user-attachments/assets/24a86442-f0d8-49c5-9de1-5194932d3235)

* Edit the Note
* ![image](https://github.com/user-attachments/assets/4af60ce9-ae6c-47b7-9d96-551fa859dcb2)


## Acknowledgements

* [MERN Starter Kit](https://github.com/mernjs/mern)
* [React Docs](https://reactjs.org)
* [Express Docs](https://expressjs.com)
* [MongoDB Docs](https://docs.mongodb.com)
