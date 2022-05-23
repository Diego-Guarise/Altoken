import React, { useState, createContext } from "react";

const NftContext = createContext();

function NftProvider(props) {
	const [showNft, setShowNft] = useState(false);
	const [currentCard, setCurrentCard] = useState(-1);

	const handleClick = (id) => {
		setShowNft(!showNft);
		setCurrentCard(id);
		console.log(currentCard);
	}

	return (
		<NftContext.Provider value={{ showNft, handleClick, currentCard }}>
			{props.children}
		</NftContext.Provider>
	);
}

export { NftContext, NftProvider};
