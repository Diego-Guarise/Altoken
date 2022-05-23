import "../styles/globals.css";
import "../styles/nft.css";
import Head from "next/head";
import Layout from "../containers/Layout";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
	return new Web3(provider);
}

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
			<Web3ReactProvider getLibrary={getLibrary}>
				<Layout>
					<Component {...pageProps} />;
				</Layout>
			</Web3ReactProvider>
		</>
	);
}

export default MyApp;
