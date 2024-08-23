import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import css from "./product.module.scss";
import Container from "../../components/organisms/container";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({
    _id: "66c67feb78c88f89d93654c4",
    id: 70709795,
    image: "https://savegnago.vteximg.com.br/arquivos/ids/293238_2",
    name: "Borracha Escolar Faber Castell Super Soft",
    categories: "Bazar E Utilidades",
    price: 5.39,
    brand: "Faber Castell",
    __v: 0,
  });

  return (
    <Container className={css.productPage}>
      <img
        src={product.image}
        alt={product.name}
        className={css.productImage}
      />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => router.back()} className={css.backButton}>
        Go Back
      </button>
    </Container>
  );
};

export default ProductPage;
