import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/index.css';
import ProductList from './components/ProductList';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Slider from './components/Nav'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import AboutPage from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import Login from './components/login';
import AdminHeader from './components/AdminHeader';
import ProductManagement from './components/Product_Management';
import AddProduct from './components/AddProduct';
import Edit from './components/Edit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route
      path='/'
      element = {
        <>
        <Login/>
        </>
      }
      />
      <Route
      path='/adminHome'
      element = {
        <>
        <AdminHeader/>
        <ProductManagement />
        </>
      }
      />
      <Route
      path='/AddProduct'
      element = {
        <>
        <AdminHeader/>
        <AddProduct />
        </>
      }
      />
      <Route
      path='/home'
      element = {
        <>
        <Header/>
        <Slider/>
        <ProductList />
        </>
      }
      />
      <Route
      path='/products'
      element = {
        <>
        <Header/>
        <ProductList />
        </>
      }
      />
      <Route
      path='/About'
      element = {
        <>
        <Header/>
        <AboutPage/>
        </>
      }
      />
      <Route
      path='/Contact'
      element = {
        <>
        <Header/>
        <Contact/>
        </>
      }
      />
      <Route
      path='product/:productId'
      element = {
        <>
        <Header/>
        <ProductDetails/>
        </>
      }
      />
      <Route
      path='productManage/:productId'
      element = {
        <>
        <AdminHeader/>
        <ProductDetails/>
        </>
      }
      />
      <Route
      path='edit/:productId'
      element = {
        <>
        <AdminHeader/>
        <Edit/>
        </>
      }
      />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
