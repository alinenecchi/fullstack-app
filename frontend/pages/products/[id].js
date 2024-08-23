import React from "react";
import { useRouter } from "next/router";
import css from "./product.module.scss";
import Section from "components/atoms/section";
import Button from "components/atoms/button";
import Title from "components/atoms/title";

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Section className={css["product-page"]}>
      <Title level={1} className={css["product-title"]}>
        {product.name}
      </Title>
      <img
        src={product.image}
        alt={product.name}
        className={css["product-image"]}
      />
      <p className={css["product-price"]}>Price: ${product.price}</p>
      <p className={css["product-brand"]}>Brand: {product.brand}</p>
      <p className={css["product-category"]}>Category: {product.categories}</p>

      <Button onClick={() => router.back()} className={css["back-button"]}>
        Go Back
      </Button>
    </Section>
  );
};

// Fetching the product data on the server side using your API route
export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/getProductId?id=${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}

export default ProductPage;
