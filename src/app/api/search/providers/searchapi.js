export async function searchApiSearch(query) {
  if (!query) return [];

  const API_KEY = process.env.SEARCHAPI_API_KEY;

  if (!API_KEY) {
    console.error("Missing SEARCHAPI_API_KEY");
    return [];
  }

  const url =
    "https://www.searchapi.io/api/v1/search" +
    "?engine=google" +
    "&q=" + encodeURIComponent(query) +
    "&num=10";

  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Accept": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("SearchAPI error:", response.status);
    return [];
  }

  const data = await response.json();

  if (!data.organic_results) return [];

  return data.organic_results.map(item => {
    let domain = "";
    try {
      domain = new URL(item.link).hostname;
    } catch {}

    return {
      title: item.title,
      url: item.link,
      snippet: item.snippet || "",
      favicon: domain
        ? `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
        : "",
    };
  });
}
