import React, { useEffect, useState } from "react";
import axios from "axios";
import Product2 from "../components/Product2";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    axios
      .get("http://localhost:5004/api/v1/acceptance/products", { headers })
      .then((response) => {
        // Update the state with the retrieved products
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, idx) => (
          <Product2 key={idx} product={product}></Product2>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
