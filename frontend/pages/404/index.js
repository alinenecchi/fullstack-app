import React from "react";
import css from "./styles.module.scss";

export default function NotFoundPage(props) {
  const { children } = props;
  return (
    <div {...props}>
      <div className={css["content-container"]}>
        <div className={css["title-container"]}>
          <h1> "Opa! Esta página não existe",</h1>
        </div>

        <p className={css["description"]}>
          "A página não pode ser encontrada ou ocorreu um erro"
        </p>
      </div>
      {children}
    </div>
  );
}

export async function getStaticProps() {
  const fullPath = "/";
  const title = "Home";
  const description = "Home Page";
  const slug = "/";

  return {
    props: {
      fullpath: fullPath,
      title: title,
      description: description,
      slug: slug,
    },
  };
}
