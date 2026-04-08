import { getAllDiscountProducts } from "@/dl/product.data"

type Props = {
	searchParams: Promise<{ discount: number; class?: string }>
}

export default async function QueryPage({ searchParams }: Props) {
	const discount = (await searchParams).discount
	const classQuery = (await searchParams).class

	const products = await getAllDiscountProducts(+discount)
	// console.log("products from QueryPage", products)

	console.log("classQuery from QueryPage", classQuery)
	console.log("discount from QueryPage", discount)
	return <h1>Welcome to QueryPage!</h1>
}
