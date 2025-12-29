

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../styles/search.css";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results || []);
        setLoading(false);
      });
  }, [query]);






  return (
      <div className="search-page">
      {/* Top search bar */}
        <form action="/search" className="top-search">
        <input
          type="text"
          name="q"
          defaultValue={query}
          className="search-input"
          />
        </form>

        {/* Tabs */}
        <div className="tabs">
          <span className="tab active">All</span>
          <span className="tab disabled">Images</span>
          <span className="tab disabled">Web</span>
        </div>

        {/* Results */}
        <div className="results">
        {loading && <p className="status-text">Searching...</p>}

        {!loading && results.length === 0 && (
          <p className="status-text">No results found.</p>
        )}

      



          {results.map((item, index) => (

            <div key={index} className="result-item">

            {/* Row 1: favicon + site URL */}
            <div className="result-header">
            <img
            src={item.favicon}
            alt=""
            className="favicon"
            onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="result-url">
            {new URL(item.url).hostname}
            </span>
            </div>

          {/* Row 2: title */}
          <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="result-title-link"
          >
          <h3 className="result-title">{item.title}</h3>
          </a>

          {/* Row 3: snippet */}
          {/* <p className="result-snippet">{item.description}</p>/ */}
          <p className="result-snippet">{item.snippet}</p>

          </div>
          ))}




      </div>
    </div>

  );
}
