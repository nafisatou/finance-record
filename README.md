# Finance Tracker

A personal finance tracking application built with Node.js, Express, and SQLite. It allows users to register, log in, add income/expense transactions, and view them in a professional web interface.

## Features

- User authentication (register/login with JWT)
- Add and view financial transactions (income/expense)
- Responsive frontend with table-based transaction display
- Color-coded transactions (green for income, red for expense)
- SQLite database for local data storage

## Technologies Used

- **Backend**: Node.js, Express.js, SQLite3, bcrypt, jsonwebtoken
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Database**: SQLite
- **Version Control**: Git

## Prerequisites

- Node.js (v14 or higher)
- npm
- Git

## Installation and Setup

1. **Clone the repository**:
   ```
   git clone https://github.com/nafisatou/finance-record.git
   cd finance-record
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up the database**:
   ```
   npm run migrate
   ```

4. **Start the development server**:
   ```
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5000` to access the app.

## Usage

1. **Register**: Create a new account with username, email, and password.
2. **Login**: Use your email and password to log in.
3. **Add Transactions**: Enter type (income/expense), category, amount, description, and date.
4. **View Transactions**: See all transactions in a table format.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/transactions` - Add a new transaction
- `GET /api/transactions` - Get all transactions

## Project Structure

```
finance-tracker/
├── public/
│   └── index.html          # Frontend UI
├── src/
│   ├── config/
│   │   └── database.js     # Database configuration
│   ├── controllers/
│   │   ├── authController.js
│   │   └── transactionController.js
│   ├── migrations/
│   │   └── create_users_table.sql  # Database schema
│   ├── models/
│   │   ├── user.js
│   │   └── transaction.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── transactionRoutes.js
│   ├── __tests__/
│   │   └── transaction.test.js
│   ├── app.js              # Main server file
│   └── migrate.js          # Migration script
├── .gitignore
├── package.json
└── README.md
```

## Development Process (Step-by-Step)

This app was built iteratively with the following steps:

1. **Project Initialization**:
   - Created Node.js project with `npm init`
   - Installed Express, body-parser, CORS, and other dependencies

2. **Backend Setup**:
   - Set up Express server with basic routes
   - Initially configured PostgreSQL, but encountered connection issues

3. **Database Switch**:
   - Switched to SQLite for easier local development
   - Updated database config, models, and migration script

4. **Authentication**:
   - Implemented user registration and login with bcrypt and JWT
   - Created auth routes and controller

5. **Transaction Management**:
   - Built transaction model with CRUD operations
   - Added routes for adding and viewing transactions

6. **Frontend Development**:
   - Created HTML page with forms for auth and transactions
   - Added JavaScript for API calls and dynamic UI updates
   - Enhanced with professional table layout and styling

7. **Version Control**:
   - Initialized Git repository
   - Added .gitignore for sensitive files
   - Pushed to GitHub for version control

## Maintenance

- **Backups**: Regularly backup the `finance_tracker.db` file
- **Updates**: Run `npm audit` to check for vulnerabilities
- **Testing**: Use `npm test` for existing tests
- **Deployment**: For production, consider hosting on Heroku or similar platforms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is for personal use.

## Acknowledgments

Built with guidance from AI assistance for learning Node.js and full-stack development.
