import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // 🔑 Bing Search API
  const BING_API_KEY = process.env.BING_API_KEY;
  const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(query)}`;

  const response = await fetch(endpoint, {
    headers: {
      "Ocp-Apim-Subscription-Key": BING_API_KEY
    }
  });

  const data = await response.json();

  // Normalize results (IMPORTANT)
  const results = (data.webPages?.value || []).map(item => ({
    title: item.name,
    url: item.url,
    description: item.snippet
  }));

  return NextResponse.json({ results });
}
