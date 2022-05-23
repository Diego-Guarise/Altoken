import React, { useState, createContext } from "react";

const NftContext = createContext();

function NftProvider(props) {
	const [showNft, setShowNft] = useState(false);
	const [currentCard, setCurrentCard] = useState(0);

	const handleClick = (id) => {
		setShowNft(!showNft);
		setCurrentCard(id);
	}

	return (
		<NftContext.Provider value={{ showNft, handleClick, currentCard }}>
			{props.children}
		</NftContext.Provider>
	);
}

export { NftContext, NftProvider};
