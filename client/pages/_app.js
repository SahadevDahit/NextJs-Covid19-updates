import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" lang="en" />
        <meta name="description" content="Covid 19 update" />
        <meta name="keywords" content="Covid 19,corona,nextjs corona" />
        <meta name="author" content="Sahadev Dahit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3816621514447660"
        crossOrigin="anonymous"
      ></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      ></link>
      <title>Covid 19 Updates</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
      ></link>
      <div className="main d-flex flex-column min-vh-100 overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
