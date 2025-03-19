# E-Commerce Application

## Overview

This is a full-stack e-commerce application designed to provide a seamless shopping experience for users. It includes features such as product browsing, user authentication, shopping cart management, and order processing.

## Features

- User authentication and authorization
- Product catalog with search and filter functionality
- Shopping cart and checkout system
- Order history and tracking
- Admin panel for product and order management

## Technologies Used

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Stripe

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-app
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   cd client && npm install
   ```

## Usage

1. Start the backend server:
   ```bash
   npm run server
   ```
2. Start the frontend development server:
   ```bash
   cd client && npm start
   ```
3. Open your browser and navigate to `http://localhost:5173`.

## Folder Structure

```
ecommerce-app/
├── client/         # Frontend code
├── server/         # Backend code
├── models/         # Database models
├── routes/         # API routes
├── controllers/    # Request handlers
└── README.md       # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
