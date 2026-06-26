# Loan Management System (LMS)

A full-stack Loan Management System built with the MERN stack and Next.js.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt

## Folder Structure

- `/client`: Next.js frontend application.
- `/server`: Express.js backend API.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd loan-management-system
   ```

2. Install dependencies for root, client, and server:
   ```bash
   npm run install:all
   ```

3. Set up environment variables:
   - Copy `server/.env.example` to `server/.env` and fill in the values.
   - Copy `client/.env.example` to `client/.env.local` and fill in the values.

### Running the Application

To run both client and server concurrently:
```bash
npm run dev
```

The client will be running at `http://localhost:3000` and the server at `http://localhost:5000`.

## License

ISC