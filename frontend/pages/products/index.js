import React from "react";
import CardList from "../../components/molecules/card-list";
import Section from "components/atoms/section";


import css from "./product.module.scss";

export async function getStaticProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/getProductsAll`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    console.log(process.env.NEXT_PUBLIC_API_URL);

    const products = await response.json();

    return {
      props: { products },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: { products: [] },
    };
  }
}

function ProductsPage({ products, ...props }) {
  const { className = "" } = props;
  return (
    <Section className={`${css["page-products"]} ${className}`}>
      <h1>Lista de produtos</h1>
      <CardList data={products} />
    </Section>
  );
}

export default ProductsPage;
