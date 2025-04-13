This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Backend Setup

This project includes a backend server built with Node.js and Express. Follow these steps to set up the backend:

1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

The backend server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints

### User Authentication
- **POST** `/api/auth/register` - Register a new user.
- **POST** `/api/auth/login` - Log in an existing user.
- **GET** `/api/auth/logout` - Log out the user.

### Recipe Recommendations
- **POST** `/api/recipe/recommendation` - Get AI-powered recipe recommendations based on ingredients.

## Frontend and Backend Integration

Ensure both the frontend and backend servers are running simultaneously. The frontend communicates with the backend at `http://localhost:5000`.

