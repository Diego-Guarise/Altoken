import React from "react";
import Menu from "../components/Menu";
import Balance from "../components/Balance";

const Layout = ({ children }) => {

	return (
		<div>
			<Menu />
			{children}
		</div>
	)
}

export default Layout;
