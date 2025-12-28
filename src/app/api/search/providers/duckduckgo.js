export async function duckDuckGoSearch(query) {
  if (!query) return [];

  const searchUrl =
    "https://duckduckgo.com/html/?q=" +
    encodeURIComponent(query);

  const response = await fetch(searchUrl, {
    headers: {
      // Important: behave like a normal browser
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept-Language": "en-US,en;q=0.9",
    },
    cache: "no-store",
  });

  const html = await response.text();

  const results = [];

  /**
   * DuckDuckGo HTML structure:
   * <a class="result__a" href="...">Title</a>
   * <a class="result__snippet">Snippet</a>
   */

  const resultRegex =
    /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>[\s\S]*?<a[^>]*class="result__snippet"[^>]*>(.*?)<\/a>/g;

  let match;

  while ((match = resultRegex.exec(html)) !== null) {

    // const url = decodeURIComponent(match[1]);
    const rawUrl = match[1];
    const realUrl = extractRealUrl(rawUrl);


    const title = stripHtml(match[2]);
    const snippet = stripHtml(match[3]);

    const domain = new URL(realUrl).hostname;

    results.push({
      title,
      url:realUrl,
      snippet,
      favicon: `https://www.google.com/s2/favicons?sz=64&domain=${domain}`,
    });

    // Limit results (important for safety)
    if (results.length >= 20) break;
  }

  return results;
}

// Utility to remove HTML tags
function stripHtml(text) {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractRealUrl(ddgUrl) {
  try {
    const parsed = new URL(ddgUrl, "https://duckduckgo.com");
    const real = parsed.searchParams.get("uddg");
    return real ? decodeURIComponent(real) : ddgUrl;
  } catch {
    return ddgUrl;
  }
}











