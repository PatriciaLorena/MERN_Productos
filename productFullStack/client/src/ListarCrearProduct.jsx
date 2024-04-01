import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function ListarCrearProduct() {
    return (
        
            <div className="container text-center">
                <h3 className='mt-5'>Product Manager</h3>
                <ProductForm />
                <hr />
                <h3 className='mt-5'>Product list</h3>
                <ProductList />
                
            </div>
        
    );
}

export default ListarCrearProduct;



