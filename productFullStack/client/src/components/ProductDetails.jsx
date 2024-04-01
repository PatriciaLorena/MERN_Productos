import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from "../hooks/useAxios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { data, isLoading, error } = useAxios(`http://127.0.0.1:80/api/product/${id}`);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    const { products } = data

    return (
        <div className="container mt-5 text-center">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {products ? (
                        <>
                            <h2>{products.title}</h2>
                            <p>Price: {products.price}</p>
                            <p>Description: {products.description}</p>
                        </>
                    ) : (
                        <h1>No product found</h1>
                    )}
                </div>
            </div>
        </div>
    );
};





export default ProductDetails;



