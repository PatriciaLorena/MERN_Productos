import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';



const ProductList = ({products, setProducts}) => {

    const deleteProduct = (productId) => {  
        Swal.fire({
            title: "Seguro que quieres eliminar?",
            text: "Estas a punto de eliminar un producto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:80/api/product/${productId}`)
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        icon: "success",
                        title: "Eliminado!",
                        text: "Eliminaste un producto",
                    });
                    setProducts(products.filter(product => product._id !== productId))
                })
            }
        });
        }


        const [isLoading, setIsloaging] = useState(true);
        useEffect(() => {
            axios
                .get("http://127.0.0.1:80/api/product")
                .then((response) => {
                    console.log(response.data.products)
                    setProducts(response.data.products);
                    setIsloaging(false);
                })
                .catch((error) => {
                    console.log(error)
                    setIsloaging(false);
                });
        }, [setProducts]);
    
        if (isLoading) {
            return <h1>Loading...</h1>
        }
/*
    const { data, isLoading, error } = useAxios("http://127.0.0.1:80/api/product");

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    const { products } = data;
*/
    return (
        <div className="container">
            <ul className="list-group">
                {products.map(product => (
                    <li key={product._id} className="list-group-item border-0">
                        <Link to={`/product/${product._id}`} className="product-link">
                            <span className="text-dark">{product.title}</span>
                        </Link>
                        <Link to={`/product/${product._id}/update`} className="btn btn-outline-warning btn-sm m-2">Actualizar</Link>
                        <button onClick={() => deleteProduct(product._id)} className="btn btn-outline-danger btn-sm">Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func
};

export default ProductList;

