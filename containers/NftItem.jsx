import React, { useContext } from "react";
import { NftContext } from "../context/nftContext";

const NftItem = (props) => {
	const { handleClick } = useContext(NftContext);

	return (
		<div>
			<div className="nft">
				<div className="nftprimary">
					<img
						className="nftimage"
						src={props.cards[props.id - 1].src}
					/>
					<div className="nftinfo">
						<br />
						<h2 className="nftname">
							{props.cards[props.id - 1].title}
						</h2>
						<br />
						<h3 className="nftdescription">
							{props.cards[props.id - 1].description}
						</h3>
					</div>
				</div>
			</div>
			<div className="fractional1">
				<img
					className="img1"
					src="https://dummyimage.com/600x400/828282/ffffff&text=NFT+1"
				/>
				<div className="nftinfo1">
					<h2 className="nftname">NFT Name</h2>
					<h3 className="nftdescription">Description</h3>
					<br />
					<h4 className="nftprice">Time: XXXX</h4>
					<h4 className="nftprice">Price: $$$$$</h4>
				</div>
			</div>
			<div className="fractional2">
				<img
					className="img2"
					src="https://dummyimage.com/600x400/828282/ffffff&text=NFT+2"
				/>
				<div className="nftinfo2">
					<h2 className="nftname">NFT Name</h2>
					<h3 className="nftdescription">Description</h3>
					<br />
					<h4 className="nftprice">Time: XXXX</h4>
					<h4 className="nftprice">Price: $$$$$</h4>
				</div>
				<div className="properties">
					<h3>Properties</h3>
					<div className="card" style={{ width: "18rem" }}>
						<div className="card-body">
							<h5 className="card-title">Prop</h5>
							<h6 className="card-subtitle mb-2 text-muted">
								text
							</h6>
							<p className="card-text">%xx</p>
						</div>
						<div className="card" style={{ width: "18rem" }}>
							<div className="card-body">
								<h5 className="card-title">Prop</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									text
								</h6>
								<p className="card-text">%xx</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-center">
				<button
					className="btn btn-dark"
					onClick={() => handleClick(-1)}
				>
					VOLVER
				</button>
			</div>
		</div>
	);
};

export default NftItem;
