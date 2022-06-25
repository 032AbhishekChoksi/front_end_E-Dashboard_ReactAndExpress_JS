import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (willDelete) {
            // console.warn(id);
            let result = await fetch(`http://localhost:5000/product/${id}`, {
                method: 'delete',
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                swal({
                    title: "Delete Product",
                    text: "Deleted Successfully!",
                    icon: "success",
                });
                getProducts();

            } else {
                swal({
                    title: "Delete Product",
                    text: "Delete Product Fail!",
                    icon: "warning",
                    dangerMode: true
                });
            }

        } else {
            swal("Your product is safe!");
        }

    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result)
            }
            // if (result.length > 0) {
            //     setProducts(result)
            // }
            // else {
            //     alert('Product Not Found!')
            // }
        } else {
            getProducts();
        }
    }

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <input type="text" className="search-product-box" placeholder="Search Product" onChange={searchHandle} />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>₹ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <Link to={"/update/" + item._id}>Update</Link>&nbsp;
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                        </li>
                    </ul>
                )
                    : <h2>Product Not Found!</h2>
            }
        </div>
    )
}

export default ProductList;