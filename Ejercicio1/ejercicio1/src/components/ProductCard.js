import React from "react";

const ProductCard = props => (
  <>
    <h1>Producto: {props.info.name} </h1>
    <p>Costo: $ {props.info.price} </p>
    <p>Descripción: {props.info.description} </p>
    <hr></hr>
  </>
);

export default ProductCard;
