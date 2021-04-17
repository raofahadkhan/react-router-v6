import React from "react";
import { useParams } from "react-router";

function Product() {
	const { productId } = useParams();
	return <div>hello product {productId}</div>;
}

export default Product;
