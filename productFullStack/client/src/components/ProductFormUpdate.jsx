import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom"

const ProductFormUpdate = () => {
    const { id } = useParams();
    const navegate = useNavigate();
    const initialValues = {
        title: 'Cargando...',
        price: 0,
        description: 'Cargando...',
    }

    const { values: products, handleChange, setValues } = useForm(initialValues)

    useEffect(() => {
        axios.get(`http://127.0.0.1:80/api/product/${id}`)
            .then(res => {
                console.log(res.data.products)
                setValues({
                    title: res.data.products.title,
                    price: res.data.products.price,
                    description: res.data.products.description
                })

            })
            .catch(err => console.log(err))
            
    }, []);

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://127.0.0.1:80/api/product/${id}`, products)
            .then(res => {
                console.log(res.data.products)
                Swal.fire({
                    icon: "success",
                    title: "Actualizado!",
                    text: "Actualizaste una persona",

                });
                navegate("/")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div>
                <label className="mt-3">First Name:</label>
                <input type="text" className="form-control" name="title" value={products.title} onChange={handleChange} />
            </div>
            <div>
                <label className="mt-3">Age:</label>
                <input type="number" className="form-control" name="price" value={products.price} onChange={handleChange} />
            </div>
            <div>
                <label className="mt-3">Last Name:</label>
                <input type="text" className="form-control" name="description" value={products.description} onChange={handleChange} />
            </div>
            
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            <button type="button" className="btn btn-danger mt-3 ms-3" onClick={()=>navegate("/")}>Cancel</button>
            
        </form>

    )
}

export default ProductFormUpdate