import React, {useState } from "react";
import TokenListRinkeby from "../assets/token-list-rinkeby.json";
import useBalance from "../hooks/useBalance";



const Balance = () => {

	const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0]);

	const [balance] = useBalance(
		selectedToken.address,
		selectedToken.decimals,
	)

	return (
		<div className="container">
			<select
				onChange={(e) =>
					setSelectedToken(TokenListRinkeby[e.target.value])
				}
			>
				{TokenListRinkeby.map((token, index) => (
					<option value={index} key={token.address}>
						{token.name}
					</option>
				))}
			</select>
			{selectedToken.name} balance {balance}
		</div>
	);
};

export default Balance;
