import axios from "axios";
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ProductsIndex } from "./ProductsIndex"
import { useState, useEffect } from "react";


export function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  const handleIndex = () => {
    console.log("handleIndex")
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
  }




  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsIndex products={products}/> 
    </main>
  )
}