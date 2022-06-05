import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const addProduct = async () => {
        console.warn(name, price, category, company)
    }

    return (
        <div className="product">
            <h1>Add product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            <input className="inputBox" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" />
            <input className="inputBox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" />
            <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" />
            <button onClick={addProduct} type="button" className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;