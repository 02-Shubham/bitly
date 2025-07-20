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
        seturl("");
        setShortUrl("");
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);

        console.log(result);
        alert(result.message);
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
          No account required — sign up to track your links.
        </p>

      </div>
    </div>
  );
}
