import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";
import SupplierPage from "./effect/SupplierPage";
import EffectCleanUp from "./effect/EffectCleanUp";
import DependenctSample from "./effect/DependenctSample";
import DependenctSample2 from "./effect/DependenctSample2";

function App() {

  return <DependenctSample2 />


  return (
    <>
      <ul style={{display:"flex", justifyContent:'space-between'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/effect-clean">Effect Clean Up</Link></li>
        <li><Link to="/suppliers">Suppliers</Link></li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/blog/:id" element={<BlogDetail/>} />
        <Route path="/suppliers" element={<SupplierPage/>} />
        <Route path="/effect-clean" element={<EffectCleanUp/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <hr />
      <h3>Site Footer</h3>
    </>
  );
}

export default App;
