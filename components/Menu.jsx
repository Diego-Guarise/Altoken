import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { injected } from "../components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";

const Menu = () => {
	const [show, setShow] = useState(false);
	

	const {
		active,
		chainId,
		account,
		library,
		connector,
		activate,
		deactivate,
	} = useWeb3React();

	async function connect() {
		try {
			await activate(injected);
			localStorage.setItem("isWalletConnected", true);
		} catch (ex) {
			console.log(ex);
		}
	}

	async function disconnect() {
		try {
			deactivate();
			localStorage.setItem("isWalletConnected", false);
		} catch (ex) {
			console.log(ex);
		}
	}

	useEffect(() => {
		const connectWalletOnPageLoad = async () => {
			if (localStorage.getItem("isWalletConnected") === "true") {
				try {
					await activate(injected);
					localStorage.setItem("isWalletConnected", true);
				} catch (ex) {
					console.log(ex);
				}
			}
		};
		connectWalletOnPageLoad();
	}, []);

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<Image
							src="https://dummyimage.com/100x50/000/fff.png&text=logo"
							alt="logo"
							width={100}
							height={50}
						/>
					</a>
					<button
						className="navbar-toggler"
						onClick={() => setShow(!show)}
						type="button"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
						style={
							show
								? {
										display: "block",
										animation: "gainOpacity 1s",
								  }
								: { display: "none" }
						}
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link aria-current="page" href="/">
									<a className="nav-link active">Home</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link aria-current="page" href="/marketplace">
									<a className="nav-link active">Market</a>
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav mb-2 mb-lg-0">
							{active ? (
								<li className="nav-link">
									Conectado con <b>{account}</b>
								</li>
							) : (
								<li className="nav-link">No conectado</li>
							)}
						</ul>
						<div className="d-flex">
							{active ? (
								<button
									onClick={disconnect}
									className="btn btn-outline-dark"
									type="sumbit"
								>
									Disconnect
								</button>
							) : (
								<button
									onClick={connect}
									className="btn btn-outline-dark"
									type="submit"
								>
									Connect Wallet
								</button>
							)}
						</div>
					</div>
				</div>
			</nav>
		
		</>
	);
};

export default Menu;
