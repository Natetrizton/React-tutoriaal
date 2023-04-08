import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";
import Bloglist from "./Bloglist"; 
import BlogDetails from "./BlogsDetails";
import NotFound from "./Notfound";
/* import NotFound from "./NotFound"; */

function App() {
    return (   
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="content">
                    <Routes>
                        
                        <Route
                           exact path="/"
                            element={<Home />}
                        /> 
                        <Route
                            path="/create"
                            element={<Create />}
                        />
                    
                         <Route
                            path="/blogs/:id"
                            element={<BlogDetails />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    
                    </Routes> 
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App