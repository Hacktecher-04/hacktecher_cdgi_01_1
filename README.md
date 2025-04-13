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

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   SECRETE_KEY=<your_secret_key>
   ```

4. Start the backend server:
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
