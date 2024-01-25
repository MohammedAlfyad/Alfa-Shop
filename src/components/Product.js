import { driver } from "driver.js";
import { AnimatePresence, motion } from "framer-motion";
import "driver.js/dist/driver.css";
import '../css/Product.css'
import { Link } from 'react-router-dom';
function Product (props) {
   const cardTour = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
          {  popover: { title: 'Title', description: props.product.title } },
          {  popover: { title: 'Category', description: props.product.category } },
          {  popover: { title: 'Price', description: `${props.product.price} $` } },
          {  popover: { title: 'Rate', description: props.product.rating?.rate || "N/A" } },
          {  popover: { title: 'Count', description: props.product.rating?.count || "N/A" } },
        ]
      });    
      driverObj.drive();
   }
    return (
        <>
        <AnimatePresence>
        <motion.div layout
            initial={{ transform: "scale(0.4)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", damping: 8, stiffness: 50 }} 
            key={props.product.id}
            className="card">
            <h1 className='title'> {props.product.title} </h1>
            <img className='img' src={props.product.image} alt=""/>
            <h3 className='category'> {props.product.category} </h3>
            <Link className='details btn btn-primary' to={`/product/${props.product.id}`}> Details </Link>
            <div className="card-driver" onClick={cardTour}> ? </div>
        </motion.div>
        </AnimatePresence>
        </>
    )
}
export default Product;