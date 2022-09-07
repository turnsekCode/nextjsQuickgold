import "../styles/globals.css";
import Layout from "../componentes/layout/Layout";

/*export function reportWebVitals(metric) {
  console.log(metric);
}*/

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
