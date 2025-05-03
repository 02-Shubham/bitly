"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-green-600 mb-6">About This Project</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">💻 Frontend</h2>
        <p className="text-lg">
          The frontend is built using <strong>Next.js</strong> with <strong>Tailwind CSS</strong> for styling.
          I started by creating a responsive layout including a navigation bar and a simple landing page with inputs for long and short URLs.
          The UI is fully responsive and includes a mobile hamburger menu. All components are client-side, with state handled using React's <code>useState</code> hook.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Backend</h2>
        <p className="text-lg">
          For the backend, I created API routes in Next.js (using the <code>app/api</code> directory). When a user submits a long URL and a preferred short name, the API checks for conflicts and then stores the mapping in a database.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📦 Database</h2>
        <p className="text-lg">
          I used <strong>MongoDB</strong> as the database to store the long and short URL mappings. For connection, I used <code>Mongoose</code> for schema creation and database queries.
          MongoDB Atlas was used for cloud hosting to make deployment easy and secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚀 Deployment</h2>
        <p className="text-lg">
          The app is deployed using <strong>Vercel</strong>, which is well-suited for Next.js applications. Environment variables like the MongoDB URI were securely added to Vercel for the backend to function properly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔗 URL Shortening Logic</h2>
        <p className="text-lg">
          When a user enters a URL and a short code, the backend checks MongoDB to ensure it's unique. If it's available, it's saved and can be accessed later using the short link.
          Visiting the short link automatically redirects the user to the original long URL.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10">© 2025 Your Name — Built with ❤️ and JavaScript</p>
    </div>
  );
};

export default AboutPage;
