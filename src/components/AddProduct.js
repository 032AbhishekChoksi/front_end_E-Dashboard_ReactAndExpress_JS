import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);

    const addProduct = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        console.warn(name, price, category, company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn("User ID", userId);
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
    }

    return (
        <div className="product">
            <h1>Add product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input className="inputBox" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input className="inputBox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button onClick={addProduct} type="button" className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;