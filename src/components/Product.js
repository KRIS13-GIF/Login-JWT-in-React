import React from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";


function Product({product}){

    const { id, id2 } = useParams();
    const showConsultLink = product.accept && !product.process;
    return(
    <>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.id}</Card.Subtitle>
        <Card.Text>
         {product.description}
        </Card.Text>
        {showConsultLink &&
        <Card.Link href={`/user/consult/${id}/${id2}`}>Consult</Card.Link>
      }  </Card.Body>
    </Card>
    
    </>
    )



}



export default Product;