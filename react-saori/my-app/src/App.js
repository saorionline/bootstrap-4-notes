import { HashRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Blogpage } from "./blogpage";
import { Contactpoint } from "./contactpoint";
import { Sitemap } from "./sitemap";



function App() {
  return (
    <>
      <HashRouter>
        <Sitemap />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/blogpage" element={<Blogpage/>}/>
          <Route path="/contactpoint" element={<Contactpoint/>}/>
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
