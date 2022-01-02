import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleUpdateProduct = id => {

    }

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Porduct deleted successfully');
                        const remainingProduct = products.filter(product => product._id !== id);
                        setProducts(remainingProduct);
                    }
                })
        }
    }
    return (
        <div>
            <h2>Products Available: {products.length}</h2>
            <ul>
                {
                    products.length !== 0 &&
                    products.map(product => <li key={product._id}>
                        Name: {product.name} :: Quantity: {product.quantity} :: Price: {product.price}
                        <Link to={`/products/update/${product._id}`}>
                            <button onClick={() => handleUpdateProduct(product._id)}>update</button>
                        </Link>
                        <button onClick={() => handleDeleteProduct(product._id)}>delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Products;