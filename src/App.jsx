import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";
import StateSample from "./stateSample/StateSample";

function App() {


  return <StateSample />;

  return (
    <>
      <ul style={{display:"flex", justifyContent:'space-between'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/blog/:id" element={<BlogDetail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <hr />
      <h3>Site Footer</h3>
    </>
  );
}

export default App;
