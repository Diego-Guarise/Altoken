import react from "react";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<div className="contenedor">
				<div className="text">
					<h1>
						............ la formade de blablablabla para poder
						...... de manera blablablaba gracias totales
					</h1>
				</div>
				<Link href="/marketplace">
					<button className="btn btn-outline-dark btn-lg">
						Market Place
					</button>
				</Link>
			</div>
		</div>
	);
}
