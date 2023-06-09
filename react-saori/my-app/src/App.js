import { HashRouter, Routes, Route } from "react-router-dom";
import { Sitemap } from "./sitemap";
import { AuthProvider, AuthRoute } from "./auth";
import { Profile } from "./profile";
import { Login } from "./login";
import { Logout } from "./logout";
import { Blendpage } from "./pages/blend";
import { Blendpost } from "./posts/blendpost";
import { Dashboard } from "./dashboard";
import { Blogpage } from "./blogpage";
import { Contactpoint } from "./contactpoint";
import { Singleorigin } from "./pages/single";
import { Kit } from "./pages/kit";
import { Coldbred } from "./pages/coldbred";
import { Barista } from "./pages/barista";



function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
        <Sitemap />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="pages/blend" element={<Blendpage/>}>
            <Route path=":slog" element={<Blendpost/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route 
            path="/logout" 
            element={
              <AuthRoute>
                <Logout/>
              </AuthRoute>
            }
          />
          <Route 
            path="/profile" 
            element={
              <AuthRoute>
                <Profile/>
              </AuthRoute>
            }
          />          
          <Route path="/pages/single" element={<Singleorigin/>}/>
          <Route path="/pages/kit" element={<Kit/>}/>
          <Route path="/pages/coldbred" element={<Coldbred/>}/>   
          <Route path="/pages/barista" element={<Barista/>}/>                 
          <Route path="/blogpage" element={<Blogpage/>}/>
          <Route path="/contactpoint" element={<Contactpoint/>}/>
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
