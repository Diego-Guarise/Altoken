import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
	const [show, setShow] = useState(false);

	return (
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
							? { display: "block", animation: "gainOpacity 1s" }
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
							<a className="nav-link active" >
								Market
							</a>
							</Link>
						</li>
					</ul>
					<form className="d-flex">
						<button className="btn btn-outline-dark" type="submit">
							Connect Wallet
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
