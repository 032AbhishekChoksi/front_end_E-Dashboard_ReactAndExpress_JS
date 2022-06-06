import React, { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    // console.warn(products);

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>₹ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList;