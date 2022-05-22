import "../styles/globals.css";
import Head from "next/head";
import Layout from "../containers/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hackaton</title>
				<meta
					content="width=device-width, initial-scale=1.0"
					name="viewport"
				/>
				<meta charSet="UTF-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
			</Head>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
}

export default MyApp;
