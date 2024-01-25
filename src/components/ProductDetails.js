import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/details.css"
function ProductDetails (){
    const api_url = "http://localhost:9000/productsdata";
    const [product,setProduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`).then((res) => res.json()).then((product) => setProduct(product));
    },[params.productId]);
    return (
        <>
        <h1 className="contact"> Product Details </h1>
        <div className="container">
            <div className="box-1">
                 <motion.img  
                 initial={{ transform: "scale(0)" }}
                 animate={{ transform: "scale(1.1)" }}
                 transition={{ damping: 6, type: "spring", stiffness: 100 }} className="image" src={product.image} alt=""/>
                 <button className='buy btn btn-primary'> Buy </button>
            </div>
            <div className="box-2">
            <div className="one">
                 <label htmlFor ={product.id} className="details-label"> Product Title: </label>
                 <textarea
                     name="message"
                     className="details-input Product-Title "
                     id = {product.id}
                     value = {product.title}
                     readOnly
                />
            </div>
            <div className="three">
                 <label htmlFor ={product.id} className="details-label"> Product Category: </label>
                 <input
                     type = "text"
                     className="details-input"
                     id = {product.id}
                     value = {product.category}
                     readOnly
                />
            </div>
            <div className="four">
                 <label htmlFor ={product.id} className="details-label"> Product Price: </label>
                 <input
                     type = "text"
                     className="details-input"
                     id = {product.id}
                     value = {`${product.price} $`}
                     readOnly
                />
            </div>
            <div className="five">
                 <label htmlFor ={product.id} className="details-label"> Product Rate: </label>
                 <input
                     type = "text"
                     className="details-input"
                     id = {product.id}
                     value={product.rating?.rate || "N/A"}
                     readOnly
                />
            </div>
            <div className="six">
                 <label htmlFor ={product.id} className="details-label"> Product Count: </label>
                 <input
                     type = "text"
                     className="details-input"
                     id = {product.id}
                     value={product.rating?.count || "N/A"}
                     readOnly
                />
            </div>
            </div>
            <div className="box-3">
                 <label htmlFor ={product.id} className="details-label"> Product Description: </label>
                 <textarea
                     name="message"
                     className="details-textarea"
                     id = {product.id}
                     value = {product.description}
                     readOnly
                />
            </div>
        </div>
        </>
    )
}
export default ProductDetails;