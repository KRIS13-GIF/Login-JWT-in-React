import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";

function Product2({ product }) {
  const [isAccepted, setIsAccepted] = useState(product.accept);
  const [fileNameInput, setFileNameInput] = useState("");

  const handleAcceptance = async () => {
    try {
      const token = localStorage.getItem("token");

      // Pass the fileName as part of the request body
      const requestBody = {
        fileName: fileNameInput,
      };

      const response = await axios.post(
        `http://localhost:5004/api/v1/acceptance/product/${product.id}`,
        requestBody, // Send the fileName in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsAccepted(true);

      console.log("Product accepted:", response.data);
    } catch (error) {
      console.error("Error accepting product:", error);
    }
  };

  const handleFileNameChange = (e) => {
    setFileNameInput(e.target.value);
  };

  return (
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Body>
          <Card.Title>{product.brand}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.id}</Card.Subtitle>
          <Card.Text>
            {product.description}
          </Card.Text>
          {!isAccepted && (
            <>
              <label>
                File Name:
                <input
                  type="text"
                  value={fileNameInput}
                  onChange={handleFileNameChange}
                />
              </label>
              <br />
              <button onClick={handleAcceptance}>Accept</button>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Product2;
