import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function ProductPage(){

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
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
            setUsers(response.data);
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

        </>
      )


}

export default ProductPage;