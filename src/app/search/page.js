import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="search-page">Loading search…</div>}>
      <SearchClient />
    </Suspense>
  );
}
