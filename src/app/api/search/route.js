export const runtime = "nodejs";


import { duckDuckGoSearch } from "./providers/duckduckgo";

// Change this later to "bing", "brave", "custom"
const ACTIVE_PROVIDER = "duckduckgo";

// Simple in-memory cache
const cache = new Map();
const CACHE_TTL = 60 * 1000; // 60 seconds

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return Response.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  // ----- CACHE CHECK -----
  const cached = cache.get(query);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL) {
    return Response.json({
      source: "cache",
      results: cached.results,
    });
  }

  let results = [];

  // ----- PROVIDER DISPATCH -----
  switch (ACTIVE_PROVIDER) {
    case "duckduckgo":
      results = await duckDuckGoSearch(query);
      break;

    // case "bing":
    //   results = await bingSearch(query);
    //   break;

    // case "brave":
    //   results = await braveSearch(query);
    //   break;

    // case "custom":
    //   results = await customCrawlerSearch(query);
    //   break;

    default:
      return Response.json(
        { error: "Invalid search provider" },
        { status: 500 }
      );
  }

  // ----- STORE IN CACHE -----
  cache.set(query, {
    results,
    timestamp: now,
  });

  return Response.json({
    source: ACTIVE_PROVIDER,
    results,
  });
}
