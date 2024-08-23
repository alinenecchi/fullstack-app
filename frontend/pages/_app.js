import "../utils/styles/App.scss";
import "../utils/styles/reset.scss";
import Layout from "../utils/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// import React, { useEffect } from "react";

// import Layout from "../utils/layout";

// import "../utils/styles/reset.scss";

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     // Código de inicialização, por exemplo, configuração de Google Analytics
//     if (typeof window !== "undefined") {
//       // Aqui você pode colocar o código do Google Analytics
//       console.log("Google Analytics setup here.");
//     }
//   }, []);
//   return (
//     (
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     ),
//     { pageProps }
//   );
// }

// export default MyApp;
