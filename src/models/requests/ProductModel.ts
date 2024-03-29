//JSON2TS EXTENSION COMMANDS

// CTRL + ALT + V
// COMMAND + ALT + V

export interface ProductModel {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}