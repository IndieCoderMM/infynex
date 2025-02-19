# Infynex - Next.js SaaS Starter

Infynex is a Next.js starter template packed with everything you need to build SaaS applications. It includes a landing page, dashboard, authentication, and database setup out of the box.

## Features

- 🚀 **Next.js 15** – Latest version for fast and scalable applications.
- 🎨 **Tailwind CSS** – Pre-configured with utility-first styling.
- 🔐 **Clerk Authentication** – Seamless user auth with Clerk.
- 📦 **Drizzle ORM + PostgreSQL** – Type-safe and modern database setup.
- 📊 **Shadcn UI Components** – Elegant and accessible UI components.

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/indiecodermm/infynex.git
cd infynex
```

### 2. Install Dependencies

```
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file and add the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
CLERK_SECRET_KEY=
DB_URL=
```

### 4. Database Setup

Generate and apply migrations with Drizzle ORM:

```
npm run db:generate
npm run db:migrate
```

### 5. Run the Development Server

```
npm run dev
```

The app will be available at `http://localhost:3000`

## Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Build the application for production.
- `npm run start` – Start the production server.
- `npm run lint` – Run ESLint for code quality checks.
- `npm run db:generate` – Generate Drizzle ORM schema.
- `npm run db:migrate` – Run database migrations.

## Deployment

Infynex is ready for deployment on Vercel, Railway, or any platform that supports Next.js.

### Deploy to Vercel

```
npm install -g vercel
vercel
```

## License

MIT License. Feel free to use and modify Infynex for your projects!
