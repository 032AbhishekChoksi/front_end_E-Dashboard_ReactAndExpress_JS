import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
         // eslint-disable-next-line
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        // console.warn(id);
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'delete'
        });
        result = await result.json();
        if(result){
            getProducts();
            alert('Record is deleted')
        }        
    }
    
    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>₹ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <Link to={"/update/"+item._id}>Update</Link>&nbsp;
                            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}

export default ProductList;