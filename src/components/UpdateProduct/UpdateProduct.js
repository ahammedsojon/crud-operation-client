import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateProduct = () => {
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedProduct = { name: updatedName, quantity: product.quantity, price: product.price };
        updatedProduct.name = updatedName;
        setProduct(updatedProduct);
    }
    const handleQuantityChange = e => {
        const updatedQuantity = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.quantity = updatedQuantity;
        setProduct(updatedProduct);
    }
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.price = updatedPrice;
        setProduct(updatedProduct);
    }

    const handleUpdateProduct = e => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Product updated successfully');
                    setProduct({});
                    history.push('/products');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <li>Name: {product.name} :: Quantity: {product.quantity} :: Price: {product.price}</li>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" onChange={handleNameChange} value={product.name || ''} placeholder="Name" />
                <input type="text" onChange={handleQuantityChange} value={product.quantity || ''} placeholder="Quantity" />
                <input type="text" onChange={handlePriceChange} value={product.price || ''} placeholder="Price" />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;