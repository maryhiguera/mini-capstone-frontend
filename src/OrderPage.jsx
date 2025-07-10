import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function OrderPage() {
  const [orders, setOrders] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/orders.json").then((response) => {
      console.log("Orders:", response.data);
      setOrders(response.data);
    }).catch((error) => {
      console.error("Error fetching orders:", error);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Your Orders</h1>
      
      <p>You have {orders.length} orders</p>
      
      {orders.map((order) => (
        <div key={order.id}>
          <hr />
          <h3>Order #{order.id}</h3>
          <p>Subtotal: ${order.subtotal}</p>
          <p>Tax: ${order.tax}</p>
          <p>Total: ${order.total}</p>
          
          <h4>Products Ordered:</h4>
          {order.carted_products.map((product) => (
            <div key={product.id}>
              <p>{product.product.name}</p>
              <p>Price: ${product.product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
          
        </div>
      ))}
      
      <p><Link to="/">Back to Products</Link></p>
    </main>
  );
} 