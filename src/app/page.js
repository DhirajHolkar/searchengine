// import styles from './page.module.css'
// import '../styles/Footer.css';

// export const metadata = {
//   title: "YourSearch – Simple Search Engine",
//   description: "Search the web with YourSearch, a fast and simple search engine",
// };

// export default function Home() {


//   return (
//     <>

//     <div className={styles.container}>
//       <img src="/protoncave-logo.png" alt="Logo" className={styles.logo} />

//       <form action="/search" method="GET" className={styles.searchForm}>
//         <input
//           type="text"
//           name="q"
//           className={styles.searchInput}
//           placeholder="Search..."
//           autoComplete="off"
//         />
//       </form>
//     </div>

//     </>
//   );
// }











"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [query, setQuery] = useState("");

  return (

    <>

    <div className={styles.container}>

      <img src="/protoncave-logo.png" alt="Logo" className={styles.logo} />

      <form action="/search" method="GET" className={styles.searchForm}>

        <div className={styles.searchWrapper}>

          <input
            type="text"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            placeholder="Search..."
            autoComplete="off"
          />

          {/* ❌ Clear icon */}
          {query && (
            <img
            src="/remove-icon.png"
            alt="Clear"
              className={styles.clearIcon}
              onClick={() => setQuery("")}
              />
            )}
        </div>

        {/* 🔍 Search button */}
        <button type="submit" className={styles.searchButton}>
          <img src="/search-icon.png" alt="Search" />
        </button>

      </form>

    </div>

    <div className={styles.informationText}>
      Welcome to ProtonCave.com a Search Engine for Fast, Quick Searches
    </div>

    </>

  );
}
