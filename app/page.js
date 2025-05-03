"use client";
import React, { useState } from "react";
export default function Home() {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setShortUrl("")
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)

        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-4">
        Shorten Your Links Effortlessly
      </h1>
      <p className="text-gray-600 text-lg max-w-xl mb-8">
        Paste your long URLs below and get a short, shareable link in seconds.
        Fast, reliable, and simple to use.
      </p>

      {/* Input Section */}
      <div className="w-full max-w-xl flex flex-col items-center gap-4 mb-6">
        <input
          type="url"
          placeholder="Enter your long URL..."
          value={url}
          onChange={(e) => seturl(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
        <input
          type="text"
          placeholder="Enter your preferred short URL..."
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
        <button
          onClick={generate}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
        >
          Shorten URL
        </button>
      </div>

      {/* Shortened URL */}
      {generate && (
        <div className="mt-4 bg-green-50 border border-green-200 px-4 py-3 rounded-lg shadow max-w-xl w-full">
          <p className="text-green-700 font-medium">Shortened URL:</p>
          <a
            href={generated}
            className="text-green-800 underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            {generated}
          </a>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16">
        <p className="text-gray-600 mb-4">
          No account required, but you can sign up to track your links!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
          Create Free Account
        </button>
      </div>
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
    </div>
  );
}
