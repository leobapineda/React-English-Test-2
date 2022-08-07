// import React from "react";
// // import Setup from "./tutorial/9-custom-hooks/final/1-fetch-example";
// import Setup from "./tutorial/11-react-router/setup";

// function App() {
//   return (
//     <>
//       <Setup />
//     </>
//   );
// }
// export default App;

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import NotFound from "./pages/NotFound";
;

function App() {
  console.log("render");
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/books">books</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
