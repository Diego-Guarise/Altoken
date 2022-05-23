import React, {useState, useContext } from "react";
import Image from "next/image";
import NftItem from "../containers/NftItem";
import { NftContext } from "../context/nftContext";

export const Card = props => {
	const { showNft, handleClick } = useContext(NftContext);

	return (<>
		<div className="column mb-2">
			<div className="card" style={{ width: "18rem" }}>
				<Image
					src={props.src}
					className="card-img-top"
					alt="NFT"
					width={500}
					height={250}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						{props.description}
					</p>
					<a href="#" className="btn btn-primary" onClick={() => handleClick(props.id)}>
						BUY
					</a>
				</div>
			</div>
		</div>
		</>
	);
};

export default Card;