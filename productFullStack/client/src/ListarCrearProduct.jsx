import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { useState } from 'react';
function ListarCrearProduct() {
    const [products, setProducts] = useState(null);
    const updateProducts = (product) =>{
        setPersons([...products, product])
    
    }
    return (
        
            <div className="container text-center">
                <h3 className='mt-5'>Product Manager</h3>
                <ProductForm updateProducts={updateProducts}/>
                <hr />
                <h3 className='mt-5'>Product list</h3>
                <ProductList products={products} setProducts={setProducts}/>
                
            </div>
        
    );
}

export default ListarCrearProduct;



