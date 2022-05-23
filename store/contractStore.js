import ERC20ABI from "../assets/abi-erc20.json";

export function getERC20Contract(tokenAdress, web3) {
	return web3
		? new web3.eth.Contract(ERC20ABI, tokenAdress, {
				from: web3.eth.defaultAccount,
		  })
		: null;
}
