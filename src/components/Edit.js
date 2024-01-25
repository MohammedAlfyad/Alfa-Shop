import React from 'react';
import { useState , useEffect } from "react";
import '../css/add.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

function EditProduct() {
    const [formState, setFormState] = useState({
      category: '',
      title: '',
      description: '',
      price: 0,
      rate: 0,
      count: 0,
      image: '',
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:9000/productsdata/${params.productId}`)
        .then((res) => res.json())
        .then((product) => {
          setFormState(product);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, [params.productId]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success btn-swal",
          denyButton: "btn btn-danger btn-swal"
        },
        buttonsStyling: true
      });
      swalWithBootstrapButtons.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
        axios
        .put(`http://localhost:9000/productsdata/${params.productId}`, formState)
        .then((response) => {
          console.log('Data updated successfully:', response.data);
          Swal.fire({
            title: `Product updated successfully`,
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/adminHome');
            }
          });
        })
        .catch((error) => {
          console.error('Error updating data:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to update data. Please try again.',
            icon: 'error',
          });
        });
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      
    };
  
  return (
    <>
    <div className='addProduct'>
        <h1 className='add_title'> Edit Product Details </h1>
        {loading && <p>Loading...</p>}
        {!loading && (
        <Form className='add_form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Category">
        <Form.Label> Product Category </Form.Label>
        <Form.Control type="text" placeholder="Product Category" name='category' value={formState.category} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Title">
        <Form.Label>Product Title</Form.Label>
        <Form.Control type="text" placeholder="Product Title" name='title' value={formState.title} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" placeholder="Product Description" name='description' value={formState.description} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Price">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" placeholder="Product Price" name='price' value={formState.price} onChange={handleInputChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="Rate">
        <Form.Label>Product Rate</Form.Label>
        <Form.Control type="number" placeholder="Product Rate" name='rate' value={formState.rating?.rate || "N/A"} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Count">
        <Form.Label>Product Count</Form.Label>
        <Form.Control type="number" placeholder="Product Count" name='count' value={formState.rating?.count || "N/A"} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="url" placeholder="Product Image" name='image' value={formState.image} onChange={handleInputChange} />
      </Form.Group>
      <Button variant="primary edit_btn" type="submit">
        Save Change
      </Button>
        </Form>
        )}
    </div>
    </>
  );
};
export default EditProduct ;