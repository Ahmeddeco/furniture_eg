import ProductCard from "@/components/shared/ProductCard"
import { getAllProductsWithSpecificClass } from "@/dl/product.data"

type Props = {
	searchParams: Promise<{ class: string }>
}

export default async function ClassesPage({ searchParams }: Props) {
	const classSlug = (await searchParams).class
	const products = await getAllProductsWithSpecificClass(classSlug)

	return (
		<div className="container mx-auto">
			<section className="mt-12 flex flex-col items-center justify-center gap-8">
				<h1> أثاث {products && products[0].class?.title}</h1>
			</section>

			{/* -------------------------------- Products -------------------------------- */}
			<section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-8 ">
				{products?.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</section>
		</div>
	)
}
