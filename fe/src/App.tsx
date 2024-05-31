import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [noLayout, setNoLayout] = useState<boolean>(false);
  const pagesWithoutLayout = ["/admin"];
  const route = routes.find((route) => route.path === window.location.pathname);
  console.log(route);
  // useEffect(() => {
  //   pagesWithoutLayout.filter((page) => {
  //     if (page === route!.path) {
  //       setNoLayout(true);
  //     } else {
  //       setNoLayout(false);
  //     }
  //   });
  // }, []);

  return (
    <Router>
      {!noLayout && <Header />}
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={<route.element />} />
          );
        })}
      </Routes>
      {!noLayout && <Footer />}
    </Router>
  );
}

export default App;
