import axios from "axios";
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ProductsIndex } from "./ProductsIndex"
import { NewProducts } from "./NewProducts"
import { useState, useEffect } from "react";


export function ProductsPage() {
  const [products, setProducts] = useState([]);
  
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




  useEffect(handleIndex, []);

  return (
    <main>
      <NewProducts onCreate={handleCreate}/>
      <ProductsIndex products={products}/> 
    </main>
  )
}