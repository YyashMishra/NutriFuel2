import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { Suspense, lazy } from "react";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

const App = () => {
  return (
    <Router>
      {/* Wrap routes in Suspense to handle loading states */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
