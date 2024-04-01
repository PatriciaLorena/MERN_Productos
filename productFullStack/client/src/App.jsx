import { Route, Routes } from 'react-router-dom';
import ListarCrearProduct from './ListarCrearProduct';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<ListarCrearProduct />} />
        <Route path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App