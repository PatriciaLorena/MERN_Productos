import React from 'react';
import { Link } from 'react-router-dom';
import useAxios from "../hooks/useAxios";

const ProductList = () => {
    const { data, isLoading, error } = useAxios("http://127.0.0.1:80/api/product");

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    const { products } = data;

    return (
        <div className="container">
            <ul className="list-group">
                {products.map(product => (
                    <li key={product._id} className="list-group-item border-0">
                        <Link to={`/product/${product._id}`} className="product-link">
                            <span className="text-dark">{product.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;


