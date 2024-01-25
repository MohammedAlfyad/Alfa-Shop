import Product from "./Product";
import '../css/Product.css'
import { useState , useEffect } from "react";
import Select from 'react-select';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import ScrollToTop from 'react-scroll-to-top';
const ProductList = () => {
    const [productdata,setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); 
    const options = [
        { value: "All", label: "All" },
        { value: "men's clothing", label: "Men's Clothing" },
        { value: "women's clothing", label: "Women's Clothing" },
        { value: 'electronics', label: 'Electronics' },
        { value: 'jewelery', label: 'Jewelery' },
    ];

    const handleSelect = selectedOption => {
        setSelectedCategory(selectedOption.value);
    };
    useEffect(() => {
        fetch('http://localhost:9000/productsdata').then((response) => response.json()).then((data) => setProduct(data) )
    },[]);
    
    const filteredProducts = selectedCategory === 'All'
        ? productdata
        : productdata.filter(product => product.category === selectedCategory);

    const products = filteredProducts.map(product => (
        <Product key={product.id} product={product} />
    ));
    const PageTour = () => {
        const driverObj = driver({
            showProgress: true,
            steps: [
                { element: '.logo', popover: { title: 'Shop Logo', description: 'This site is dedicated to engineer Mohammed Al-Fayad and this is his trademark' } },
                { element: '.home', popover: { title: 'Home', description: 'Click here to go to the home page' } },
                { element: '.prod', popover: { title: 'Products', description: 'Click here to see all products' } },
                { element: '.abo', popover: { title: 'About US', description: 'Click here to learn information about our store' } },
                { element: '.con', popover: { title: 'Contact', description: 'Click here to send us your feedback or any issue you encountered' } },
                { element: '.loge', popover: { title: 'Log Out', description: 'Click here to leave the site' } },
                { element: '.select', popover: { title: 'Select', description: 'Click here to view just the type of product you need' } },
                { element: '.details', popover: { title: 'Details', description: 'Click here to see all the details of the product you need' } },
              ]
          });    
          driverObj.drive();
       }
    return (
        <>
        <h1 className="contact"> Our Products </h1>
            <div className="product">
                <Select
                    options={options}
                    className="select"
                    isClearable
                    placeholder="Select a category"
                    value={{ value: selectedCategory, label: selectedCategory }} 
                    onChange={handleSelect}
                />
                <div className="row">{products}</div>
                <div className="page-driver" onClick={PageTour}> ? </div> 
                <ScrollToTop smooth top= "20" className="scroll"/>
            </div>
        </>
    );
};

export default ProductList;
