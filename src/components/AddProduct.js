import React from 'react';
import { useState } from "react";
import '../css/add.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import productsdata from '../db.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
function AddProduct (){
  const [category, setcategory] = useState('');
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState();
  const [rate, setrate] = useState();
  const [count, setcount] = useState();
  const [image, setimage] = useState(null);
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Validate input fields
    if (!category || !title || !description || !price || !rate || !count || !image) {
      alert('Please fill in all fields');
      return;
    }
    const newProduct = {
        id: (productsdata.productsdata.length + 1).toString(),
        title,
        price,
        description,
        category,
        image,
        rating: {
          rate,
          count,
        },
      };
      productsdata.productsdata.push(newProduct);
      axios.post("http://localhost:9000/productsdata" , {
        id: (productsdata.productsdata.length + 1).toString(),
        title,
        price,
        description,
        category,
        image,
        rating: {
          rate,
          count,
        },
      }).then((data) => { console.log(data);});
      Swal.fire({
        title: `Product Save successfully`,
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/adminHome');
        }
      });    // Clear the form fields
    setcategory('');
    settitle('');
    setdescription('');
    setprice();
    setrate();
    setcount();
    setimage(null);
  };

  return (
    <>
    <div className='addProduct'>
        <h1 className='add_title'> Enter Product Details </h1>
    <Form className='add_form' onSubmit={handleAddProduct}>
      <Form.Group className="mb-3" controlId="Category">
        <Form.Label> Product Category </Form.Label>
        <Form.Control type="text" placeholder="Product Category" value={category} onChange={(e) => setcategory(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Title">
        <Form.Label>Product Title</Form.Label>
        <Form.Control type="text" placeholder="Product Title" value={title} onChange={(e) => settitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" placeholder="Product Description" value={description} onChange={(e) => setdescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Price">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" placeholder="Product Price" value={price} onChange={(e) => setprice(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="Rate">
        <Form.Label>Product Rate</Form.Label>
        <Form.Control type="number" placeholder="Product Rate" value={rate} onChange={(e) => setrate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Count">
        <Form.Label>Product Count</Form.Label>
        <Form.Control type="number" placeholder="Product Count" value={count} onChange={(e) => setcount(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="url" placeholder="Product Image" value={image} onChange={(e) => setimage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
    </div>
    </>
  );
};
export default AddProduct ;