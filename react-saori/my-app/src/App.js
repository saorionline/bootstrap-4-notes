import { HashRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { Blogpage } from "./blogpage";
import { Contactpoint } from "./contactpoint";
import { Sitemap } from "./sitemap";
import { Blendpage } from "./pages/blend";
import { Singleorigin } from "./pages/single";
import { Kit } from "./pages/kit";
import { Coldbred } from "./pages/coldbred";
import { Barista } from "./pages/barista";



function App() {
  return (
    <>
      <HashRouter>
        <Sitemap />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/pages/blend" element={<Blendpage/>}/>
          <Route path="/pages/single" element={<Singleorigin/>}/>
          <Route path="/pages/kit" element={<Kit/>}/>
          <Route path="/pages/coldbred" element={<Coldbred/>}/>   
          <Route path="/pages/barista" element={<Barista/>}/>                 
          <Route path="/blogpage" element={<Blogpage/>}/>
          <Route path="/contactpoint" element={<Contactpoint/>}/>
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
