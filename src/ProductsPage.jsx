import axios from "axios";
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ProductsIndex } from "./ProductsIndex"
import { NewProducts } from "./NewProducts"
import { useState, useEffect } from "react";
import { Modal } from "./Modal"
import { ProductsShow } from "./ProductsShow"



export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  
  const handleIndex = () => {
    console.log("handleIndex")
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
  }

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
    });
  }

  const handleShow = (product) => {
    setIsProductsShowVisible(true); 
    setCurrentProduct(product);
  }

  const handleUpdate = (product, params, successCallback) => {
    axios.patch(`http://localhost:3000/products/${product.id}.json`, params).then((response) => {
      setProducts(products.map(p => p.id === response.data.id ? response.data : p));
      successCallback();
      setIsProductsShowVisible(false);
    });
  }

  const handleDestroy = (product) => {
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
      setProducts(products.map(p => p.id === response.data.id ? response.data : p ));
      successCallback();
      setIsProductsShowVisible(false); 
    });
  }




  useEffect(handleIndex, []);

  return (
    <main>
      <NewProducts onCreate={handleCreate}/>
      <ProductsIndex products={products} onShow={handleShow}/>
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow product={currentProduct} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </Modal> 
    </main>
  )
}