import React, {useContext } from "react";
import CardContainer from "../containers/CardContainer";
import { NftProvider } from "../context/nftContext";

const marketplace = () => {
	return (
		<>
			<NftProvider>
				<CardContainer />
			</NftProvider>
		</>
	);
};

export default marketplace;
