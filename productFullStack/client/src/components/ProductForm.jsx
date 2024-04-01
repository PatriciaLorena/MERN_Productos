import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'

const ProductForm = () => {
    const initialValues = {
        title: '',
        price: '',
        description: ''
    }

    const {values: product, handleChange,clearData} = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:80/api/product', product)
            .then(res => {
                console.log(res)
                clearData()
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste un producto",
                    
                  });
                setError("")
            })
            .catch(err=> {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
    <div className="text-danger">{error}</div>
    <div className="container">
        <div className="row justify-content-center mt-3">
            <div className="col-md-4 navbar navbar-expand-lg bg-body-tertiary">
                <label className="m-2 custom-title-label">Title:</label>
                <input type="text" className="form-control form-control-sm m-2" name="title" value={product.title} onChange={handleChange} />
            </div>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-md-4 navbar navbar-expand-lg bg-body-tertiary">
                <label className="m-2 custom-title-label">Price:</label>
                <input type="number" className="form-control form-control-sm m-2" name="price" value={product.price} onChange={handleChange} />
            </div>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-md-4 navbar navbar-expand-lg bg-body-tertiary">
                <label className="m-2 custom-title-label">Description:</label>
                <input type="text" className="form-control form-control-sm m-2" name="description" value={product.description} onChange={handleChange} />
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <button type="submit" className="btn btn-primary mt-3">Create</button>
            </div>
        </div>
    </div>
</form>


        
    )
}

export default ProductForm