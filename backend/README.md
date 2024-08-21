# Backend

This is the backend of the project. It provides the APIs and business logic necessary for the operation of the application.

## Technologies Used

- **[Express](https://expressjs.com/)**: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the development of server-side code.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database that uses a flexible, document-oriented data model. It is used for storing and managing data in a scalable and efficient manner.
- **[Mongoose](https://mongoosejs.com/)**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to interact with MongoDB using schemas and models.
- **[CORS](https://www.npmjs.com/package/cors)**: A package that provides a middleware to enable Cross-Origin Resource Sharing (CORS). It is used to allow or restrict resources to be requested from another domain.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: A module that loads environment variables from a `.env` file into `process.env`. It helps manage configuration and environment variables easily.
- **[Jest](https://jestjs.io/)**: A JavaScript testing framework that is easy to set up and use, providing a robust way to write and run automated tests. It is ideal for ensuring code quality and reliability.

## Dependencies

- **[nodemon](https://www.npmjs.com/package/nodemon)**: A development tool that helps monitor code changes and automatically restarts the server. Added to `devDependencies` to facilitate development.


## Project Structure

- **src/index.js**: Entry point for the backend.
- **src/**: Source code for the backend.
- **.env**: File for backend environment variables.
- **.gitignore**: Git ignore file for the backend.
- **package.json**: Dependencies and scripts for the backend.
- **README.md**: Documentation for the backend.

## Folder Structure

my-project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── productController.js
│   │   ├── models/
│   │   │   └── product.js
│   │   ├── routes/
│   │   │   └── productRoutes.js
│   │   ├── services/
│   │   │   ├── csvReader.js
│   │   │   ├── dataTransformer.js
│   │   │   └── mongoInserter.js
│   │   ├── uploads/
│   │   │   └── products.csv
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
└── frontend/

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-URL>
    ```

2. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file with the necessary environment variables. Refer to `.env.example` for a list of required variables.

## Running the Server

To start the server, use the command:

```bash
npm start
```

## Running the Server

To start the server in development mode with automatic restarts, use:

```bash
npm run dev
```

## Scripts

- **start**: Starts the server in production mode.
- **dev**: Starts the server in development mode with `nodemon`.
- **test**: Runs the tests.

## Testing

To run the tests, use the command:

```bash
npm test
```



