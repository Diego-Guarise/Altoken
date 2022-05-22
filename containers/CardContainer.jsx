import React from "react";
import Card from "../components/Card";

const cards = [
	{ id: 1, title: "Card 1", description: "Card 1 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 1" },
	{ id: 2, title: "Card 2", description: "Card 2 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 2"  },
	{ id: 3, title: "Card 3", description: "Card 3 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 3" },
	{ id: 4, title: "Card 4", description: "Card 4 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 4" },
	{ id: 5, title: "Card 5", description: "Card 5 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 5" },
	{ id: 6, title: "Card 5", description: "Card 5 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 6" },
	{ id: 7, title: "Card 5", description: "Card 5 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 7" },
	{ id: 8, title: "Card 5", description: "Card 5 description", src:"https://dummyimage.com/500x250/aa4a44.png&text=NFT 8" },
];

const CardContainer = () => {
	return (
		<div className="container-fluid">
			<div className="d-flex p-2 flex-wrap justify-content-around">
				{cards.map((card) => (
					<Card key={card.id} title={card.title} description={card.description} src={card.src} />
				))}
			</div>
		</div>
	);
};

export default CardContainer;
