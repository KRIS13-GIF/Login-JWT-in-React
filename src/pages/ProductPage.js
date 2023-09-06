import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";


function ProductPage(){

    const [products, setProducts] = useState([]);
    const { id } = useParams();

     

    useEffect(() => {
        getUsers();
      }, []);

    const getUsers = () => {

        const token=localStorage.getItem('token')

        const headers={
            'Authorization':`Bearer ${token}`
        }
        console.log(token)

       

        axios
          .get(`http://localhost:5004/api/v1/user/products/${id}`, {headers})
          .then((response) => {
            console.log(response);
            setProducts(response.data);
            console.log("product: ", response.data);
          })
          .catch((error) => {
            if (error.response) {
              console.error("Server Error:", error.response.data);
            } else if (error.request) {
              console.error("Network Error:", error.request);
            } else {
              console.error("Error:", error.message);
            }
          ;
      });
    }

      return(
        <>
        <h1>Product page</h1>

        {
            products.map((product, idx)=>(
                <Product key={idx} product={product}></Product>
            ))
        }

        </>
      )


}

export default ProductPage;