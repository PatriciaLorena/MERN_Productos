import { Route, Routes } from 'react-router-dom';
import ListarCrearProduct from './ListarCrearProduct';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductFormUpdate from './components/ProductFormUpdate';
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<ListarCrearProduct />} />
        <Route path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/product/:id/update" element={<ProductFormUpdate />}/>
    </Routes>
  )
}

export default App