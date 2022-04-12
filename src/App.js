import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/page-cta" element={<PageCTA />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  );
}

export default App;
