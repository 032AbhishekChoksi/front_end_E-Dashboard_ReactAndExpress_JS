import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(() => {       
        getProductDetails();
        // eslint-disable-next-line
    },[]);

    const getProductDetails = async () =>{
        // console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        console.warn(name, price, category, company)
    }

    return (
        <div className="product">
            <h1>Update product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input className="inputBox" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input className="inputBox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button onClick={updateProduct} type="button" className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;