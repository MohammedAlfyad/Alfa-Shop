import { useState , useEffect } from "react";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import '../css/Product.css'

function Management (){
    const [productdata,setProduct] = useState([]);
    useEffect(() => {
        getAllProduct()
    },[]);
    const getAllProduct = () => {
        fetch('http://localhost:9000/productsdata').then((res) => res.json()).then((product) => setProduct(product));
    }
    const deleteProduct = (product) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success btn-swal",
              cancelButton: "btn btn-danger btn-swal"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure to delete this Product?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((data) => {
        if (data.isConfirmed){
            swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
             });
            fetch(`http://localhost:9000/productsdata/${product.id}`,{
            method: 'DELETE',
            }).then((res) => res.json()).then((product) => {
            getAllProduct()
            })
            } else if (
                data.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire({
                  title: "Cancelled",
                  text: "Your imaginary file is safe :)",
                  icon: "error"
                });
              }
        })
    }
    return(
        <>
        <h1 className="contact"> Our Products </h1>
        <Link className="add btn btn-success btn-sm" to="/AddProduct"> Add Product </Link>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {productdata.map((product)=>{
                    return (
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.title}</td>
                    <td>{product.price}$</td>
                    <td>
                        <button className="butt btn btn-danger btn-sm" onClick={() => deleteProduct(product)}> Delete </button>
                        <Link className="butt btn btn-info btn-sm" to={`/productManage/${product.id}`}> View </Link>
                        <Link className="butt btn btn-primary btn-sm" to={`/edit/${product.id}`}> Edit </Link>
                    </td>
                </tr>
                )
                })}
            </tbody>
        </table>


        </>
    )
}
export default Management;