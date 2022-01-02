import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const handleAddProduct = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        console.log(name, price, quantity);
        const newProduct = { name, price, quantity };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully');
                    e.target.reset();
                }
            })

        console.log('product')
        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Add Product</h2>

            <form onSubmit={handleAddProduct}>
                <input type="text" ref={nameRef} placeholder="Name" />
                <input type="text" ref={quantityRef} placeholder="Quantity" />
                <input type="text" ref={priceRef} placeholder="Price" />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;