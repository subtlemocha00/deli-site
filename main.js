const leftColumnDiv = document.getElementById("leftColumn");
const rightColumnDiv = document.getElementById("rightColumn");
const dessertItemsDiv = document.getElementById("dessertItems");

const menuSaladList = [
	{
		name: "Chicken Cob Salad",
		price: "$21.99",
		description: "Chicken, cobs and salad. What's not to love?",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
	{
		name: "Caesar Salad",
		price: "$19.99",
		description: "He conquered lands and now he conquers your palate!",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
	{
		name: "Egg Salad",
		price: "$12.49",
		description: "Not really salad, is it?",
		image: "assets/universe_jar.png",
		alt: "Food Image Here",
	},
];
const menuSandwichList = [
	{
		name: "Cucumber Sandwich",
		price: "$22.49",
		description: "Rye bread with sliced cucumbers and cream cheese.",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
	{
		name: "Sloppy Joes",
		price: "$15.99",
		description: "Extra sloppy for ya!",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
	{
		name: "Ham and Swiss",
		price: "$13.99",
		description:
			"The name says it all. Includes artisan dijon mustard and a pickle on the side.",
		image: "assets/universe_jar.png",
		alt: "Food Image Here",
	},
];
const menuDessertList = [
	{
		name: "Marzipan",
		price: "$6.99",
		description: "Marzipan wrapped in a neat little paper!",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
	{
		name: "Fruit Roll-up",
		price: "$9.99",
		description: "A childhood favourite, now available at a restaurant!",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
	{
		name: "Twinkies",
		price: "$12.49",
		description: "Two Twinkies in cellophane. Served with a fork.",
		image: "./assets/universe_jar.png",
		alt: "Food Image Here",
	},
];

menuSaladList.map((item, i) => {
	const div = document.createElement("div");
	div.setAttribute("id", i);
	div.innerHTML = `
        <h4>${item.name}</h4>
        <h5>${item.price}</h5>
        <p>${item.description}</p>
        `;
	leftColumnDiv.append(div);
});
menuSandwichList.map((item, i) => {
	const div = document.createElement("div");
	div.setAttribute("id", i);
	// div.classList.add("col-6");
	div.innerHTML = `
    <h4>${item.name}</h4>
    <h5>${item.price}</h4>
    <p>${item.description}</p>
    `;
	rightColumnDiv.append(div);
});
menuDessertList.map((item, i) => {
	const div = document.createElement("div");
	div.setAttribute("id", i);
	div.classList.add("col-6");
	div.innerHTML = `
    <h4>${item.name}</h4>
    <h5>${item.price}</h5>
    <p>${item.description}</p>
    `;
	dessertItemsDiv.append(div);
});

window.addEventListener("scroll", function () {
	const parallaxHome = document.getElementById("titleSection");
	const scrollPositionY = window.scrollY;
	parallaxHome.style.backgroundPositionY = scrollPositionY * 0.5 + "px";
});
