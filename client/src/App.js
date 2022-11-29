import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/NavBar/Navbar'
import { Home } from './Pages/Home/Home'
import { Product } from './Pages/Product/Product'
import { Products } from './Pages/Products/Products'
const FourOFour = ()=>{
  return(
    <div>
    <h1>Sorry Page no foound...</h1>
    <Link to={'/'} >Home</Link></div>
  )
}
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<FourOFour />} path="*" />
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<Product />} path="/product/:id" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
